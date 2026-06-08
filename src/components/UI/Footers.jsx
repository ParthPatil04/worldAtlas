import footerContact from '../../api/footerApi.json'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Footers = () => {

  const footerIcon = {
     FaLocationDot: <FaLocationDot />,
     IoCallSharp: <IoCallSharp />,
     MdEmail: <MdEmail />
  }

  return (
    <footer className="footer-section">
        <div className="grid grid-three-cols container">
           {
             footerContact.map((curData, index) => {
                const { icon, title, details } = curData;
                return (
                  <div className="footer-contact" key={index}>
                  <div className="icon">{footerIcon[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                  </div>
                )
             })
           }
        </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://thapatechnical.shop/" target="_blank">
                  ThapaTechnical
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/thapatechnical/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://thapatechnical.shop/source-code"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footers