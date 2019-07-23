import React from "react";
import { Stack } from "reactron";
import { Element } from "reactron/utils";
import { input as styles } from "tokens/components";

function InputGroup(props) {
  const children = React.Children.map(props.children, function(child, index) {
    const overrideStyles = { borderRadius: 0 };

    if (index === 0) {
      overrideStyles.borderLeftRadius = styles.borderRadius;
    } else if (index === props.children.length - 1) {
      overrideStyles.borderRightRadius = styles.borderRadius;
    }

    if (index !== 0) overrideStyles.marginLeft = "overlap";

    return React.cloneElement(child, { ...overrideStyles });
  });
  return (
    <Stack as="div" {...props}>
      {children}
    </Stack>
  );
}

InputGroup.Text = function(props) {
  return (
    <Stack
      as="div"
      {...styles}
      paddingX={2}
      color="grays.6"
      fontWeight="bold"
      fontSize={1}
      {...props}
    />
  );
};

export default InputGroup;
