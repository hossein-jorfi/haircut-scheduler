import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormField, FormLabel, FormMessage } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import { useNumberFormat } from "@/hooks/use-number-format";

export function RhfDatePicker({
  label,
  placeholder,
  className,
  form,
  name,
  disabled,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  className?: string;
  form?: UseFormReturn<any>;
  name?: string;
  disabled?: boolean;
  onChange?: (value: Date | undefined) => void;
}) {
  const { formatNumber } = useNumberFormat();

  return (
    <FormField
      control={form?.control || undefined}
      name={name || ""}
      render={({ field, formState: { errors } }) => {
        return (
          <Popover>
            <div className="flex flex-col gap-3">
              {label && <FormLabel>{label}</FormLabel>}
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground",
                    className
                  )}
                  disabled={disabled}
                  aria-invalid={!!errors[name || ""]}
                >
                  <CalendarIcon />
                  <span>
                    {formatNumber(
                      field?.value?.toLocaleDateString("fa-IR") || placeholder
                    )}
                  </span>
                </Button>
              </PopoverTrigger>
              <FormMessage />
            </div>
            <PopoverContent className="w-auto p-0" align="start" lang="en">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                onDayClick={(day) => {
                  if (onChange) {
                    onChange(day);
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
}
