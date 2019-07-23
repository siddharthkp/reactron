import React from "react";
import { Element, automaticID } from "reactron/utils";
import { form as styles } from "tokens/components";

const {
  fieldset: fieldsetStyles,
  label: labelStyles,
  input: inputStyles,
  description: descriptionStyles,
  error: errorStyles,
  button: buttonStyles,
  ...formStyles
} = styles;

function Form(props) {
  return (
    <Element as="form" {...formStyles} {...props}>
      {props.children}
    </Element>
  );
}

Form.Field = function({ label, description, error, ...props }) {
  // TODO: Respect the id on the label
  const id = automaticID(label);

  const children = React.Children.map(props.children, function(child) {
    const accessibilityProps = { id };
    if (description) accessibilityProps["aria-describedby"] = id + "-help";

    return React.cloneElement(child, {
      ...accessibilityProps,
      ...inputStyles,
      hasError: error
    });
  });

  return (
    <Element as="fieldset" {...fieldsetStyles} {...props}>
      <Element as="label" htmlFor={id} {...labelStyles}>
        {label}
      </Element>

      {children}

      {error ? <Error>{error}</Error> : null}

      {description ? (
        <Description id={id + "-help"}>{description}</Description>
      ) : null}
    </Element>
  );
};

Form.Actions = function(props) {
  const children = React.Children.map(props.children, function(child) {
    return React.cloneElement(child, { ...buttonStyles });
  });

  return (
    <Element as="div" {...props}>
      {children}
    </Element>
  );
};

function Description(props) {
  return <Element as="div" {...descriptionStyles} {...props} />;
}

function Error(props) {
  return <Element as="div" {...errorStyles} {...props} />;
}

export default Form;
