import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
  constructor(props) {
    console.log("constructor called")
    super(props)
  
    this.state = {
       data : 'Loading...'
    }
  }

  getData() {
    console.log("getData() called")
    setTimeout(() => {
        console.log("data fetched");
        this.setState({
            data : 'Loaded'
        })
    },3000)
  }
  componentDidMount() {
    console.log("component mounted")
    this.getData()
  }
    render() {
        console.log("render method called")
    return (
      <div>
        <h1>
            {this.state.data}
        </h1>
      </div>
    )
  }
}

export default LifeCyclesCDM