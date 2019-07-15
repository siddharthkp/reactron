import React from "react";
import ReachAlert from "@reach/alert";
import PropTypes from "prop-types";

import { styled, Container } from "components/utils";
import { colorStyle, space, border, layout, fontSize } from "styled-system";
import { Stack } from "components";

const Element = styled(ReachAlert)`
  ${colorStyle}
  ${space}
  ${border}
`;

/* TODO: replace with <Button appearance="link">
    once we have it
*/
const Cross = styled("button")`
  ${layout}
  ${colorStyle}
  ${border}
  ${fontSize}
  cursor: pointer;
`;

function Alert({ dismissible, onDismiss, ...props }) {
  return (
    <Element
      {...props}
      type="assertive"
      colors={props.appearance}
      borderRadius={2}
    >
      <Stack>
        <Container padding={3}>{props.children}</Container>
        {dismissible ? (
          <Cross
            aria-label="Close alert"
            colors="warning"
            border="none"
            fontSize="icon"
            cursor="pointer"
            width="clickable"
            height="clickable"
            onClick={onDismiss}
          >
            ×
          </Cross>
        ) : null}
      </Stack>
    </Element>
  );
}

Alert.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf([
    "warning",
    "error",
    "info",
    "success",
    "transparent"
  ]),
  /** Can the user disable the alert? */
  dismissible: PropTypes.bool,
  /** Method to call on dismiss, required with dismissible */
  onDismiss: PropTypes.func
};

Alert.defaultProps = {
  appearance: "warning",
  dismissible: false,
  onDismiss: () => {}
};

export default Alert;
