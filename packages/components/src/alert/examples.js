import React from "react";

import Alert from "./index";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <Alert>Oh noes!</Alert>
    </ExampleWrapper>
  );
}

function Styles() {
  return (
    <ExampleWrapper>
      <Alert appearance="warning" marginBottom={2}>
        Hey! You should take care of this
      </Alert>
      <Alert appearance="error" marginBottom={2}>
        Oh no! Something went horribly wrong
      </Alert>
      <Alert appearance="info" marginBottom={2}>
        By the way, here's some information
      </Alert>
      <Alert appearance="success" marginBottom={2}>
        Kudos! You did great
      </Alert>
      <Alert appearance="transparent" marginBottom={2}>
        Sometimes, you have to subtle
      </Alert>
    </ExampleWrapper>
  );
}

function Dismissible() {
  return (
    <ExampleWrapper>
      <AlertWrapper>
        <Alert dismissible appearance="warning">
          Hey! You should take care of this
        </Alert>
      </AlertWrapper>
    </ExampleWrapper>
  );
}

export default { Simple, Styles, Dismissible };

function AlertWrapper(props) {
  const [visible, setVisible] = React.useState(true);

  const onDismiss = () => setVisible(false);
  const clonedChildren = React.Children.map(props.children, function(child) {
    return React.cloneElement(child, { onDismiss, marginY: 2 });
  });

  return visible ? (
    clonedChildren
  ) : (
    <button onClick={_ => setVisible(true)}>Show Alert</button>
  );
}
