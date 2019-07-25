import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";
import { spinner as styles } from "tokens/components";
import css from "@styled-system/css";

function Spinner({ size, ...props }) {
  return (
    <Element
      as="div"
      height={"spinner." + size}
      width={"spinner." + size}
      css={{ ...styles, ...props }}
    ></Element>
  );
}

Spinner.propTypes = {
  /** Sizes */
  size: PropTypes.oneOf(["default", "small", "large"])
};

Spinner.defaultProps = {
  size: "default"
};

export default Spinner;
