import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  incrementButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrementButton = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-con">
        <h1 className="head">Counter</h1>
        <h1>
          <span className="span">{count}</span>{' '}
        </h1>
        <p>Click the correspoding button to increase and decrease the count!</p>
        <div>
          <button type="button" className="btn" onClick={this.decrementButton}>
            Decrease
          </button>
          <button className="btn" type="button" onClick={this.incrementButton}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
