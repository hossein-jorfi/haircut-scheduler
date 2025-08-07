import { PackageOpen } from "lucide-react";
import { H3 } from "../ui/typography";

const EmptyList = ({
  text,
  icon,
  children,
}: {
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] gap-4 text-muted-foreground">
      <div className="[&_svg]:size-30">
        {icon || <PackageOpen className="size-10" />}
      </div>
      <H3 className="text-center">{text || "موردی یافت نشد"}</H3>
      {children}
    </div>
  );
};

export default EmptyList;
