import React from "react";
import { ListItem } from "./Statics.styled";
import PropTypes from "prop-types";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <ListItem>good: {good}</ListItem>
      <ListItem>neutral:{neutral} </ListItem>
      <ListItem>bad:{bad} </ListItem>
      <ListItem>Total : {total}</ListItem>
      <ListItem>
        <strong>Positive Feedback : {positivePercentage}%</strong>
      </ListItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
