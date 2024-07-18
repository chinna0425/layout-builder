import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const showcontent = () => {
        onToggleShowContent()
      }
      const leftnavbartype = () => {
        onToggleShowLeftNavbar()
      }
      const rightnavbartype = () => {
        onToggleShowRightNavbar()
      }

      const showInputElement = () => {
        if (showContent === true) {
          return (
            <>
              <input
                type="checkbox"
                id="content"
                className="input-element"
                onClick={showcontent}
                checked
              />
              <label htmlFor="content" className="label-style">
                Content
              </label>
            </>
          )
        }
        return (
          <>
            <input
              type="checkbox"
              id="content"
              className="input-element"
              onClick={showcontent}
            />
            <label htmlFor="content" className="label-style">
              Content
            </label>
          </>
        )
      }
      const leftNavbar = () => {
        if (showLeftNavbar === true) {
          return (
            <>
              <input
                type="checkbox"
                id="leftnavabar"
                className="input-element"
                onClick={leftnavbartype}
                checked
              />
              <label htmlFor="leftnavabar" className="label-style">
                Left Navbar
              </label>
            </>
          )
        }
        return (
          <>
            <input
              type="checkbox"
              id="leftnavabar"
              className="input-element"
              onClick={leftnavbartype}
            />
            <label htmlFor="leftnavabar" className="label-style">
              Left Navbar
            </label>
          </>
        )
      }
      const rightNavbar = () => {
        if (showRightNavbar === true) {
          return (
            <>
              <input
                type="checkbox"
                id="rightnavbar"
                className="input-element"
                onClick={rightnavbartype}
                checked
              />
              <label htmlFor="rightnavbar" className="label-style">
                Right Navbar
              </label>
            </>
          )
        }
        return (
          <>
            <input
              type="checkbox"
              id="rightnavbar"
              className="input-element"
              onClick={rightnavbartype}
            />
            <label htmlFor="rightnavbar" className="label-style">
              Right Navbar
            </label>
          </>
        )
      }

      return (
        <nav className="nav-contianer">
          <div className="nav-inner-contianer">
            <h1 className="layout-title">Layout</h1>
            <ul className="nav-unorder-list">
              <li className="nav-list-item">{showInputElement()}</li>
              <li className="nav-list-item">{leftNavbar()}</li>
              <li className="nav-list-item">{rightNavbar()}</li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
