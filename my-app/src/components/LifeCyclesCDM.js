import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log("Parent constructor called")
    super(props)
  
    this.state = {
       data : 'Loading...'
    }
  }

  getData() {
    console.log("Parent getData() called")
    setTimeout(() => {
        console.log("Parent data fetched");
        this.setState({
            data : 'Loaded'
        })
    },3000)
  }
  componentDidMount() {
    console.log("Parent component mounted")
    this.getData()
  }
    render() {
        console.log("Parent render method called")
    return (
      <div>
        <h1>
            {this.state.data}
            <LifeCyclesCDMChild />
        </h1>
      </div>
    )
  }
}

export default LifeCyclesCDM