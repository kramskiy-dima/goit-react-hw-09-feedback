import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const feedbackButton = e.target.textContent;
    switch (feedbackButton) {
      case 'good':
        setGood(prevGood => prevGood + 1);

        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);

        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);

        break;
      default: {
        console.log('hello');
      }
    }
  };

  const countTotalFeedback = () => {
    const totalValue = Object.values({ good, neutral, bad }).reduce(
      (acc, value) => {
        return acc + value;
      },
      0,
    );

    return totalValue;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.ceil((good / countTotalFeedback()) * 100);
    return percentage ? percentage : 0;
  };

  const totalValueFeedback = countTotalFeedback();
  const totalValuePercentage = countPositiveFeedbackPercentage();
  const feedBackOptionsArr = Object.keys({ good, neutral, bad });

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedBackOptionsArr}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalValueFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalValueFeedback}
            positivePercentage={totalValuePercentage}
          />
        )}
      </Section>
    </div>
  );
}
