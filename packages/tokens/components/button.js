import colors from "../colors";

const button = {
  borderRadius: 2, // match input to look good next to each other
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",

  // TODO: Create a size variant
  paddings: { small: 2, default: 3, large: 4 },
  fontSizes: { small: 1, default: "base", large: 4 },

  variants: {
    /* these match the appearance prop in the component */
    default: {
      color: colors.black,
      backgroundColor: colors.grays[1],
      borderColor: colors.grays[2],
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
      },
      spinner: {
        borderColor: colors.greens[6],
        borderLeftColor: colors.white
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
      },
      spinner: {
        borderColor: "transparent",
        borderLeftColor: colors.white
      }
    },
    link: {
      color: colors.link,
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        color: colors.blues[7]
      },
      spinner: {
        borderLeftColor: colors.link
      }
    }
  }
};

export default button;
