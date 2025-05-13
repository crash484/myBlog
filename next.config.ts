import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// types/next.d.ts
import "next";

declare module "next" {
  export type PageProps = {
    params: Record<string, string>; // Plain object, not Promise
    searchParams?: Record<string, string | string[]>;
  };
}
