import React from "react";
import { cn } from "../../lib/utils";

export default function Ripple({ className, ...props }) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-ripple rounded-full bg-white/10 [--i:0]"></div>
        <div className="absolute inset-0 animate-ripple rounded-full bg-white/10 [--i:1]"></div>
        <div className="absolute inset-0 animate-ripple rounded-full bg-white/10 [--i:2]"></div>
        <div className="absolute inset-0 animate-ripple rounded-full bg-white/10 [--i:3]"></div>
        <div className="absolute inset-0 animate-ripple rounded-full bg-white/10 [--i:4]"></div>
      </div>
    </div>
  );
}