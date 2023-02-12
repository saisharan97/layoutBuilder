// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          console.log(value)
          const {showContent, showLeftNavbar, showRightNavbar} = value

          return (
            <div>
              {showLeftNavbar && (
                <div>
                  <h1>Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              )}

              {showContent && (
                <div>
                  <h1>Content</h1>
                  <p>Lorem ipsum</p>
                </div>
              )}

              {showRightNavbar && (
                <div>
                  <h1>Right Navbar Menu</h1>
                  <p>Ad 1</p>
                  <p>Ad 2</p>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
