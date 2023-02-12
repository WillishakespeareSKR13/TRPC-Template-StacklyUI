import Header from "@/components/Header";
import { PathnameAtom } from "@/jotai/pathname";
import { LayoutAnimation } from "@stacklycore/ui";
import { useAtomValue } from "jotai";
import type { FC } from "react";

type Props = {
  role?: string[];
  children: React.ReactNode;
};

const LayoutDefault: FC<Props> = ({ children }) => {
  const pathname = useAtomValue(PathnameAtom);

  return (
    <>
      <Header />
      <LayoutAnimation pathname={pathname}>{children}</LayoutAnimation>
    </>
  );
};

export default LayoutDefault;
