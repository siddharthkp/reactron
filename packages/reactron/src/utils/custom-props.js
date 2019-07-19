import { system } from "styled-system";

const customProps = system({
  borderLeftRadius: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    scale: "radii"
  },
  borderRightRadius: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
    scale: "radii"
  },
  cursor: {
    property: "cursor"
  }
});

export default customProps;
