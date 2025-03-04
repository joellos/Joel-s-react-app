import React, { useState } from "react";
import SecretForm from "../components/SecretForm"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "c66c63f3-75f9-459b-ad40-76c8c18197ee",  // Din Web3Forms API-nyckel
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <main>
      <section id="contact">
        <h1 onClick={(e) => document.body.style.backgroundColor = "red"}>
          Contact
        </h1>
        <div className="contact-container">
          <div>
            <span>
              <h2>Contact Information</h2>
              <p>Feel free to contact me for any questions or inquiries.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bx bxs-phone"></i>
                  <span>0722242263</span>
                </div>
                <div className="contact-item">
                  <i className="bx bxs-envelope"></i>
                  <span>Joel.300@live.se</span>
                </div>
                <div className="contact-item">
                  <i className="bx bxs-map"></i>
                  <span>Stockholm, Sweden</span>
                </div>
              </div>
            </span>
          </div>

          <div className="form-container">
            <div className="form-card2">
              <form className="form" id="form" onSubmit={sendEmail}>
                <p className="form-heading">Get In Touch</p>
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="input-field"
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="input-field"
                  />
                </div>
                <div className="form-field">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="input-field"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    cols="30"
                    rows="3"
                    className="input-field"
                  ></textarea>
                </div>
                <button className="sendMessage-btn" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        
        <div className="secret-container">
          <h3>Try to find the Easter Egg!</h3>
          <SecretForm /> 
        </div>

      </section>
    </main>
  );
}

export default Contact;
