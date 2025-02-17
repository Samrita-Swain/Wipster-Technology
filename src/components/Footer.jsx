
import { Link } from 'react-router-dom';
import Footer1 from "./Footer1"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>Useful Links</h6>
              <ul>
              <li><Link to="/"
              smooth={true}
              duration={500}>Home</Link></li>
        <li><Link to="/about"
              smooth={true}
              duration={500}>About</Link></li>
        <li><Link to="/services"
              smooth={true}
              duration={500}>Services</Link></li>
        <li><Link to="/teams"
              smooth={true}
              duration={500}>Team</Link></li>
        <li><Link to="/blog"
              smooth={true}
              duration={500}>Blog</Link></li>
        <li><Link to="/contact" 
              smooth={true}
              duration={500}>Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>Our Services</h6>
              <ul>
              <li>Web Design</li>
        <li>Web Development</li>
        <li>Mobile Application</li>
        <li>Content Writing</li>
        <li>
        Graphic Design</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>
              Patia NandanVihar
              </h6>
              <h6>IN 751024, India</h6>
              <br />
              <h6><span>Phone:</span>+91 7978147463</h6>
              <h6><span>Email:</span>info@wipstertechnologies.com</h6>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h6>
              Our Newsletter
              </h6>
              <p>Subscribe To Our Newsletter For Receiving The Latest Updates On The Services</p>
            </div>
          </div>
        </div>
      </div>
      <Footer1/>
    </div>
  )
}

export default Footer
