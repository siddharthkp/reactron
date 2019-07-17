import React from "react";

import Button from "./index";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <Button>Click me</Button>
    </ExampleWrapper>
  );
}

function Styles() {
  return (
    <ExampleWrapper>
      <Button margin={2}>Click me</Button>
      <Button margin={2} appearance="info">
        Click me
      </Button>
      <Button margin={2} appearance="success">
        Click me
      </Button>
      <br />
      <Button margin={2} appearance="warning">
        Click me
      </Button>
      <Button margin={2} appearance="error">
        Click me
      </Button>
      <Button margin={2} appearance="link">
        Click me
      </Button>
    </ExampleWrapper>
  );
}

export default { Simple, Styles };
