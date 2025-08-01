import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { UseFormReturn } from "react-hook-form";
import type { ReactNode } from "react";

interface Props {
  form: UseFormReturn<any>;
  label?: string;
  labelItem?: ReactNode;
  name: string;
  inputProps?: React.ComponentProps<"input">;
}

const RhfInput = ({ form, label, labelItem, name, inputProps }: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <div className="flex items-center justify-between">
              <FormLabel>{label}</FormLabel>
              {labelItem && (
                <FormDescription className="text-foreground/80">
                  {labelItem}
                </FormDescription>
              )}
            </div>
          )}
          <FormControl>
            <Input {...inputProps} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RhfInput;
