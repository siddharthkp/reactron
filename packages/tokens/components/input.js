import colors from "../colors";

const input = {
  borderRadius: 2, // match button to look good next to each other
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.grays[2],
  fontSize: "inherit",
  height: 2,
  paddingX: 3,
  error: {
    borderColor: colors.reds[2]
  }

  // TODO: Create a size variant
  // paddings: { small: 2, default: 3, large: 4 },
  // fontSizes: { small: 1, default: "base", large: 4 }
};

export default input;
