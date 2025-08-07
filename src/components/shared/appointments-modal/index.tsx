import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AppointmentsModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>رزرو نوبت</DialogTitle>
        <DialogDescription>رزرو نوبت</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">فرم</div>
      <DialogFooter>
        <Button>رزرو نوبت</Button>
        <DialogClose asChild>
          <Button variant="outline">انصراف</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AppointmentsModal;
