import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function toPersianNumber(value: string | number): string {
  if (value === null || value === undefined) return "";
  return String(value).replace(
    /[0-9]/g,
    (match) => persianNumbers[parseInt(match)]
  );
}
