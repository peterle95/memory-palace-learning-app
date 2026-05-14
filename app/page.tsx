import Iridescence from "./components/iridescence";
import { PalaceActionSelector } from "./components/palace-action-selector";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 z-0 brightness-95 contrast-125 saturate-150"
        aria-hidden="true"
      >
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.08}
          speed={0.65}
        />
      </div>

      <SiteHeader />
      <main className="relative z-10 flex flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
        <PalaceActionSelector />
      </main>
      <SiteFooter />
    </div>
  );
}
