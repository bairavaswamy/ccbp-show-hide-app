import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstname = () => {
    this.setState(preVal => ({firstName: !preVal.firstName}))
  }

  onlastName = () => {
    this.setState(preVal => ({lastName: !preVal.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="outer-div">
          <div className="btn-div">
            <button type="button" className="btn" onClick={this.onFirstname}>
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="para-div">
                <p className="para">Joe</p>
              </div>
            )}
          </div>
          <div className="btn-div">
            <button type="button" className="btn" onClick={this.onlastName}>
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="para-div">
                <p className="para">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
