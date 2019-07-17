import React from "react";
import { Element } from "reactron/utils";

function Stack(props) {
  return (
    <Element
      display="flex"
      justifyContent="start"
      alignItems="center"
      {...props}
    />
  );
}

export default Stack;
