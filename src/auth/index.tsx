import type { KeysAuths } from "@/jotai/auth";
import { AuthComponentAtom } from "@/jotai/auth";
import { useAtomValue } from "jotai";

export type AuthType = {
  layout?: KeysAuths;
  children?: React.ReactNode;
};

const Auth = (props: AuthType) => {
  const { children } = props;
  const AuthComponent = useAtomValue(AuthComponentAtom);
  return <AuthComponent>{children}</AuthComponent>;
};

export default Auth;
