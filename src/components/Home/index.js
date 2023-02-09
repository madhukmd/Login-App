import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {logStatus: false}

  onChanged = () => {
    this.setState(prevState => ({logStatus: !prevState.logStatus}))
  }

  render() {
    const {logStatus} = this.state

    return (
      <div className="bgContainer">
        <div className="contentContainer">
          {logStatus ? (
            <Message Messages="Welcome User" />
          ) : (
            <Message Messages="Please Login" />
          )}
          {logStatus ? (
            <Logout logout={this.onChanged} />
          ) : (
            <Login login={this.onChanged} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
