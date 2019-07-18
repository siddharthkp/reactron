import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";
import { button as styles } from "tokens/components";

function Button({ appearance, size, ...props }) {
  return (
    <Element
      as="button"
      variant={appearance}
      height={"button." + size}
      paddingX={styles.paddings[size]}
      fontSize={styles.fontSizes[size]}
      {...styles}
      {...props}
    />
  );
}

Button.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "destructive",
    "link"
  ]),
  /** Sizes */
  size: PropTypes.oneOf(["default", "small", "large"])
};

Button.defaultProps = {
  appearance: "default",
  size: "default"
};

export default Button;
