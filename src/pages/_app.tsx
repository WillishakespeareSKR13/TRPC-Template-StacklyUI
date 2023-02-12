import Auth from "@/auth";
import useAuthLayout from "@/hooks/useAuthLayout";
import usePathname from "@/hooks/usePathname";
import Layout from "@/layouts";
import { themes } from "@/themes";
import type { AppPropsWithLayout } from "@/types/next";
import { GlobalStyles, LayoutNormalize } from "@stacklycore/ui";

import { api } from "../utils/api";

const MyApp = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  useAuthLayout({ layout: Component.layout, auth: Component.auth });
  usePathname({ pathname: router.pathname });

  return (
    <LayoutNormalize defaultTheme="ryoshi-dark" themes={themes}>
      <Auth>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} key={router.pathname} />
        </Layout>
      </Auth>
    </LayoutNormalize>
  );
};

export default api.withTRPC(MyApp);
