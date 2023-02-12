import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = arg => {
    console.log(arg)

    // this.setState({showContent}, console.log(showContent))
    this.setState({showContent: arg}, console.log(arg))
  }

  onToggleShowLeftNavbar = () => {
    console.log(2)

    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    console.log(3)

    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(123)

    console.log(showContent)

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
