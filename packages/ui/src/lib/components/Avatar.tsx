import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { tv, type VariantProps } from "tailwind-variants";

export const avatarRoot = tv({
    base: "relative flex shrink-0 overflow-hidden rounded-full",
    variants: {
        size: {
            sm: "h-8 w-8",
            md: "h-10 w-10",
            lg: "h-12 w-12",
            xl: "h-16 w-16",
            "2xl": "h-20 w-20",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const avatarImage = tv({
    base: "aspect-square h-full w-full object-cover",
});

export const avatarFallback = tv({
    base: "flex h-full w-full items-center justify-center rounded-full bg-secondary-100 text-secondary-600 font-medium",
    variants: {
        size: {
            sm: "text-xs",
            md: "text-sm",
            lg: "text-base",
            xl: "text-lg",
            "2xl": "text-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarRoot> {
    src?: string;
    alt?: string;
    fallback?: string;
}

export const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, size, src, alt, fallback, ...props }, ref) => {
    // Generate fallback text from alt or use provided fallback
    const getFallbackText = () => {
        if (fallback) return fallback;
        if (alt) {
            return alt
                .split(' ')
                .map(word => word.charAt(0))
                .join('')
                .toUpperCase()
                .slice(0, 2);
        }
        return 'U';
    };

    return (
        <AvatarPrimitive.Root
            ref={ref}
            className={avatarRoot({ size, className })}
            {...props}
        >
            {src && (
                <AvatarPrimitive.Image
                    src={src}
                    alt={alt}
                    className={avatarImage()}
                />
            )}
            <AvatarPrimitive.Fallback className={avatarFallback({ size })}>
                {getFallbackText()}
            </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
    );
});

Avatar.displayName = "Avatar";

// Export individual components for advanced usage
export const AvatarRoot = AvatarPrimitive.Root;
export const AvatarImage = AvatarPrimitive.Image;
export const AvatarFallback = AvatarPrimitive.Fallback;