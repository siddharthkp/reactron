/* TODOs
  1. replace with <Button appearance="link">
    once we have it
  2. Use <Stack> or <Row> instead of manually setting flex
*/

import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import shouldForwardProp from "@styled-system/should-forward-prop";

import {
  colorStyle,
  space,
  border,
  layout,
  flexbox,
  fontSize
} from "styled-system";
import ReachAlert from "@reach/alert";

import theme from "tokens";
import Container from "../utils/container";

const Element = styled(ReachAlert, { shouldForwardProp })`
  ${colorStyle}
  ${space}
  ${border}
  ${layout}
  ${flexbox}
`;

const Cross = styled.button`
  ${layout}
  ${colorStyle}
  ${border}
  ${fontSize}
  cursor: pointer;
`;

// background: none;
// border: none;
// font-size: 1.5em;
function Alert({ dismissible, onDismiss, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Element
        {...props}
        type="assertive"
        colors="warning"
        borderRadius={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
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
      </Element>
    </ThemeProvider>
  );
}

Alert.defaultProps = {
  dismissible: false,
  onDismiss: () => {}
};

export default Alert;
