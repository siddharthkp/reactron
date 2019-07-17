import React from "react";
import { Link } from "gatsby";

import Breadcrumb from "./index";
import ExampleWrapper from "../utils/example-wrapper";

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
