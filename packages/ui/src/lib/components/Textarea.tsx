import type { TextareaHTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textareaContainer = tv({
    base: "relative w-full",
});

export const textarea = tv({
    base: "border-secondary-100 shadow-secondary-50 focus-within:ring-primary-100 focus-within:border-primary-600 placeholder:text-secondary-400 w-full border shadow-sm transition duration-75 focus-within:ring-4 focus-within:outline-none resize-none",
    variants: {
        size: {
            sm: "rounded-lg py-1.5 px-2.5 text-sm",
            md: "rounded-xl py-2.5 px-3.5",
            lg: "rounded-2xl py-3.5 px-4.5 text-lg",
        },
        autoResize: {
            true: "overflow-hidden",
            false: "resize-y",
        },
    },
    defaultVariants: {
        size: "md",
        autoResize: false,
    },
});

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textarea> {
    autoResize?: boolean;
    maxRows?: number;
}

export const Textarea = ({ size, className, autoResize = false, maxRows, ...props }: TextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    
    const adjustHeight = () => {
        const element = textareaRef.current;
        if (element && autoResize) {
            element.style.height = 'auto';
            const scrollHeight = element.scrollHeight;
            
            if (maxRows) {
                const lineHeight = parseInt(getComputedStyle(element).lineHeight);
                const maxHeight = lineHeight * maxRows;
                element.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
                element.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
            } else {
                element.style.height = `${scrollHeight}px`;
                element.style.overflowY = 'hidden';
            }
        }
    };
    
    useEffect(() => {
        if (autoResize) {
            adjustHeight();
        }
    }, [autoResize, maxRows, props.value]);
    
    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (autoResize) {
            adjustHeight();
        }
        if (props.onInput) {
            props.onInput(e);
        }
    };
    
    return (
        <div className={textareaContainer()}>
            <textarea 
                ref={textareaRef}
                className={textarea({ size, autoResize, className })} 
                onInput={handleInput}
                {...props} 
            />
        </div>
    );
};