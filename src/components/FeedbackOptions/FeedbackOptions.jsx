import React from "react";
import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <ul>
      {options.map((element) => {
        return (
          <Button key={element} onClick={()=>onLeaveFeedback(element)} type="button">
            {element}
          </Button>
        );
      })}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
