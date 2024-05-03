import React from "react";
import "./Contact.css";
import message from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import call from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import white_icon from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b390218-5ca3-4f9d-9258-9c936ee4cb64");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <div className="message-head">
          <h2>Send us a message</h2>
          <img src={message} alt="" />
        </div>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <div className="contact-icon">
          <img src={mail_icon} alt="" />
          <p>Contact@GreatStack.dev</p>
        </div>
        <div className="call">
          <img src={call} alt="" />
          <p>+91 7557708578</p>
        </div>
        <div className="location">
          <img src={location} alt="" />
          <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor=""> Your name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor=""> Phone number: </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor=""> Your Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <label htmlFor=""> Write your message here: </label>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="btn dark-btn ">
            Submit now <img src={white_icon} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
