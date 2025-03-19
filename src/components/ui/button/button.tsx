import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "~/utils/cn";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
