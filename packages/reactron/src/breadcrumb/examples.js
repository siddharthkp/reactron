import React from "react";

import Breadcrumb from "./index";
import { ExampleWrapper } from "reactron/utils";

function Simple() {
  return (
    <ExampleWrapper>
      <Breadcrumb>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
        <Breadcrumb.Link href="/components/breadcrumb">
          Breadcrumb
        </Breadcrumb.Link>
      </Breadcrumb>
    </ExampleWrapper>
  );
}

function Link({ to, ...props }) {
  return <a href={to} {...props} />;
}

function ExternalLink() {
  return (
    <ExampleWrapper>
      <Breadcrumb>
        <Breadcrumb.Link as={Link} to="/">
          Home
        </Breadcrumb.Link>
        <Breadcrumb.Link as={Link} to="/components">
          Components
        </Breadcrumb.Link>
        <Breadcrumb.Link as={Link} to="/components/breadcrumb">
          Breadcrumb
        </Breadcrumb.Link>
      </Breadcrumb>
    </ExampleWrapper>
  );
}

function Separator(props) {
  return (
    <ExampleWrapper>
      <Breadcrumb separator=">">
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
        <Breadcrumb.Link href="/components/breadcrumb">
          Breadcrumb
        </Breadcrumb.Link>
      </Breadcrumb>
    </ExampleWrapper>
  );
}

export default { Simple, ExternalLink, Separator };
