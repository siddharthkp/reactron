import React from "react";
import { Stack } from "reactron";
import { button as styles } from "tokens/components";
import css from "@styled-system/css";
import theme from "tokens";

function ButtonGroup(props) {
  const children = React.Children.map(props.children, function(child, index) {
    const overrideStyles = {
      borderRadius: 0,
      "&:hover": {
        background: "black"
      }
    };

    if (index === 0) {
      overrideStyles.borderLeftRadius = styles.borderRadius;
    } else if (index === props.children.length - 1) {
      overrideStyles.borderRightRadius = styles.borderRadius;
    }

    return React.cloneElement(child, { ...overrideStyles });
  });
  return <Stack>{children}</Stack>;
}

export default ButtonGroup;
