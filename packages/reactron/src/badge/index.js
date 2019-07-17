import React from "react";
import PropTypes from "prop-types";

import { Element } from "reactron/utils";
import { badge as styles } from "tokens/components";

function Badge({ appearance, ...props }) {
  return <Element as="span" colors={appearance} {...styles} {...props} />;
}

Badge.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf(["warning", "error", "info", "success", "light"])
};

Badge.defaultProps = {
  appearance: "info"
};

export default Badge;
