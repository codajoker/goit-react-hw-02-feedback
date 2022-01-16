import React from "react";
import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map((element) => {
        return (
          <Button key={element} onClick={onLeaveFeedback} type="button">
            {element}
          </Button>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
