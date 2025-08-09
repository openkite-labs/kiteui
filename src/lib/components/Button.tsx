import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: "focus-visible:ring-ring inline-flex items-center justify-center font-medium shadow transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            primary: "bg-primary-600 border-primary-700 active:bg-primary-700 border-b-4 text-white hover:opacity-90",
            secondary:
                "bg-secondary-600 border-secondary-700 active:bg-secondary-700 border-b-4 text-white hover:opacity-90",
            outline: "border-secondary-300 border bg-transparent",
            ghost: "hover:bg-secondary-100",
        },
        size: {
            sm: "rounded-lg px-2.5 py-1.5 text-sm",
            md: "rounded-xl px-3.5 py-2.5",
            lg: "rounded-2xl px-4.5 py-3.5 text-lg",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button = ({ ...props }) => {
    return (
        <button className={button({ ...props })} {...props}>
            {props.children}
        </button>
    );
};
