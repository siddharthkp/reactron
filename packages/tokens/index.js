import { themeGet as get } from "@styled-system/theme-get";

/* Colors */
import colors from "./colors";
import colorStyles from "./color-styles";
import buttonStyles from "./button-styles";

/* Spacing */
const space = [0, 4, 8, 16, 32, 48, 64];

const sizes = [0, 4, 8, 16, 32, 48, 64];
sizes.clickable = sizes[5];
sizes.avatar = { small: 36, medium: 96, large: 144 };

/* Typography */

const fontSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72];
fontSizes.base = 18;
fontSizes.icon = 24;

/* Misc */
const radii = [0, 2, 5, 10, "50%"];

const tokens = {
  space,
  sizes,
  colors,
  radii,
  fontSizes,
  colorStyles,
  buttons: buttonStyles
};

export default tokens;
export { get };
