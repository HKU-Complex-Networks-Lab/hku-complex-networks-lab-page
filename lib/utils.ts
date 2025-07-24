// filepath: /Users/baiyue/hku-complex-networks-lab-page/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}