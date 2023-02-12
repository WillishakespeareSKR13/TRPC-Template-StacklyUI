import { KeysAuths } from "@Src/jotai/auth";
import { KeysLayouts } from "@Src/jotai/layouts";
import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppInitialProps } from "next/app";
import { Router } from "next/router";

export type AuthLayoutType = {
  layout?: KeysLayouts;
  auth?: KeysAuths;
  children?: React.ReactNode;
};

export declare type NextPageFC<P = any, IP = P> = NextPage<P, IP> &
  AuthLayoutType;

export declare type AppPropsWithLayout<P = any> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any, P> & AuthLayoutType;
  router: Router;
  __N_SSG?: boolean | undefined;
  __N_SSP?: boolean | undefined;
};
