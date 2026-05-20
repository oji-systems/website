import { RouteProgress } from "@/components/route-progress";
import { Section } from "@/components/section";
import { Skeleton, SkeletonHeading, SkeletonLine } from "@/components/skeleton";

export default function WorkLoading() {
  return (
    <>
      <RouteProgress />

      <Section>
        <div className="mb-4 max-w-3xl space-y-4">
          <div className="mb-6 flex items-center gap-3 border-b border-hairline pb-3">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-32" />
          </div>
          <SkeletonHeading lines={2} />
          <div className="max-w-2xl space-y-2 pt-3">
            <SkeletonLine />
            <SkeletonLine width="85%" />
          </div>
        </div>

        <div className="space-y-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="grid gap-6 border-t border-hairline-strong py-10 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <div className="flex items-center gap-3 md:col-span-2">
                <Skeleton className="h-3 w-6" />
                <Skeleton className="h-3 w-14" />
              </div>
              <div className="space-y-3 md:col-span-4">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-8 w-3/4" />
              </div>
              <div className="space-y-2 md:col-span-4">
                <SkeletonLine />
                <SkeletonLine width="80%" />
              </div>
              <div className="md:col-span-2 md:flex md:justify-end">
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
