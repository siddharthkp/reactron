import colors from "./colors";

const buttonStyles = {
  default: {
    color: colors.black,
    backgroundColor: colors.grays[1]
  },
  info: {
    color: colors.white,
    backgroundColor: colors.blues[6]
  },
  success: {
    color: colors.white,
    backgroundColor: colors.greens[7]
  },
  warning: {
    color: colors.grays[8],
    backgroundColor: colors.yellows[5]
  },
  error: {
    color: colors.white,
    backgroundColor: colors.reds[5]
  },
  link: {
    color: colors.link,
    backgroundColor: "transparent"
  }
};

export default buttonStyles;
