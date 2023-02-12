import { LayoutComponentAtom } from "@/jotai/layouts";
import { useAtomValue } from "jotai";

export type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  const LayoutComponent = useAtomValue(LayoutComponentAtom);
  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
