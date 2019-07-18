import React from "react";

import ButtonGroup from "./index";
import { Button } from "reactron";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <ButtonGroup>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </ButtonGroup>
    </ExampleWrapper>
  );
}

export default { Simple };
