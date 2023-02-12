// Write your code here
import {Component} from 'react'
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          console.log()
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const toggleShowContent = event => {
            onToggleShowContent(event.target.checked)
          }

          const toggleShowLeftNavbar = event => {
            onToggleShowLeftNavbar(event.target.checked)
          }

          const toggleShowRightNavbar = event => {
            onToggleShowRightNavbar(event.target.checked)
          }

          return (
            <div>
              <h1>Layout</h1>
              <form>
                <input
                  type="checkbox"
                  id="checkbox1"
                  onChange={toggleShowContent}
                  checked={showContent}
                />
                <label htmlFor="checkbox1">Content </label>
                <br />

                <input
                  type="checkbox"
                  id="checkbox2"
                  onChange={toggleShowLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="checkbox2">Left Navbar </label>
                <br />

                <input
                  type="checkbox"
                  id="checkbox3"
                  onChange={toggleShowRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="checkbox3">Right Navbar </label>
              </form>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
