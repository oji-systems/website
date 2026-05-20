import { cn } from "@/lib/utils";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "span";
};

export function Skeleton({
  className,
  as = "div",
  ...props
}: SkeletonProps) {
  const Tag = as;
  return (
    <Tag
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-md bg-[color:var(--oji-paper-elev)]",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[color:rgba(14,14,16,0.04)] before:to-transparent before:animate-[oji-shimmer_1.6s_ease-in-out_infinite]",
        className,
      )}
      {...props}
    />
  );
}

type SkeletonLineProps = {
  width?: string;
  className?: string;
};

export function SkeletonLine({ width = "100%", className }: SkeletonLineProps) {
  return (
    <Skeleton
      className={cn("h-3.5", className)}
      style={{ width }}
    />
  );
}

type SkeletonHeadingProps = {
  lines?: number;
  className?: string;
};

export function SkeletonHeading({
  lines = 2,
  className,
}: SkeletonHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-10 md:h-14",
            i === lines - 1 ? "w-3/5" : "w-full",
          )}
        />
      ))}
    </div>
  );
}
