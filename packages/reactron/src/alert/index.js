import React from "react";
import PropTypes from "prop-types";
import ReachAlert from "@reach/alert";

import { Element } from "reactron/utils";
import { alert as styles } from "tokens/components";

function Alert({ dismissible, onDismiss, ...props }) {
  return (
    <Element
      as={ReachAlert}
      type="assertive"
      colors={props.appearance}
      style={{ position: "relative" }}
      {...styles}
      {...props}
    >
      <span>{props.children}</span>
      {dismissible ? (
        <Element
          as="button"
          aria-label="Close alert"
          onClick={onDismiss}
          position="absolute"
          top="0"
          right="0"
          {...styles.closeButton}
        >
          ×
        </Element>
      ) : null}
    </Element>
  );
}

Alert.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf(["warning", "error", "info", "success", "light"]),
  /** Can the user disable the alert? */
  dismissible: PropTypes.bool,
  /** Method to call on dismiss, required with dismissible */
  onDismiss: PropTypes.func
};

Alert.defaultProps = {
  appearance: "warning",
  dismissible: false,
  onDismiss: () => {}
};

export default Alert;
