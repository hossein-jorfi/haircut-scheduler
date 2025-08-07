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

const AppointmentsModal = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>رزرو نوبت</DialogTitle>
        <DialogDescription>رزرو نوبت</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">فرم</div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">انصراف</Button>
        </DialogClose>
        <Button>
          <Plus /> رزرو نوبت
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AppointmentsModal;
