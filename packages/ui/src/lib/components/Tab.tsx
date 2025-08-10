import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { tv, type VariantProps } from "tailwind-variants";

const tab = tv({
    slots: {
        root: "w-full",
        list: "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
        trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
        content: "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
    },
    variants: {
        variant: {
            default: {
                list: "bg-gray-100",
                trigger: "data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
            },
            primary: {
                list: "bg-blue-50 border border-blue-200",
                trigger: "text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-blue-100 data-[state=active]:hover:bg-blue-700",
            },
            secondary: {
                list: "bg-purple-50 border border-purple-200",
                trigger: "text-purple-700 data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-purple-100 data-[state=active]:hover:bg-purple-700",
            },
            underline: {
                list: "bg-transparent border-b border-gray-200 rounded-none p-0 h-auto",
                trigger: "rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600 hover:text-gray-700 data-[state=active]:font-semibold",
            },
        },
        size: {
            sm: {
                list: "h-8",
                trigger: "px-2 py-1 text-xs",
            },
            md: {
                list: "h-10",
                trigger: "px-3 py-1.5 text-sm",
            },
            lg: {
                list: "h-12",
                trigger: "px-4 py-2 text-base",
            },
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});

export interface TabProps extends VariantProps<typeof tab> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    children: React.ReactNode;
    className?: string;
}

export interface TabListProps {
    children: React.ReactNode;
    className?: string;
}

export interface TabTriggerProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export interface TabContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const TabRoot = React.forwardRef<
    React.ElementRef<typeof Tabs.Root>,
    TabProps
>(({ variant, size, className, ...props }, ref) => {
    const styles = tab({ variant, size });
    
    return (
        <Tabs.Root
            ref={ref}
            className={styles.root({ className })}
            {...props}
        />
    );
});

const TabList = React.forwardRef<
    React.ElementRef<typeof Tabs.List>,
    TabListProps & VariantProps<typeof tab>
>(({ variant, size, className, ...props }, ref) => {
    const styles = tab({ variant, size });
    
    return (
        <Tabs.List
            ref={ref}
            className={styles.list({ className })}
            {...props}
        />
    );
});

const TabTrigger = React.forwardRef<
    React.ElementRef<typeof Tabs.Trigger>,
    TabTriggerProps & VariantProps<typeof tab>
>(({ variant, size, className, ...props }, ref) => {
    const styles = tab({ variant, size });
    
    return (
        <Tabs.Trigger
            ref={ref}
            className={styles.trigger({ className })}
            {...props}
        />
    );
});

const TabContent = React.forwardRef<
    React.ElementRef<typeof Tabs.Content>,
    TabContentProps & VariantProps<typeof tab>
>(({ variant, size, className, ...props }, ref) => {
    const styles = tab({ variant, size });
    
    return (
        <Tabs.Content
            ref={ref}
            className={styles.content({ className })}
            {...props}
        />
    );
});

TabRoot.displayName = "Tab";
TabList.displayName = "TabList";
TabTrigger.displayName = "TabTrigger";
TabContent.displayName = "TabContent";

export const Tab = Object.assign(TabRoot, {
    List: TabList,
    Trigger: TabTrigger,
    Content: TabContent,
});

export { TabList, TabTrigger, TabContent };