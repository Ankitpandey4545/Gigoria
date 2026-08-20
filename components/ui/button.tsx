 import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed tracking-tight";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50",
    gradient: "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700",
    ghost: "hover:bg-gray-100 text-gray-700",
  };
  
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-3.5 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}