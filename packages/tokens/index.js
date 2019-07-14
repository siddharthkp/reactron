import { system } from "styled-system";

const colors = {
  reds: [
    "#F8E4E4",
    "#EFA6A6",
    "#E06161",
    "#D95252",
    "#D12D2D",
    "#B41F1F",
    "#A20808",
    "#821919",
    "#5E1717"
  ]
};

const space = [0, 4, 8, 16, 32, 48, 64];
const sizes = [0, 4, 8, 16, 32, 48, 64];
sizes.clickable = sizes[5];

const radii = [0, 2, 5, 10, "50%"];
const fontSizes = [12, 14, 16, 18, 20, 24, 32, 48, 64, 72];
fontSizes.base = 18;
fontSizes.icon = 24;

const colorStyles = {
  warning: {
    color: colors.reds[6],
    backgroundColor: colors.reds[1],
    button: {
      color: colors.reds[4],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.reds[6]
      }
    }
  }
};

const tokens = {
  space,
  sizes,
  colors,
  radii,
  fontSizes,
  colorStyles
};

export default tokens;
