import React from "react";
import SecretForm from "../components/SecretForm";

function Contact() {
return (
    <main>
        <section id="contact">
            <h1  onClick={(e) => document.body.style.backgroundColor = "red"}>Contact</h1>
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
                        <form className="form" id="form">
                            <p className="form-heading">Get In Touch</p>
                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Name"
                                    className="input-field"
                                    type="text"
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Email"
                                    className="input-field"
                                    type="email"
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    required=""
                                    placeholder="Subject"
                                    className="input-field"
                                    type="text"
                                />
                            </div>
                            <div className="form-field">
                                <textarea
                                    required=""
                                    placeholder="Message"
                                    cols="30"
                                    rows="3"
                                    className="input-field"
                                    id="message"
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
          <SecretForm /> {/* Använd Easter Egg-komponenten här */}
        </div>

        </section>
    </main>
);
}

export default Contact; 