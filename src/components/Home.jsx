import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiTick } from "react-icons/ti";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BsJournalAlbum } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Optional: Controls the animation duration
      once: true, // Optional: Ensures the animation happens only once
    });

    // Optional: If you dynamically load content or need to reset AOS
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* First Band */}
      <div id="" className="first-band">
        <div className="content">
          <h1>Co-Creating Digital Destinies <span>.</span></h1>
          <p>Your Vision, Our Craftsmanship, Together Achieving Excellence</p>
        </div>
      </div>

      {/* Second Band (About) */}
      <div id="/about" className="second-band">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="/images/global-img.jpg" alt="" data-aos="zoom-in"/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="content" data-aos="fade-left">
                <h1>Wipster Technologies is a Global Scalable <span>IT company</span></h1>
                <p>Providing software, Web and IT solutions to small, medium and large companies on a local and international scale...</p>
                <ul>
                  <li><TiTick className='icons'/>We are Combining solid business domain experience...</li>
                  <li><TiTick className='icons'/>We offer progressive end-to-end web solutions.</li>
                  <li><TiTick className='icons'/>Our Mission is to develop and deliver high quality software...</li>
                  <li><TiTick className='icons'/>With over 60+ projects done so far within 1.5 years...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Band (Services) */}
      <div id="/services" className="third-band">
        <div className="container">
        <div className="content">
          <h1>Technologies</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box" data-aos="zoom-in">
                <img src="/images/website.png" alt="Website Development" className='web'/>
                <h3>Website Development</h3>
                <p>Leverage the Latest in Web Tech to Create Secure and Scalable Websites.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box" data-aos="zoom-in">
                <img src="/images/App_Development.png" alt="Website Development" className='mobile'/>
                <h3>Mobile Application Development</h3>
                <p>Crafting Intuitive and Powerful Mobile Applications That Connect, Engage, and Inspire.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box" data-aos="zoom-in">
                <img src="/images/network_security.png" alt="Website Development" className='security'/>
                <h3>Network and Security</h3>
                <p>Elevating Your Network Security to Shield Your Data and Empower Your Connections.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="box" data-aos="zoom-in">
                <img src="/images/graphic-design.png" alt="Website Development" />
                <h3>Graphic Design</h3>
                <p>Where Art Meets Precision to Elevate Your Brand&apos;s Aesthetic and Impact</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Fourth Band (Team) */}
      <div id="/team" className="fourth-band">
        <div className="container">
          <div className="content">
            <img src="/images/team-image.png" alt="" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 image" data-aos="zoom-in">
            <div className="id">
              <div className="image-box">
              <img src="/images/Pritish.png" alt="" />
              </div>
              <div className="id-box">
                <h3>Pritish Dhal</h3>
                <p>Founder</p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 image" data-aos="zoom-in">
            <div className="id">
            <div className="image-box">
              <img src="/images/Vaishnavi.png" alt="" />
              </div>
              <div className="id-box">
                <h3>KM Bhardwaj</h3>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 image" data-aos="zoom-in">
            <div className="id">
            <div className="image-box">
              <img src="/images/Pritam.jpg" alt="" />
              </div>
              <div className="id-box">
                <h3>Pritam Pattnaik</h3>
                <p>Graphic Designer</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Band (Blog) */}
      <div id="/blog" className="fifth-band" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/images/success-img.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="content">
            <h1>Report of Wipster Technologies</h1>
            <p>With a Legacy of 1.5 Years in Excellence and a Portfolio of Delighted Clients, Our Journey Speaks Volumes of Innovation, Trust, and Unmatched Quality. Explore Our Story and Achievements.</p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="report-box">
                <div className="icons">
                <FaRegSmileBeam />
                </div>
                <div className="text">
                  <h1>70</h1>
                  <p>Happy Clients</p>
                </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="report-box">
                <div className="icons">
                <BsJournalAlbum />
                </div>
                <div className="text">
                  <h1>72</h1>
                  <p>Projects</p>
                </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="report-box">
                <div className="icons">
                <IoIosTimer />
                </div>
                <div className="text">
                  <h1>2</h1>
                  <p>Years of experience</p>
                </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Sixth Band (Contact) */}
      <div className="sixth-band" data-aos="fade-up"></div>
    </div>
    
  );
};

export default Home;
