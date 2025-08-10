import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const flexContainer = tv({
    base: "flex",
    variants: {
        direction: {
            row: "flex-row",
            column: "flex-col",
            "row-reverse": "flex-row-reverse",
            "column-reverse": "flex-col-reverse",
        },
        justify: {
            start: "justify-start",
            end: "justify-end",
            center: "justify-center",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        align: {
            start: "items-start",
            end: "items-end",
            center: "items-center",
            baseline: "items-baseline",
            stretch: "items-stretch",
        },
        wrap: {
            nowrap: "flex-nowrap",
            wrap: "flex-wrap",
            "wrap-reverse": "flex-wrap-reverse",
        },
        gap: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            md: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-12",
        },
    },
    defaultVariants: {
        direction: "row",
        justify: "start",
        align: "start",
        wrap: "nowrap",
        gap: "none",
    },
});

export interface FlexContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexContainer> {}

export const FlexContainer = ({ className, ...props }: FlexContainerProps) => {
    return (
        <div className={flexContainer({ ...props, className })} {...props}>
            {props.children}
        </div>
    );
};