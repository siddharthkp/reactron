import { configure } from "@storybook/react";
import "storybook-chromatic";

// const req = require.context("../src", true, /stories\.js$/);
const req = require.context("../src", true, /alert|badge\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
