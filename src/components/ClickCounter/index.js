// Write your code here
import {useState} from 'react'

import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const solution = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div className="BgImg">
      <h1 className="headingEl">
        The Button has been clicked <span className="spanEl">{count}</span>{' '}
        times.
      </h1>
      <p className="paragraphEl">Click the button to increase the count</p>
      <div>
        <button onClick={solution} className="buttonEl1" type="button">
          Click Me!
        </button>
      </div>
    </div>
  )
}

export default ClickCounter
