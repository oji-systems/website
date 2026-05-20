import { RouteProgress } from "@/components/route-progress";
import { Section } from "@/components/section";
import { Skeleton, SkeletonHeading, SkeletonLine } from "@/components/skeleton";

export default function StudioLoading() {
  return (
    <>
      <RouteProgress />

      <Section className="pb-12">
        <Skeleton className="h-3 w-20" />
        <div className="mt-6 max-w-4xl">
          <SkeletonHeading lines={3} />
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-hairline pt-16 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <Skeleton className="h-3 w-24" />
        </div>
        <div className="space-y-3 md:col-span-8">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine width="88%" />
          <div className="pt-6">
            <SkeletonLine />
            <SkeletonLine width="72%" className="mt-2" />
          </div>
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-hairline md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <Skeleton className="h-3 w-24" />
        </div>
        <div className="space-y-3 md:col-span-8">
          <SkeletonLine />
          <SkeletonLine width="92%" />
          <SkeletonLine width="68%" />
        </div>
      </Section>
    </>
  );
}
