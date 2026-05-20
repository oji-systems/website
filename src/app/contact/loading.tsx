import { RouteProgress } from "@/components/route-progress";
import { Section } from "@/components/section";
import { Skeleton, SkeletonHeading, SkeletonLine } from "@/components/skeleton";

export default function ContactLoading() {
  return (
    <>
      <RouteProgress />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-16">
          <div className="space-y-8 lg:col-span-5">
            <Skeleton className="h-3 w-20" />
            <SkeletonHeading lines={2} />
            <div className="max-w-md space-y-2">
              <SkeletonLine />
              <SkeletonLine width="78%" />
            </div>
            <div className="space-y-5 border-t border-hairline pt-8">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-4">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="col-span-2 h-3 w-3/4" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-paper p-8 md:p-10">
              <Skeleton className="h-3 w-32" />
              <SkeletonLine className="mt-3" width="70%" />
              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-11 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-11 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-32 w-full rounded-md" />
                </div>
                <Skeleton className="h-12 w-40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
