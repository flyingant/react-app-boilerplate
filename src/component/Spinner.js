import React from "react";
import PropTypes from "prop-types";

export default function BusySpinner(props) {
  let element = (<div></div>);
  if (props.busy) {
    element = (
      <div className="spinner">
        <div className="icon"/>
      </div>
    );
  }
  return element;
}

BusySpinner.propTypes = {
  busy: PropTypes.bool
};