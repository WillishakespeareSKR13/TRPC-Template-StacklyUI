import Loader from "@/components/Loader";
import type { FC } from "react";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthDefault: FC<Props> = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <Loader loading={loading}>{children}</Loader>;
};

export default AuthDefault;
