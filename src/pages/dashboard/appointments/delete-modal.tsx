import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import api from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { CalendarX2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DeleteModal = ({ appointmentId }: { appointmentId: number }) => {
  const [open, setOpen] = useState(false);

  const { mutate: deleteAppointment, isPending } = useMutation({
    mutationFn: (id: number) => api.delete("appointments", { data: { id } }),
  });

  const handleDelete = () => {
    deleteAppointment(appointmentId, {
      onSuccess: () => {
        setOpen(false);
        toast.success("نوبت با موفقیت لغو شد");
      },
      onError: () => {
        setOpen(false);
        toast.error("لغو نوبت با خطا مواجه شد");
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <CalendarX2 />
          لغو نوبت
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>لغو نوبت</DialogTitle>
          <DialogDescription>
            آیا می خواهید این نوبت را لغو کنید؟
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">انصراف</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            <CalendarX2 /> لغو نوبت
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
