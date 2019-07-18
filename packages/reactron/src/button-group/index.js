import React from "react";
import { Stack } from "reactron";
import { button as styles } from "tokens/components";
import theme from "tokens";

function ButtonGroup(props) {
  const children = React.Children.map(props.children, function(child, index) {
    const borderRadius = 0;
    const style = {};
    const buttonBorderRadius = theme.radii[styles.borderRadius];

    if (index === 0) {
      style.borderTopLeftRadius = buttonBorderRadius;
      style.borderBottomLeftRadius = buttonBorderRadius;
    } else if (index === props.children.length - 1) {
      style.borderTopRightRadius = buttonBorderRadius;
      style.borderBottomRightRadius = buttonBorderRadius;
    }

    return React.cloneElement(child, { borderRadius, style });
  });
  return <Stack>{children}</Stack>;
}

export default ButtonGroup;
