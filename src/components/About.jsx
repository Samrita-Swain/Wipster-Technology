import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BsJournalAlbum } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoDisplay from "./LogoDisplay";

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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="about-second-band">
        <div className="container">
          <div className="box">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
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
              <div className="col-lg-4 col-md-4 col-sm-12">
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
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="about-box">
                  <div className="about-circle">
                    <IoIosTimer />
                  </div>
                  <div className="about-box-content">
                    <h1>2.5</h1>
                    <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-third-band">
        <div className="container">
          <div className="content">
            <h1>
              Why <span>Choose</span> Our Company
            </h1>
            <p>
              We are a creative agency,building,websites that drive
              traffic,engagment and conversion for industry-leading brand and
              startups.
            </p>
          </div>
          <div className="options">
            <LogoDisplay />
            <div className="security">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="security-box">
                    <img src="/images/white-hat.png" alt="" />
                    <h1>White Hat</h1>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="security-box">
                    <img
                      src="/images/server-security(bw).png"
                      alt=""
                      className="bw-img"
                    />
                    <img
                      src="/images/server-security.png"
                      alt=""
                      className="color-img"
                    />
                    <h1>Server Security</h1>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="security-box">
                    <img
                      src="/images/penetration-security(bw).png"
                      alt=""
                      className="bw-img"
                    />
                    <img
                      src="/images/penetration-security.png"
                      alt=""
                      className="color-img"
                    />
                    <h1>Penetration Security</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-fourth-band">
        <div className="container">
          <div className="content">
            <h1>
              What Make Us <span>Different</span>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>01</h1>
            </div>
            <div className="text">
              <h6>
                Use of lateset technology.
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>02</h1>
            </div>
            <div className="text">
              <h6>
                End-to-end solutions
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>03</h1>
            </div>
            <div className="text">
              <h6>
                Holistic approach
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>04</h1>
            </div>
            <div className="text">
              <h6>
                Project Managment-Jira
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>05</h1>
            </div>
            <div className="text">
              <h6>
                Customized Solutions
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>06</h1>
            </div>
            <div className="text">
              <h6>
                integrated service offering
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>07</h1>
            </div>
            <div className="text">
              <h6>
                Comprehensive testing
              </h6>
            </div>
          </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fourth-box">
            <div className="number">
              <h1>08</h1>
            </div>
            <div className="text">
              <h6>
                Client-centric approach
              </h6>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
