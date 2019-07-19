import colors from "../colors";

const button = {
  borderRadius: 2,
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",

  // TODO: Create a size variant
  paddings: { small: 2, default: 3, large: 4 },
  fontSizes: { small: 1, default: "base", large: 4 },

  // TODO: Add hover statues
  variants: {
    /* these match the appearance prop in the component */
    default: {
      color: colors.black,
      backgroundColor: colors.grays[1],
      borderColor: colors.grays[1],
      "&:hover": {
        backgroundColor: colors.grays[2],
        borderColor: colors.grays[2]
      }
    },
    primary: {
      color: colors.white,
      backgroundColor: colors.greens[6],
      borderColor: colors.greens[6],
      "&:hover": {
        backgroundColor: colors.greens[7],
        borderColor: colors.greens[7]
      }
    },
    secondary: {
      color: colors.greens[6],
      backgroundColor: "transparent",
      borderColor: colors.greens[6],
      "&:hover": {
        color: colors.greens[7],
        borderColor: colors.greens[7]
      }
    },
    destructive: {
      color: colors.white,
      backgroundColor: colors.reds[5],
      borderColor: colors.reds[5],
      "&:hover": {
        backgroundColor: colors.reds[6],
        borderColor: colors.reds[6]
      }
    },
    link: {
      color: colors.link,
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        color: colors.blues[7]
      }
    }
  }
};

export default button;
