import React from "react";

import Tabs from "./index";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <Tabs>
        <Tabs.Tab label="One">First tab</Tabs.Tab>
        <Tabs.Tab label="Two">Second tab</Tabs.Tab>
        <Tabs.Tab label="Three">Third one</Tabs.Tab>
      </Tabs>
    </ExampleWrapper>
  );
}

export default { Simple };
