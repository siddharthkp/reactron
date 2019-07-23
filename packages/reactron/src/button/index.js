import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";
import { button as styles } from "tokens/components";

// TODO: Add ellipsis ... if there is too much text
function Button({ appearance, size, disabled, ...props }) {
  return (
    <Element
      as="button"
      height={"button." + size}
      paddingX={styles.paddings[size]}
      fontSize={styles.fontSizes[size]}
      variant={appearance}
      {...styles}
      style={{ opacity: disabled ? 0.5 : 1 }}
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
