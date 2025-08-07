import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const PageHeading = ({
  children,
  className,
  action,
}: {
  children: React.ReactNode;
  className?: string;
  action?: {
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
}) => {
  return (
    <div className="mb-6 w-full flex justify-between">
      <H3 className={cn(className)}>{children}</H3>
      {action && (
        <Button size="sm" onClick={action?.onClick}>
          {action?.icon ? action.icon : <Plus />}
          {action?.label}
        </Button>
      )}
    </div>
  );
};

export default PageHeading;
