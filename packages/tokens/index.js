import { themeGet as get } from "@styled-system/theme-get";

/* Colors */
import colors from "./colors";

/* Spacing */
const space = [0, 4, 8, 16, 32, 48, 64];

/* Size */
const sizes = [16, 24, 36, 48, 64, 96, 144];
sizes.clickable = sizes[5];
sizes.button = { small: sizes[1], default: sizes[2], large: sizes[3] };
sizes.avatar = { small: sizes[2], medium: sizes[5], large: sizes[6] };

/* Typography */
const fontSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72];
fontSizes.base = fontSizes[2];
fontSizes.icon = fontSizes[5];

/* Misc */
const radii = [0, 2, 5, 10, "50%"];

/* Variants */
import colorStyles from "./color-styles";
import button from "./components/button";

const tokens = {
  space,
  sizes,
  colors,
  radii,
  fontSizes,
  colorStyles,
  buttons: button.variants || {}
};

export default tokens;
export { get };
