import React from "react";

import Input from "./index";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <Input placeholder="What's your name?" />
    </ExampleWrapper>
  );
}
export default { Simple };
