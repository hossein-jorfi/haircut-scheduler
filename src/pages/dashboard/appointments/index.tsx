import PageHeading from "@/components/shared/page-heading";
import EmptyList from "@/components/shared/empty-list";

const Appointments = () => {
  return (
    <div>
      <PageHeading action={{ label: "رزرو نوبت", onClick: () => {} }}>
        نوبت ها
      </PageHeading>
      <EmptyList />
    </div>
  );
};

export default Appointments;
