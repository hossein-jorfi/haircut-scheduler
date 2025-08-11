import FormProvider from "@/components/form/form-provider";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RhfSelect from "@/components/form/rhf-select";
import { RhfDatePicker } from "@/components/form/rhf-date-picker";
import api from "@/services/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import RhfInput from "@/components/form/rhf-input";
import { toast } from "sonner";

interface Barber {
  id: number;
  username: string;
  email: string;
  phone: string;
  avatar: string;
}

const FormSchema = z.object({
  barber: z.string().min(1, {
    message: "لطفا آرایشگر خود را انتخاب کنید",
  }),
  date: z.date().optional(),
  time: z.string().optional(),
});
const AppointmentsModal = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      barber: "",
      date: undefined,
      time: undefined,
    },
  });

  const barberQuery = useQuery<AxiosResponse<Barber[]>>({
    queryKey: ["barbers"],
    queryFn: () => api.get("accounts/barbers/"),
  });

  const reserveQuery = useMutation({
    mutationFn: (data: { barber: string; appointment_time: string }) =>
      api.post("appointments/", { ...data, status: "scheduled" }),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Form data:", data);

    if (data.date && data.time) {
      const [hours, minutes] = data.time.split(":").map(Number);
      const combinedDateTime = new Date(data.date);
      combinedDateTime.setHours(hours, minutes, 0, 0);

      reserveQuery.mutate(
        {
          barber: data.barber,
          appointment_time: combinedDateTime.toISOString(),
        },
        {
          onSuccess: () => {
            toast.success("نوبت با موفقیت رزرو شد");
            form.reset();
            document.getElementById("close-modal")?.click();
          },
          onError: () => {
            document.getElementById("close-modal")?.click();
            toast.error("خطا در رزرو نوبت");
          },
        }
      );
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>رزرو نوبت</DialogTitle>
        <DialogDescription>
          آرایشگر و تاریخ رزرو نوبت خود را انتخاب کنید
        </DialogDescription>
      </DialogHeader>
      <FormProvider form={form} onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          <RhfSelect
            label="آرایشگر"
            name="barber"
            form={form}
            items={
              barberQuery.data?.data.map((barber) => ({
                text: barber.username,
                value: barber.id.toString(),
              })) || []
            }
            selectProps={{
              className: "w-full",
              placeholder: barberQuery.isLoading
                ? "در حال بارگذاری..."
                : "انتخاب آرایشگر",
              disabled: barberQuery.isLoading || barberQuery.isError,
            }}
          />
          <RhfDatePicker
            label="تاریخ"
            name="date"
            form={form}
            className="w-full"
            placeholder="انتخاب تاریخ"
          />
          <RhfInput
            label="ساعت"
            name="time"
            form={form}
            inputProps={{
              placeholder: "انتخاب ساعت",
              type: "time",
              className:
                "bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
            }}
          />
        </div>
        <DialogFooter className="mt-8">
          <DialogClose asChild id="close-modal">
            <Button variant="outline" type="button">
              انصراف
            </Button>
          </DialogClose>
          <Button type="submit" disabled={reserveQuery.isPending}>
            <Plus /> رزرو نوبت
          </Button>
        </DialogFooter>
      </FormProvider>
    </DialogContent>
  );
};

export default AppointmentsModal;
