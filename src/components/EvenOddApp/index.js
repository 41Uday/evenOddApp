// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, eve: 'Even'}

  incrementButt = () => {
    const value = Math.ceil(Math.random() * 100)
    console.log(value)
    this.setState({num: value})
    if (value % 2 === 0) {
      this.setState({eve: 'Even'})
    } else {
      this.setState({eve: 'Odd'})
    }
  }

  render() {
    const {num, eve} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="head">Count {num}</h1>
          <p className="para"> Count is {eve}</p>
          <button type="button" className="butt" onClick={this.incrementButt}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
