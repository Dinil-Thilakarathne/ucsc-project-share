"use client";

import { cn } from "@/lib/utils";

type variants = "default" | "outline";

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variants;
}

export default function OutlineButton({
  variant = "default",
  ...props
}: OutlineButtonProps) {
  const containerClass = cn(
    " relative flex h-fit w-fit cursor-pointer overflow-clip px-8 lg:px-24 py-4 rounded-full transition-opacity duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none ",
    variant === "outline" && "outline outline-black",
    props.className
  );
  return (
    <button className={containerClass} data-slot="button">
      <span className="relative text-white mix-blend-difference">
        {props.children}
      </span>
    </button>
  );
}
