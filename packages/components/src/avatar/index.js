import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { space, width, border } from "styled-system";
import theme from "tokens";

const Element = styled.img`
  ${width}
  ${border}
  ${space}
`;

function Avatar(props) {
  return (
    <ThemeProvider theme={theme}>
      <Element margin="space.3" width="50" borderRadius="radii.3" {...props} />
    </ThemeProvider>
  );
}

export default Avatar;
