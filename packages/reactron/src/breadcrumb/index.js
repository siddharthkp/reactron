import React from "react";
import PropTypes from "prop-types";
import { Element } from "reactron/utils";
import { Stack } from "reactron";

// TODO: replace with Link component in the future
function BreadcrumbLink({ isLast, as, ...props }) {
  const As = as;

  if (isLast) return <span {...props} />;
  else return <As {...props} />;
}

// TODO: Remove when you create the Link component
const temporaryListStyles = {
  listStyle: "none",
  margin: 0,
  paddingInlineStart: 0
};

function Breadcrumb({ separator, ...props }) {
  const children = React.Children.map(props.children, function(child, index) {
    const isLast = index === props.children.length - 1;

    return (
      <li aria-current={isLast ? "page" : null}>
        {React.cloneElement(child, { isLast })}
        {isLast ? null : (
          <Element as="span" aria-hidden="true" marginX="2" color="grays.5">
            {separator}
          </Element>
        )}
      </li>
    );
  });

  return (
    <Element as="nav" aria-label="breadcrumb" color="grays.5" {...props}>
      <Stack as="ul" style={temporaryListStyles}>
        {children}
      </Stack>
    </Element>
  );
}

Breadcrumb.Link = BreadcrumbLink;

Breadcrumb.propTypes = {
  /** Separator between link items */
  separator: PropTypes.string
};

Breadcrumb.defaultProps = {
  separator: "/"
};

Breadcrumb.Link.defaultProps = {
  as: "a"
};

export default Breadcrumb;
