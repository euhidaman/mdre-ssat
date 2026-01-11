import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: string;
  withText?: boolean;
  variant?: "header" | "footer";
}

export default function Logo({ size, withText, variant = "header" }: LogoProps) {
  const isHeader = variant === "header";
  const logoSrc = isHeader ? "/mdre-ssat-icon-top.png" : "/mdre-ssat-icon.png";
  const logoAlt = "MDRE-SSAT Labs Logo";

  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row justify-start items-center",
        withText && "gap-3"
      )}
    >
      <div
        className={cn(
          "relative transition-transform hover:scale-105 duration-200",
          isHeader ? "h-8 w-40 md:h-12 md:w-60" : "h-32 w-40 md:h-40 md:w-48",
          size
        )}
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          priority
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
}
