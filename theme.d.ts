import type { themes } from "@Src/themes";
import type { IPalette, ThemeColor } from "@stacklycore/ui";

declare module "@emotion/react" {
  export * from "@emotion/react";
  export interface Theme extends IPalette {}
  export type ThemeKeys = keyof typeof themes;
  export type ColorKeys = keyof ThemeColor;
}
