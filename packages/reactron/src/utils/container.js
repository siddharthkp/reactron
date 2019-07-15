import styled from "@emotion/styled";
import { space } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Element = styled("span", { shouldForwardProp })(space);

export default Element;
