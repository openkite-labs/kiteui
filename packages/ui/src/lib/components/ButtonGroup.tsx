import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { tv, type VariantProps } from "tailwind-variants";

const buttonGroup = tv({
    slots: {
        root: "inline-flex rounded-lg border border-gray-200 bg-white shadow-sm",
        item: "focus-visible:ring-ring inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary-600 data-[state=on]:text-white hover:bg-gray-50 data-[state=on]:hover:bg-primary-700 first:rounded-l-lg last:rounded-r-lg border-r border-gray-200 last:border-r-0",
    },
    variants: {
        size: {
            sm: {
                item: "px-2.5 py-1.5 text-sm",
            },
            md: {
                item: "px-3.5 py-2.5",
            },
            lg: {
                item: "px-4.5 py-3.5 text-lg",
            },
        },
        variant: {
            default: {
                item: "text-gray-700",
            },
            primary: {
                item: "text-gray-700 data-[state=on]:bg-primary-600 data-[state=on]:text-white data-[state=on]:hover:bg-primary-700",
            },
            secondary: {
                item: "text-gray-700 data-[state=on]:bg-secondary-600 data-[state=on]:text-white data-[state=on]:hover:bg-secondary-700",
            },
        },
    },
    defaultVariants: {
        size: "md",
        variant: "primary",
    },
});

export interface ButtonGroupSingleProps extends VariantProps<typeof buttonGroup> {
    type?: "single";
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export interface ButtonGroupMultipleProps extends VariantProps<typeof buttonGroup> {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

export type ButtonGroupProps = ButtonGroupSingleProps | ButtonGroupMultipleProps;

export interface ButtonGroupItemProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const ButtonGroupRoot = React.forwardRef<
    React.ElementRef<typeof ToggleGroup.Root>,
    ButtonGroupProps
>(({ size, variant, className, type = "single", ...props }, ref) => {
    const styles = buttonGroup({ size, variant });
    
    if (type === "multiple") {
        return (
            <ToggleGroup.Root
                ref={ref}
                type="multiple"
                className={styles.root({ className })}
                {...(props as Omit<ButtonGroupMultipleProps, 'size' | 'variant' | 'className' | 'type'>)}
            />
        );
    }
    
    return (
        <ToggleGroup.Root
            ref={ref}
            type="single"
            className={styles.root({ className })}
            {...(props as Omit<ButtonGroupSingleProps, 'size' | 'variant' | 'className' | 'type'>)}
        />
    );
});

const ButtonGroupItem = React.forwardRef<
    React.ElementRef<typeof ToggleGroup.Item>,
    ButtonGroupItemProps & VariantProps<typeof buttonGroup>
>(({ size, variant, className, ...props }, ref) => {
    const styles = buttonGroup({ size, variant });
    
    return (
        <ToggleGroup.Item
            ref={ref}
            className={styles.item({ className })}
            {...props}
        />
    );
});

ButtonGroupRoot.displayName = "ButtonGroup";
ButtonGroupItem.displayName = "ButtonGroupItem";

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
    Item: ButtonGroupItem,
});

export { ButtonGroupItem };