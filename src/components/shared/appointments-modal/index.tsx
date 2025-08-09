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
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

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
});
const AppointmentsModal = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      barber: "",
      date: undefined,
    },
  });

  const barberQuery = useQuery<AxiosResponse<Barber[]>>({
    queryKey: ["barbers"],
    queryFn: () => api.get("accounts/barbers/"),
  });
  console.log(barberQuery.data?.data);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
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
              placeholder: "انتخاب آرایشگر",
            }}
          />
          <RhfDatePicker
            label="تاریخ"
            name="date"
            form={form}
            className="w-full"
            placeholder="انتخاب تاریخ"
          />
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">انصراف</Button>
          </DialogClose>
          <Button>
            <Plus /> رزرو نوبت
          </Button>
        </DialogFooter>
      </FormProvider>
    </DialogContent>
  );
};

export default AppointmentsModal;
