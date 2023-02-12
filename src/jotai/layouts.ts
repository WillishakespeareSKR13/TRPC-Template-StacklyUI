import LayoutDefault from "@/layouts/LayoutDefault";
import { atom } from "jotai";

export const Layouts = {
  default: LayoutDefault,
};

export type KeysLayouts = keyof typeof Layouts;

export const LayoutsAtom = atom(Layouts);

export const LayoutAtom = atom("default" as KeysLayouts);

export const LayoutComponentAtom = atom((get) => {
  const layout = get(LayoutAtom);
  const layouts = get(LayoutsAtom);
  return layouts[layout ?? "default"];
});
