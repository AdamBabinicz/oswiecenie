import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ marginRight: "2rem" }} />
            <div>
              <p>26-611 Radom</p>
              <h4>Polska</h4>
            </div>
          </div>
          <div className="phone">
            {/* <h4>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              1-800-123-1234
            </h4> */}
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              puaro@vp.pl
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Sentencja</h4>
          <p>
            "Sapere aude! Miej odwagę posługiwać się swym własnym rozumem - tak
            brzmi hasło oświecenia" - Immanuel Kant.
          </p>
          <div className="social">
            <a
              href="//www.facebook.com/30liceumlodz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="//twitter.com/poniatowskistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
