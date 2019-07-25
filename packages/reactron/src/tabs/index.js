import React from "react";
import { Button } from "reactron";
import { Element } from "reactron/utils";
import * as Reach from "@reach/tabs";
import { tabs as styles } from "tokens/components";
import css from "@styled-system/css";

function Tabs(props) {
  const labels = React.Children.map(props.children, function(child) {
    return child.props.label;
  });

  const content = React.Children.map(props.children, function(child) {
    return child.props.children;
  });

  return (
    <Reach.Tabs>
      <Reach.TabList>
        {labels.map(function(label) {
          return (
            <Reach.Tab
              key={label}
              as={Button}
              appearance="link"
              css={css(styles.tab)}
            >
              {label}
            </Reach.Tab>
          );
        })}
      </Reach.TabList>

      <Reach.TabPanels>
        {content.map(function(children, index) {
          return (
            <Reach.TabPanel as={Element} key={index} {...styles.panel}>
              {children}
            </Reach.TabPanel>
          );
        })}
      </Reach.TabPanels>
    </Reach.Tabs>
  );
}

Tabs.Tab = function Tab(props) {
  return props.children;
};

export default Tabs;
