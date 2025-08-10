import type { HTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Heading component
const heading = tv({
    base: "font-bold text-gray-900 leading-tight",
    variants: {
        size: {
            "1": "text-6xl", // 60px
            "2": "text-5xl", // 48px
            "3": "text-4xl", // 36px
            "4": "text-3xl", // 30px
            "5": "text-2xl", // 24px
            "6": "text-xl",  // 20px
            "7": "text-lg",  // 18px
            "8": "text-base", // 16px
            "9": "text-sm",  // 14px
        },
    },
    defaultVariants: {
        size: "5",
    },
});

// Text component
const text = tv({
    base: "text-gray-700 leading-relaxed",
    variants: {
        size: {
            "1": "text-6xl", // 60px
            "2": "text-5xl", // 48px
            "3": "text-4xl", // 36px
            "4": "text-3xl", // 30px
            "5": "text-2xl", // 24px
            "6": "text-xl",  // 20px
            "7": "text-lg",  // 18px
            "8": "text-base", // 16px
            "9": "text-sm",  // 14px
        },
    },
    defaultVariants: {
        size: "8",
    },
});

// Blockquote component
const blockquote = tv({
    base: "border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4",
    variants: {
        size: {
            "1": "text-6xl", // 60px
            "2": "text-5xl", // 48px
            "3": "text-4xl", // 36px
            "4": "text-3xl", // 30px
            "5": "text-2xl", // 24px
            "6": "text-xl",  // 20px
            "7": "text-lg",  // 18px
            "8": "text-base", // 16px
            "9": "text-sm",  // 14px
        },
    },
    defaultVariants: {
        size: "8",
    },
});

// Component interfaces
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof heading> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof text> {}

export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement>, VariantProps<typeof blockquote> {}

// Heading component
export const Heading = ({ as: Component = "h2", size, className, children, ...props }: HeadingProps) => {
    return (
        <Component className={heading({ size, className })} {...props}>
            {children}
        </Component>
    );
};

// Text component
export const Text = ({ size, className, children, ...props }: TextProps) => {
    return (
        <p className={text({ size, className })} {...props}>
            {children}
        </p>
    );
};

// Blockquote component
export const Blockquote = ({ size, className, children, ...props }: BlockquoteProps) => {
    return (
        <blockquote className={blockquote({ size, className })} {...props}>
            {children}
        </blockquote>
    );
};