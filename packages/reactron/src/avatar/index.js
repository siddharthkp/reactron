import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";

function Avatar({ size, ...props }) {
  return (
    <Element as="img" width={"avatar." + size} borderRadius={4} {...props} />
  );
}

Avatar.defaultProps = {
  size: "small"
};

Avatar.propTypes = {
  /** Size of the avatar */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Alt text for avatar image, example: username*/
  alt: PropTypes.string.isRequired
};

export default Avatar;
