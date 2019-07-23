import React from "react";

import Form from "./index";
import { Button, Input } from "reactron";
import ExampleWrapper from "../utils/example-wrapper";

function Simple() {
  function onSubmit(event) {
    event.preventDefault();
    alert("submitted");
  }
  return (
    <ExampleWrapper>
      <Form onSubmit={onSubmit}>
        <Form.Field
          label="Email address"
          description="We'll never share your email with anyone else."
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Field>

        <Form.Field label="Password">
          <Input type="password" placeholder="Enter password" />
        </Form.Field>

        <Form.Actions>
          <Button disabled appearance="primary">
            Submit
          </Button>
          <Button type="reset" appearance="link">
            Reset
          </Button>
        </Form.Actions>
      </Form>
    </ExampleWrapper>
  );
}

function ValidationErrors() {
  return (
    <ExampleWrapper>
      <Form>
        <Form.Field
          label="Email address"
          description="We'll never share your email with anyone else."
          error="Email address is not valid"
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Field>

        <Form.Field
          label="Password"
          error="Password should have at least 8 charachters"
        >
          <Input type="password" placeholder="Enter password" />
        </Form.Field>

        <Form.Actions>
          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </Form.Actions>
      </Form>
    </ExampleWrapper>
  );
}

export default { Simple, ValidationErrors };
