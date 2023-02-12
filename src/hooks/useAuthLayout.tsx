import { AuthAtom } from "@/jotai/auth";
import { LayoutAtom } from "@/jotai/layouts";
import type { AuthLayoutType } from "@/types/next";
import { useAtom } from "jotai";
import { useEffect } from "react";

const useAuthLayout = (props: AuthLayoutType) => {
  const { layout: layoutGet, auth: authGet } = props;
  const [layout, setLayout] = useAtom(LayoutAtom);
  const [auth, setAuth] = useAtom(AuthAtom);

  useEffect(() => {
    setLayout(layoutGet ?? "default");
    setAuth(authGet ?? "default");
  }, [layoutGet, authGet]);

  return {
    layout,
    auth,
  };
};

export default useAuthLayout;
