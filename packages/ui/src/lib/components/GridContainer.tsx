import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const gridContainer = tv({
    base: "grid",
    variants: {
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
            9: "grid-cols-9",
            10: "grid-cols-10",
            11: "grid-cols-11",
            12: "grid-cols-12",
        },
        rows: {
            1: "grid-rows-1",
            2: "grid-rows-2",
            3: "grid-rows-3",
            4: "grid-rows-4",
            5: "grid-rows-5",
            6: "grid-rows-6",
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
    },
    defaultVariants: {
        columns: 1,
        gap: "none",
        justify: "start",
        align: "start",
    },
});

export interface GridContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridContainer> {
    column?: number | string;
}

export const GridContainer = ({ className, column, columns, ...props }: GridContainerProps) => {
    // Support both 'column' and 'columns' props for flexibility
    const finalColumns = column || columns;
    
    return (
        <div className={gridContainer({ ...props, columns: finalColumns as any, className })} {...props}>
            {props.children}
        </div>
    );
};