import { useState } from 'react';

// Statistics component
const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={`${props.positive} %`} />
      </tbody>
    </table>
  );
};

// StatisticLine component
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

// Button component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
};

// App component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
    if (type === 'good') setGood(good + 1);
    else if (type === 'neutral') setNeutral(neutral + 1);
    else if (type === 'bad') setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button onClick={() => handleClick('good')} text="good" />
      <Button onClick={() => handleClick('neutral')} text="neutral" />
      <Button onClick={() => handleClick('bad')} text="bad" />

      <h2>statistics</h2>
      
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} 
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
