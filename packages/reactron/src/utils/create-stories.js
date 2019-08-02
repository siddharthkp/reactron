import React from "react";
import { storiesOf } from "@storybook/react";

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

export default createStories;
