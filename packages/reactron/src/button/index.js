import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactron";
import { Element } from "reactron/utils";
import { button as styles } from "tokens/components";

// TODO: Add ellipsis ... if there is too much text
function Button({ appearance, size, disabled, loading, children, ...props }) {
  const spinnerStyles = Object.assign(
    { marginRight: 2 },
    styles.variants[appearance].spinner
  );

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
    >
      {loading ? (
        <Spinner size={size} marginRight={2} {...spinnerStyles} />
      ) : null}
      {children}
    </Element>
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
  size: PropTypes.oneOf(["default", "small", "large"]),
  /** Show loading state */
  loading: PropTypes.bool
};

Button.defaultProps = {
  appearance: "default",
  size: "default",
  loading: false
};

export default Button;
