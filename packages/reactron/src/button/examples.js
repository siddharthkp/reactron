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
      <Button margin={2} appearance="default">
        Click me
      </Button>
      <Button margin={2} appearance="primary">
        Click me
      </Button>
      <Button margin={2} appearance="secondary">
        Click me
      </Button>
      <Button margin={2} appearance="destructive">
        Click me
      </Button>
      <Button margin={2} appearance="link">
        Click me
      </Button>
    </ExampleWrapper>
  );
}

function Sizes() {
  return (
    <ExampleWrapper>
      <Button margin={2} size="small">
        Click me
      </Button>
      <Button margin={2} size="default">
        Click me
      </Button>
      <Button margin={2} size="large">
        Click me
      </Button>
    </ExampleWrapper>
  );
}

export default { Simple, Styles, Sizes };
