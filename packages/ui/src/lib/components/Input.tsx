import type { InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const input = tv({
    base: "focus-visible:ring-ring w-full border border-gray-300 shadow transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variants: {
        size: {
            sm: "rounded-lg px-2.5 py-1.5 text-sm",
            md: "rounded-xl px-3.5 py-2.5",
            lg: "rounded-2xl px-4.5 py-3.5 text-lg",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof input> {}

export const Input = ({ size, className, ...props }: InputProps) => {
    return <input className={input({ size, className })} {...props} />;
};
