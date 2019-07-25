import { keyframes } from "@emotion/core";
import tokens from "tokens";
const { colors, sizes } = tokens;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default {
  border: "2px solid",
  borderColor: colors.grays[1],
  borderLeftColor: colors.greens[6],
  borderRadius: "50%",
  animation: `${spin} 1s infinite linear`
};
