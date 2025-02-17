import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Form = () => {

  useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 1000, // Optional: Controls the animation duration
        once: true, // Optional: Ensures the animation happens only once
      });
  
      // Optional: If you dynamically load content or need to reset AOS
      AOS.refresh();
    }, []);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all fields before sending.",
      });
      setIsSending(false);
      return;
    }

    const params = {
      from_name: fullName,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_bad7mo7", "template_959b86d", params, "gX6EjQHilFXYsqv1b") // Use your emailjs public key
      .then((res) => {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been successfully sent.",
          icon: "success",
        });
        setFormData({ fullName: "", email: "", message: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
        console.error("Email sending error:", err);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <div className="formWrapper">
        {/* Left side: Image */}
        <div className="imageContainer">
          <img src="/images/get-in-touch.jpg" alt="Get in touch" className="image" />
        </div>

        {/* Right side: Form */}
        <div className="formContainer">
          <h1 className="header">Get In Touch</h1>
          <form onSubmit={handleSubmit}>
            <label className="label" htmlFor="fullName">
              Full Name<span>*</span>
            </label>
            <input
              className="input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="email">
              Email Id<span>*</span>
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="message">
              Enter Your Message<span>*</span>
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="button" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
