import { H3 } from "../ui/typography";

const EmptyList = ({
  text,
  icon,
}: {
  text?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
      {icon}
      <H3 className="text-center">{text || "موردی یافت نشد"}</H3>
    </div>
  );
};

export default EmptyList;
