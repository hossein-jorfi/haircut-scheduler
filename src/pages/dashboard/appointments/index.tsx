import PageHeading from "@/components/shared/page-heading";
import EmptyList from "@/components/shared/empty-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Appointments = () => {
  return (
    <div>
      <PageHeading action={{ label: "رزرو نوبت", onClick: () => {} }}>
        نوبت ها
      </PageHeading>
      <EmptyList text="هنوز نوبتی رزرو نشده است">
        <Button>
          <Plus />
          رزرو نوبت
        </Button>
      </EmptyList>
    </div>
  );
};

export default Appointments;
