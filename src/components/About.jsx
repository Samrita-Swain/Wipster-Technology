import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegSmileBeam } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BsJournalAlbum } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
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
      <div className="about-first-band">
        <div className="container">
          <div className="content" data-aos="zoom-in">
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <div className="about-second-band">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-lg-4">
                <div className="about-box">
                  <div className="about-circle">
                    <FaRegSmileBeam />
                  </div>
                  <div className="about-box-content">
                  <h1>70</h1>
                  <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-box">
                  <div className="about-circle">
                  <BsJournalAlbum />
                  </div>
                  <div className="about-box-content">
                  <h1>72</h1>
                  <p>Projects</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-box">
                  <div className="about-circle">
                  <IoIosTimer />
                  </div>
                  <div className="about-box-content">
                  <h1>2</h1>
                  <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-third-band"></div>
    </div>
  );
};

export default About;
