import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";
import { button as styles } from "tokens/components";

function Button(props) {
  return (
    <Element as="button" variant={props.appearance} {...styles} {...props} />
  );
}

Button.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf([
    "default",
    "warning",
    "error",
    "info",
    "success",
    "link"
  ])
};

Button.defaultProps = {
  appearance: "default"
};

export default Button;
