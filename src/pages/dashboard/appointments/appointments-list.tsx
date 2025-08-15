import { Calendar, Pencil, Trash, UserRound } from "lucide-react";
import { type AppointmentType } from ".";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Small } from "@/components/ui/typography";
import { useNumberFormat } from "@/hooks/use-number-format";
import { Button } from "@/components/ui/button";

const AppointmentsList = ({
  appointments,
}: {
  appointments: AppointmentType[];
}) => {
  const { formatNumber } = useNumberFormat();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.map((appointment) => (
        <Card key={appointment.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserRound /> {appointment.barber_name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Small className="flex items-center gap-2">
              <Calendar className="size-5" />
              {formatNumber(appointment.appointment_time)}
            </Small>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-2">
            <Button>
              <Pencil />
              تغییر تاریخ
            </Button>
            <Button variant="secondary">
              <Trash />
              لغو نوبت
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AppointmentsList;
