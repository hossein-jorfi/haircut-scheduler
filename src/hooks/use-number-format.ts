import { toPersianNumber } from "@/lib/utils";

export function useNumberFormat() {
  const formatNumber = (value: string | number): string => {
    return toPersianNumber(value);
  };

  return { formatNumber };
}
