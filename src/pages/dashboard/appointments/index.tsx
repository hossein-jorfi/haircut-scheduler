import PageHeading from "@/components/shared/page-heading";
import EmptyList from "@/components/shared/empty-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import AppointmentsModal from "@/components/shared/appointments-modal";
import { useState } from "react";
import AppointmentsList from "./appointments-list";
import { useSuspenseQuery } from "@tanstack/react-query";
import api from "@/services/api";
export interface AppointmentType {
  id: number;
  customer: number;
  customer_name: string;
  barber: number;
  barber_name: string;
  appointment_time: string;
  status: string;
}
const Appointments = () => {
  const [open, setOpen] = useState(false);

  const { data: appointments } = useSuspenseQuery<{ data: AppointmentType[] }>({
    queryKey: ["appointments"],
    queryFn: () => api("/appointments"),
  });

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
      {appointments?.data?.length > 0 ? (
        <AppointmentsList appointments={appointments.data} />
      ) : (
        <EmptyList text="هنوز نوبتی رزرو نشده است">
          <Button onClick={() => setOpen(true)}>
            <Plus />
            رزرو نوبت
          </Button>
        </EmptyList>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <AppointmentsModal />
      </Dialog>
    </div>
  );
};

export default Appointments;
