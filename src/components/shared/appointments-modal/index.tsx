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

const FormSchema = z.object({
  barber: z.string().min(1, {
    message: "لطفا آرایشگر خود را انتخاب کنید",
  }),
  date: z.string().min(1, {
    message: "لطفا تاریخ خود را انتخاب کنید",
  }),
});
const AppointmentsModal = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      barber: "",
      date: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>رزرو نوبت</DialogTitle>
        <DialogDescription>رزرو نوبت</DialogDescription>
      </DialogHeader>
      <FormProvider form={form} onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">فرم</div>
        <DialogFooter>
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
