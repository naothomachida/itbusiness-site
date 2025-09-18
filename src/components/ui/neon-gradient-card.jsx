import React from "react";
import { cn } from "../../lib/utils";

export default function NeonGradientCard({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ffaa40",
    secondColor: "#9c40ff",
  },
  ...props
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-black p-[1px]",
        className,
      )}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r opacity-75"
        style={{
          background: `conic-gradient(from 0deg, ${neonColors.firstColor}, ${neonColors.secondColor}, ${neonColors.firstColor})`,
          borderRadius: `${borderRadius}px`,
          padding: `${borderSize}px`,
        }}
      />
      <div
        className="relative z-10 rounded-xl bg-black"
        style={{
          borderRadius: `${borderRadius - borderSize}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}