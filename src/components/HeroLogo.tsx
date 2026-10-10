import { BrandLogo } from "./BrandLogo";

export function HeroLogo() {
  return (
    <BrandLogo
      className="h-auto w-full max-w-[min(100%,280px)] sm:max-w-[min(100%,360px)] md:max-w-[min(100%,430px)]"
      width={1280}
      height={324}
      priority
    />
  );
}
