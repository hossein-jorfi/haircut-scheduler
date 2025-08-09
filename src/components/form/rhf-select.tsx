import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { useNumberFormat } from "@/hooks/use-number-format";
import type { UseFormReturn } from "node_modules/react-hook-form/dist/types";
import type { ReactNode } from "react";

type SelectItemType = {
  text?: string;
  value: string;
};

interface Props {
  form: UseFormReturn<any>;
  label?: string;
  labelItem?: ReactNode;
  name: string;
  selectProps?: React.ComponentProps<"input">;
  items: SelectItemType[];
}

const RhfSelect = ({
  form,
  label,
  labelItem,
  name,
  selectProps,
  items,
}: Props) => {
  const { formatNumber } = useNumberFormat();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <div className="flex items-center justify-between">
              <FormLabel>{formatNumber(label)}</FormLabel>
              {labelItem && (
                <FormDescription className="text-foreground/80">
                  {labelItem}
                </FormDescription>
              )}
            </div>
          )}
          <Select
            {...field}
            {...(selectProps as any)}
            value={field.value || ""}
            onValueChange={(value) => {
              field.onChange(value);
              selectProps?.onChange?.(value as any);
            }}
          >
            <FormControl>
              <SelectTrigger className={selectProps?.className}>
                <SelectValue
                  placeholder={formatNumber(selectProps?.placeholder || "")}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {formatNumber(item?.text || "")}
                </SelectItem>
              ))}
            </SelectContent>
            <FormMessage />
          </Select>
        </FormItem>
      )}
    />
  );
};

export default RhfSelect;
