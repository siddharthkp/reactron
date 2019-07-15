import { color, space, border } from "styled-system";
import { ThemeProvider } from "reactron";
import { styled } from "reactron/utils";
import theme, { get } from "tokens";

const Element = styled("div")`
  ${color}
  ${space}
  ${border}
  border-radius: ${get("radii.2")}px ${get("radii.2")}px 0 0;
  & + pre.prism-code {
    border-radius: 0 0 4px 4px;
    margin-bottom: ${get("space.6")}px;
  }
`;

function ExampleWrapper(props) {
  return (
    <ThemeProvider theme={theme}>
      <Element
        padding={4}
        backgroundColor="grays.0"
        border="1px solid"
        borderColor="grays.2"
      >
        {props.children}
      </Element>
    </ThemeProvider>
  );
}

export default ExampleWrapper;
