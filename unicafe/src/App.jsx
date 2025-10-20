import { useState } from 'react'

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const FeedbackControlsSection = ({handleGood, handleNeutral, handleBad}) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleGood} />
      <Button text={"neutral"} onClick={handleNeutral} />
      <Button text={"bad"} onClick={handleBad} />
    </div>
  )
}

const StatisticLine = ({text, value, suffix=""}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{suffix}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  const avg = ((good - bad)/all).toFixed(2)
  const positiveFraction = (100.0*(good/all)).toFixed(2)

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positiveFraction} suffix=" %" />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <FeedbackControlsSection 
        handleGood={handleGoodFeedback}
        handleNeutral={handleNeutralFeedback}
        handleBad={handleBadFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
