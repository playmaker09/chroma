import Image from "next/image";
import { HeroCenterOverlay } from "@/components/HeroCenterOverlay";
import {
  getHeroAssetAvailability,
  getHeroCenterVideoSources,
  HERO_PATHS,
} from "@/lib/hero-assets";

/** Figma reference sizes (px) */
const DEVICE = {
  left: { width: 460, height: 246 },
  center: { width: 640, height: 508 },
  right: { width: 427, height: 336 },
} as const;

const centerSizeClass = "h-auto w-full max-w-[640px]";

type HeroCenterDeviceProps = {
  centerVideoSources: ReturnType<typeof getHeroCenterVideoSources>;
  className?: string;
  imageClassName?: string;
};

function HeroCenterDevice({
  centerVideoSources,
  className = centerSizeClass,
  imageClassName = "relative z-0 block h-auto w-full",
}: HeroCenterDeviceProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={HERO_PATHS.center}
        alt="Skincarebud project on laptop"
        width={DEVICE.center.width}
        height={DEVICE.center.height}
        priority
        className={imageClassName}
      />
      <HeroCenterOverlay
        sources={centerVideoSources}
        className="pointer-events-none absolute left-1/2 top-[44%] z-10 h-[73%] w-[71%] -translate-x-1/2 -translate-y-1/2 object-cover object-center"
      />
    </div>
  );
}

export function HeroVisual() {
  const assets = getHeroAssetAvailability();
  const centerVideoSources = getHeroCenterVideoSources();

  if (!assets.ready) {
    return (
      <div className="flex min-h-[220px] w-full items-center justify-center rounded-3xl border border-dashed border-border bg-surface/60 px-6 py-12 text-center text-sm text-muted">
        Add hero device images to <code className="mx-1 text-foreground">public/hero/</code>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[1440px] px-2 sm:px-4 lg:px-8">
      {/* Mobile: single center device — avoids wing overlap and clipped layout */}
      <div className="mx-auto w-full max-w-[min(100%,320px)] sm:max-w-[360px] md:hidden">
        <div className="hero-device-float-delay-1">
          <HeroCenterDevice centerVideoSources={centerVideoSources} />
        </div>
      </div>

      {/* Tablet / desktop: three-device composition */}
      <div className="relative mx-auto hidden min-h-[500px] w-full md:block lg:min-h-[540px]">
        <div className="absolute left-0 top-0 z-10 -translate-x-[10%] -rotate-[8deg] md:left-[1%] md:-translate-x-[10%] lg:left-0 lg:-translate-x-[12%] xl:-translate-x-[14%]">
          <div className="hero-device-float">
            <Image
              src={HERO_PATHS.left}
              alt="Global Pinoy Travel project on monitor"
              width={DEVICE.left.width}
              height={DEVICE.left.height}
              priority
              className="h-auto w-[min(28vw,460px)] max-w-[460px] lg:w-[min(32vw,460px)]"
            />
          </div>
        </div>

        <div className="absolute left-1/2 top-[12%] z-30 -translate-x-1/2 lg:top-[14%]">
          <div className="hero-device-float-delay-1">
            <HeroCenterDevice
              centerVideoSources={centerVideoSources}
              className={`${centerSizeClass} w-[min(52vw,640px)]`}
            />
          </div>
        </div>

        <div className="absolute right-0 top-[8%] z-20 translate-x-[10%] rotate-[10deg] md:right-[1%] md:translate-x-[10%] lg:right-0 lg:top-[6%] lg:translate-x-[12%] xl:translate-x-[14%]">
          <div className="hero-device-float-delay-2">
            <Image
              src={HERO_PATHS.right}
              alt="Unified E-Wallet project on laptop"
              width={DEVICE.right.width}
              height={DEVICE.right.height}
              priority
              className="h-auto w-[min(32vw,427px)] max-w-[427px] lg:w-[min(38vw,427px)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
