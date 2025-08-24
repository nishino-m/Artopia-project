import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const button = cva(
    "inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                solid: "bg-blue-600 text-white hover:bg-blue-700",
                outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
                ghost: "text-gray-900 hover:bg-gray-100",
            },
            size: {
                sm: "h-9 px-3 text-sm",
                md: "h-10 px-4",
                lg: "h-11 px-5 text-lg",
            },
        },
        defaultVariants: { variant: "outline", size: "md" },
    }
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export const Button = ({ className, variant, size, ...props }: Props) => (
    <button className={twMerge(button({ variant, size }), className)}
    {...props}
    />
);