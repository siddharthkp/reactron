import React from "react";
import { Element } from "reactron/utils";
import { input as styles } from "tokens/components";

function Input({ hasError, ...props }) {
  const inputStyles = { ...styles };
  if (hasError) Object.assign(inputStyles, inputStyles.error);

  return <Element as="input" {...inputStyles} {...props} />;
}

export default Input;
