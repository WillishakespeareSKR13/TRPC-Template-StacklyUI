import { PathnameAtom } from "@/jotai/pathname";
import { useAtom } from "jotai";
import { useEffect } from "react";

type Props = {
  pathname: string;
};

const usePathname = (props: Props) => {
  const { pathname: pathnameGet } = props;
  const [pathname, setPathname] = useAtom(PathnameAtom);
  useEffect(() => {
    setPathname(pathnameGet ?? "/");
  }, [pathname]);
  return pathname;
};

export default usePathname;
