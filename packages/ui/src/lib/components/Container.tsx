import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const container = tv({
    base: "w-full",
    variants: {
        padding: {
            none: "p-0",
            xs: "p-1",
            sm: "p-2",
            md: "p-4",
            lg: "p-6",
            xl: "p-8",
            "2xl": "p-12",
        },
        margin: {
            none: "m-0",
            xs: "m-1",
            sm: "m-2",
            md: "m-4",
            lg: "m-6",
            xl: "m-8",
            "2xl": "m-12",
        },
        background: {
            none: "bg-transparent",
            white: "bg-white",
            gray: "bg-gray-50",
            primary: "bg-primary-50",
            secondary: "bg-secondary-50",
        },
        border: {
            none: "border-0",
            sm: "border border-gray-200",
            md: "border-2 border-gray-200",
            lg: "border-4 border-gray-200",
        },
        rounded: {
            none: "rounded-none",
            sm: "[border-radius:calc(var(--radius-base)*0.33)]", /* ~2px when base is 6px */
            md: "[border-radius:var(--radius-base)]", /* Uses the configurable base */
            lg: "[border-radius:calc(var(--radius-base)*1.33)]", /* ~8px when base is 6px */
            xl: "[border-radius:calc(var(--radius-base)*2)]", /* ~12px when base is 6px */
            "2xl": "[border-radius:calc(var(--radius-base)*2.67)]", /* ~16px when base is 6px */
            full: "rounded-full",
        },
        shadow: {
            none: "shadow-none",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg",
            xl: "shadow-xl",
        },
    },
    defaultVariants: {
        padding: "none",
        margin: "none",
        background: "none",
        border: "none",
        rounded: "none",
        shadow: "none",
    },
});

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof container> {}

export const Container = ({ className, ...props }: ContainerProps) => {
    return (
        <div className={container({ ...props, className })} {...props}>
            {props.children}
        </div>
    );
};