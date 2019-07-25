import "storybook-chromatic";

import React from "react";
import path from "path";
import { configure, storiesOf } from "@storybook/react";

/* fetch all files with the name examples.js in their name */
const req = require.context("../src", true, /examples\.js$/);

function loadStories() {
  req.keys().forEach(function(filename) {
    /* parse component name from filename */
    const componentName = path.dirname(filename).replace("./", "");
    /* require the examples */
    const Examples = req(filename).default;

    createStories(componentName, Examples);
  });
}

function createStories(componentName, Examples) {
  const stories = storiesOf(componentName, module);

  /* shape of Examples looks like this:
    {
      Simple: ReactComponent,
      Complex: ReactComponent,
      Stateful: ReactComponent,
    }
  */

  const keys = Object.keys(Examples);

  keys.map(function(key) {
    const Example = Examples[key];
    return stories.add(key, () => <Example />);
  });
}

configure(loadStories, module);
