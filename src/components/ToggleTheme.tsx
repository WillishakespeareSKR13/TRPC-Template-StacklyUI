import { css } from "@emotion/react";
import {
  AtomButton,
  AtomIcon,
  ChangeBrightness,
  IconCSS,
  IsBackDark,
  useTheme,
} from "@stacklycore/ui";

const ICONS = {
  light:
    "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/icons/light.svg",
  dark: "https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/icons/dark.svg",
} as {
  [key: string]: string;
};

const ToggleTheme = () => {
  const { key, toggle } = useTheme();
  return (
    <AtomButton
      onClick={() => toggle()}
      css={(theme) => css`
        top: 30px;
        right: 30px;
        width: max-content;
        padding: 0px 20px;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.048);
        border: 1px solid ${theme?.togletheme?.properties?.border ?? "#b4b4b4"};
        background-color: ${theme?.togletheme?.properties?.background ??
        "#ffffff"};
        :hover {
          background-color: ${ChangeBrightness(
            theme?.togletheme?.properties?.background?.toString() ?? "#ffffff",
            -10
          )};
        }
      `}
    >
      <AtomIcon
        css={(theme) => css`
          width: 18px;
          height: 18px;
          ${IconCSS(
            IsBackDark(
              theme?.togletheme?.properties?.background?.toString() ??
                "#ffffff",
              {
                black: "#b4b4b4",
                white: "#ffffff",
              }
            )
          )}
        `}
        icon={ICONS[key ?? "light"]}
      />
    </AtomButton>
  );
};

export default ToggleTheme;
