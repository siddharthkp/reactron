import * as styledSystem from "styled-system";
import customProps from "./custom-props";

const { compose } = styledSystem;

const systemProps = compose(
  styledSystem.background,
  styledSystem.border,
  styledSystem.color,
  styledSystem.display,
  styledSystem.flexbox,
  styledSystem.grid,
  styledSystem.layout,
  styledSystem.position,
  styledSystem.shadow,
  styledSystem.space,
  styledSystem.typography,
  styledSystem.colorStyle,
  styledSystem.buttonStyle,
  styledSystem.textStyle,
  { ...customProps }
);

export default systemProps;
