/**
 * A thin top-of-viewport progress indicator. It is only mounted from inside
 * loading.tsx files, which means React unmounts it automatically once the
 * destination route has finished streaming.
 */
export function RouteProgress() {
  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] overflow-hidden bg-transparent"
    >
      <div
        className="h-full origin-left bg-[color:var(--oji-sienna)]"
        style={{
          animation: "oji-progress 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        }}
      />
    </div>
  );
}
