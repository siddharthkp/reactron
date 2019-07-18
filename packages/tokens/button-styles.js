import colors from "./colors";

const buttonStyles = {
  default: {
    color: colors.black,
    backgroundColor: colors.grays[1]
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.greens[6]
  },
  secondary: {
    color: colors.black,
    backgroundColor: colors.greens[2]
    //TODO: find out if adding border
    // is possible here.
  },
  destructive: {
    color: colors.white,
    backgroundColor: colors.reds[5]
  },
  link: {
    color: colors.link,
    backgroundColor: "transparent"
  }
};

export default buttonStyles;
