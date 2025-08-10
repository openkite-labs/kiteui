import type { InputHTMLAttributes, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const inputContainer = tv({
    base: "relative w-full",
});

export const input = tv({
    base: "border-secondary-100 shadow-secondary-50 focus-within:ring-primary-100 focus-within:border-primary-600 placeholder:text-secondary-400 w-full border shadow-sm transition duration-75 focus-within:ring-4 focus-within:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&[type=number]]:[-moz-appearance:textfield]",
    variants: {
        size: {
            sm: "rounded-lg py-1.5 text-sm",
            md: "rounded-xl py-2.5",
            lg: "rounded-2xl py-3.5 text-lg",
        },
        hasIcon: {
            true: "",
            false: "",
        },
    },
    compoundVariants: [
        {
            size: "sm",
            hasIcon: false,
            class: "px-2.5",
        },
        {
            size: "md",
            hasIcon: false,
            class: "px-3.5",
        },
        {
            size: "lg",
            hasIcon: false,
            class: "px-4.5",
        },
        {
            size: "sm",
            hasIcon: true,
            class: "pl-8 pr-2.5",
        },
        {
            size: "md",
            hasIcon: true,
            class: "pl-10 pr-3.5",
        },
        {
            size: "lg",
            hasIcon: true,
            class: "pl-12 pr-4.5",
        },
    ],
    defaultVariants: {
        size: "md",
        hasIcon: false,
    },
});

export const inputIcon = tv({
    base: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center text-secondary-400 pointer-events-none",
    variants: {
        size: {
            sm: "left-2.5 w-3 h-3",
            md: "left-3.5 w-4 h-4",
            lg: "left-4.5 w-5 h-5",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof input> {
    icon?: ReactNode;
}

export const Input = ({ size, className, icon, ...props }: InputProps) => {
    const hasIcon = !!icon;
    
    return (
        <div className={inputContainer()}>
            {icon && (
                <div className={inputIcon({ size })}>
                    {icon}
                </div>
            )}
            <input className={input({ size, hasIcon, className })} {...props} />
        </div>
    );
};
