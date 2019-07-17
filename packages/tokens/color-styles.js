import colors from "./colors";

const colorStyles = {
  warning: {
    color: colors.yellows[7],
    backgroundColor: colors.yellows[1],
    button: {
      color: colors.yellows[6],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.yellows[7]
      }
    }
  },
  error: {
    color: colors.reds[6],
    backgroundColor: colors.reds[1],
    button: {
      color: colors.reds[4],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.reds[6]
      }
    }
  },
  info: {
    color: colors.blues[7],
    backgroundColor: colors.blues[1],
    button: {
      color: colors.blues[4],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.blues[7]
      }
    }
  },
  success: {
    color: colors.greens[7],
    backgroundColor: colors.greens[1],
    button: {
      color: colors.greens[5],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.greens[7]
      }
    }
  },
  light: {
    color: colors.grays[7],
    backgroundColor: colors.grays[0],
    button: {
      color: colors.grays[5],
      backgroundColor: "transparent",
      "&:hover": {
        color: colors.grays[7]
      }
    }
  }
};

export default colorStyles;
