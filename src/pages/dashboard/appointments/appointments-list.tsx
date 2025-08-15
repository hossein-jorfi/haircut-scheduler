import {
  Calendar,
  Check,
  Clock,
  NotebookPen,
  UserRound,
} from "lucide-react";
import { type AppointmentType } from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Small } from "@/components/ui/typography";
import { useNumberFormat } from "@/hooks/use-number-format";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DeleteModal from "./delete-modal";

const AppointmentsList = ({
  appointments,
}: {
  appointments: AppointmentType[];
}) => {
  const { formatNumber } = useNumberFormat();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.map((appointment, index) => (
        <Card key={appointment.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserRound className="size-5" /> {appointment.barber_name}
            </CardTitle>
            <CardDescription className="mt-1">
              <Badge variant={index % 2 === 0 ? "default" : "outline"}>
                {index % 2 === 0 ? <Check /> : <Clock />}
                {index % 2 === 0 ? "تایید شده" : "در انتظار تایید"}
              </Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Small className="flex items-center gap-2">
              <Calendar className="size-5" />
              {formatNumber(appointment.appointment_time)}
            </Small>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-2">
            <Button>
              <NotebookPen />
              تغییر تاریخ
            </Button>
            <DeleteModal />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AppointmentsList;
