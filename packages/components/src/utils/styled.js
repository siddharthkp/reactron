import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";

function customisedStyled(element) {
  return styled(element, { shouldForwardProp });
}

export default customisedStyled;
