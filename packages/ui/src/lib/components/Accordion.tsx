import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { tv } from "tailwind-variants";
import { ChevronDown } from "lucide-react";

export const accordionRoot = tv({
    base: "w-full",
    variants: {
        variant: {
            default: "space-y-2",
            bordered: "border-secondary-200 divide-secondary-200 divide-y rounded-lg border",
            ghost: "space-y-1",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const accordionItem = tv({
    base: "",
    variants: {
        variant: {
            default: "border-secondary-200 rounded-lg border",
            bordered: "first:rounded-t-lg last:rounded-b-lg",
            ghost: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const accordionTrigger = tv({
    base: "hover:bg-secondary-50 focus-visible:ring-primary-500 flex flex-1 items-center justify-between px-4 py-4 text-left font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
    variants: {
        variant: {
            default: "rounded-lg [&[data-state=open]]:rounded-b-none",
            bordered: "[&[data-state=open]]:border-secondary-200 first:rounded-t-lg [&[data-state=open]]:border-b",
            ghost: "hover:bg-secondary-50 rounded-md",
        },
        size: {
            sm: "px-3 py-2 text-sm",
            md: "px-4 py-4",
            lg: "px-5 py-5 text-lg",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});

export const accordionContent = tv({
    base: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
    variants: {
        variant: {
            default: "border-secondary-200 border-t",
            bordered: "",
            ghost: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const accordionContentInner = tv({
    base: "px-4 py-4",
    variants: {
        size: {
            sm: "px-3 py-2",
            md: "px-4 py-4",
            lg: "px-5 py-5",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

interface AccordionBaseProps {
    variant?: "default" | "bordered" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
    dir?: "ltr" | "rtl";
    orientation?: "horizontal" | "vertical";
    children?: React.ReactNode;
}

interface AccordionSingleProps extends AccordionBaseProps {
    type: "single";
    collapsible?: boolean;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}

interface AccordionMultipleProps extends AccordionBaseProps {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
    variant?: "default" | "bordered" | "ghost";
}

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    variant?: "default" | "bordered" | "ghost";
    size?: "sm" | "md" | "lg";
    hideChevron?: boolean;
}

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
    variant?: "default" | "bordered" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(
    ({ className, variant, size, type = "single", ...props }, ref) => {
        if (type === "single") {
            const singleProps = props as Omit<AccordionSingleProps, "type" | "variant" | "size" | "className">;
            return (
                <AccordionPrimitive.Root
                    ref={ref}
                    className={accordionRoot({ variant, className })}
                    type="single"
                    collapsible={singleProps.collapsible}
                    value={singleProps.value}
                    defaultValue={singleProps.defaultValue}
                    onValueChange={singleProps.onValueChange}
                    disabled={singleProps.disabled}
                    dir={singleProps.dir}
                    orientation={singleProps.orientation}
                >
                    {singleProps.children}
                </AccordionPrimitive.Root>
            );
        } else {
            const multipleProps = props as Omit<AccordionMultipleProps, "type" | "variant" | "size" | "className">;
            return (
                <AccordionPrimitive.Root
                    ref={ref}
                    className={accordionRoot({ variant, className })}
                    type="multiple"
                    value={multipleProps.value}
                    defaultValue={multipleProps.defaultValue}
                    onValueChange={multipleProps.onValueChange}
                    disabled={multipleProps.disabled}
                    dir={multipleProps.dir}
                    orientation={multipleProps.orientation}
                >
                    {multipleProps.children}
                </AccordionPrimitive.Root>
            );
        }
    },
);
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(
    ({ className, variant, ...props }, ref) => (
        <AccordionPrimitive.Item ref={ref} className={accordionItem({ variant, className })} {...props} />
    ),
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AccordionTriggerProps
>(({ className, variant, size, hideChevron = false, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger ref={ref} className={accordionTrigger({ variant, size, className })} {...props}>
            {children}
            {!hideChevron && (
                <ChevronDown className="text-secondary-500 h-4 w-4 shrink-0 transition-transform duration-200" />
            )}
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    AccordionContentProps
>(({ className, variant, size, children, ...props }, ref) => (
    <AccordionPrimitive.Content ref={ref} className={accordionContent({ variant, className })} {...props}>
        <div className={accordionContentInner({ size })}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
