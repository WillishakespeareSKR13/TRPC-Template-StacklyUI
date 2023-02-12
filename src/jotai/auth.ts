import AuthDefault from "@/auth/AuthDefault";
import { atom } from "jotai";

export const Auths = {
  default: AuthDefault,
};

export type KeysAuths = keyof typeof Auths;

export const AuthsAtom = atom(Auths);

export const AuthAtom = atom("default" as KeysAuths);

export const AuthComponentAtom = atom((get) => {
  const auth = get(AuthAtom);
  const auths = get(AuthsAtom);
  return auths[auth ?? "default"];
});
