import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { layout, flexbox } from "styled-system";

const Element = styled("span", { shouldForwardProp })(layout, flexbox);

function Stack(props) {
  return (
    <Element
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    />
  );
}

export default Stack;
