import React from "react";

import InputGroup from "./index";
import { Button, Input } from "reactron";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  return (
    <ExampleWrapper>
      <InputGroup>
        <Input placeholder="What's your name?" />
        <Button>Click me</Button>
      </InputGroup>
    </ExampleWrapper>
  );
}

function Combinations() {
  return (
    <ExampleWrapper>
      <InputGroup marginBottom={2}>
        <Input placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </InputGroup>

      <InputGroup marginBottom={2}>
        <Button>Refresh token</Button>
        <Input defaultValue="*******" />
      </InputGroup>

      <InputGroup marginBottom={2}>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>Login</Button>
      </InputGroup>

      <InputGroup marginBottom={2}>
        <Input defaultValue="*******" />
        <Button>Copy token</Button>
        <Button>Refresh token</Button>
      </InputGroup>

      <InputGroup marginBottom={2}>
        <InputGroup.Text>@</InputGroup.Text>
        <Input placeholder="username" />
      </InputGroup>

      <InputGroup marginBottom={2}>
        <Input placeholder="username" />
        <InputGroup.Text>@email.com</InputGroup.Text>
      </InputGroup>
    </ExampleWrapper>
  );
}

export default { Simple, Combinations };
