import React, { Component } from "react";
import {
  FeedbackOptions,
  Statistics,
  Section,
  Notification,
} from "./components";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (e) => {
    const name = e.target.innerText;
    console.log(name);
    this.setState((state) => {
      return {
        [name]: state[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (isNaN((this.state.good / this.countTotalFeedback()) * 100)) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };
  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={"There is no feedback"}></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
