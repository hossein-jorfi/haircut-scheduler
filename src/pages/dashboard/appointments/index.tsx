import PageHeading from "@/components/shared/page-heading";
import EmptyList from "@/components/shared/empty-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import AppointmentsModal from "@/components/shared/appointments-modal";
import { useState } from "react";

const Appointments = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeading
        action={{
          label: "رزرو نوبت",
          onClick: () => setOpen(true),
        }}
      >
        نوبت ها
      </PageHeading>
      <EmptyList text="هنوز نوبتی رزرو نشده است">
        <Button onClick={() => setOpen(true)}>
          <Plus />
          رزرو نوبت
        </Button>
      </EmptyList>
      <Dialog open={open} onOpenChange={setOpen}>
        <AppointmentsModal />
      </Dialog>
    </div>
  );
};

export default Appointments;
