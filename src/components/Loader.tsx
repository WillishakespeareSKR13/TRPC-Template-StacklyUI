import {
  AtomImage,
  AtomText,
  AtomWrapper,
  css,
  UCB,
  UCT,
} from "@stacklycore/ui";
import React from "react";

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

const Loader = (props: Props) => {
  const { loading, children } = props;
  if (loading) return <LoaderAnimation />;
  return <>{children}</>;
};

const LoaderAnimation = () => {
  return (
    <AtomWrapper
      css={() => css`
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
      `}
    >
      <AtomText
        css={() => css`
          font-size: 62px;
          line-height: 1;
          font-weight: 600;
          @media (max-width: 1024px) {
            font-size: 52px;
          }
          @media (max-width: 768px) {
            font-size: 42px;
          }

          background: linear-gradient(
            90deg,
            ${UCB(UCT("#ffffff", 20), -10)} 0%,
            ${UCB(UCT("#ffffff", 20), -10)} 10%,
            ${UCB(UCT("#ffffff", 40), 35)} 50%,
            ${UCB(UCT("#ffffff", 20), -10)} 80%,
            ${UCB(UCT("#ffffff", 20), -10)} 100%
          );
          background-size: 200% auto;
          animation: gradient 3s ease-in-out infinite;

          background-clip: text;
          -webkit-text-fill-color: transparent;

          @keyframes gradient {
            0% {
              background-position: 200% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      >
        リョーシ研
      </AtomText>
      <AtomImage
        css={() => css`
          opacity: 0.3;
          width: 130px;
          height: 50px;
          object-fit: contain;
        `}
        src="https://storage.googleapis.com/stackly-assets/rioshy/assets/Rioshy%20logo.svg"
      />
    </AtomWrapper>
  );
};

export default Loader;
