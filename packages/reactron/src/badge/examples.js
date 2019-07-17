import React from "react";

import Badge from "./index";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <Badge>Private</Badge>
    </ExampleWrapper>
  );
}

function Styles() {
  return (
    <ExampleWrapper>
      <Badge appearance="warning" marginRight={2}>
        Private
      </Badge>
      <Badge appearance="error" marginRight={2}>
        Private
      </Badge>
      <Badge appearance="info" marginRight={2}>
        Private
      </Badge>
      <Badge appearance="success" marginRight={2}>
        Private
      </Badge>
      <Badge appearance="light">9</Badge>
    </ExampleWrapper>
  );
}

export default { Simple, Styles };
