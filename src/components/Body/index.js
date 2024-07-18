import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="body-unorder-list">
                <li className="body-list-style">Item1</li>
                <li className="body-list-style">Item2</li>
                <li className="body-list-style">Item3</li>
                <li className="body-list-style">Item4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="middle-navbar-container">
              <h1 className="body-heading">Content</h1>
              <p className="middle-nav-para">
                Lorem ipsum doloe sit amet,consectetur adipiscing elit, sed do
                elusmod tempor Incldldunt ut labore etdolore magna allqua.Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="body-heading">Right Navbar Menu</h1>
              <div className="box-container">
                <div className="right-navpara-style">
                  <p>Ad 1</p>
                </div>
                <div className="right-navpara-style">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
