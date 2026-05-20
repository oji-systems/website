import { RouteProgress } from "@/components/route-progress";
import { Section } from "@/components/section";
import { Skeleton, SkeletonHeading, SkeletonLine } from "@/components/skeleton";

export default function RootLoading() {
  return (
    <>
      <RouteProgress />
      <Section>
        <div className="space-y-4">
          <Skeleton className="h-3 w-40" />
          <SkeletonHeading lines={3} className="max-w-3xl" />
          <div className="max-w-xl space-y-2 pt-6">
            <SkeletonLine />
            <SkeletonLine width="92%" />
            <SkeletonLine width="78%" />
          </div>
        </div>
      </Section>
    </>
  );
}
