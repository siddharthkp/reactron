import React from "react";
import { styled } from "components/utils";
import { space, width, border } from "styled-system";
import PropTypes from "prop-types";

const Element = styled("img")`
  ${width}
  ${border}
  ${space}
`;

function Avatar({ size, ...props }) {
  return <Element {...props} width={"avatar." + size} borderRadius={4} />;
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
