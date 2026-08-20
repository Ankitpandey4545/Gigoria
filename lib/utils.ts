import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * CSS classes ko merge karne ke liye utility function
 * @example
 * cn("bg-red-500", "text-white", isActive && "bg-blue-500")
 * // Output: "bg-red-500 text-white bg-blue-500" (duplicates remove ho jayenge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}