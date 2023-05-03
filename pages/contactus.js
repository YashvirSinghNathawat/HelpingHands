import React from "react";
import styled from "styled-components";

const contactus = () => {
  return (
    <ContactContainer>
      <section class="contact">
        <div class="center">
          <div class="content ">
            <h2>Contact Us</h2>
            <p>
            Helping Hand can help by providing a convenient and secure platform for people to contribute to charitable causes, ultimately making a positive impact on society. Additionally, we raise awareness about various causes and encourage more individuals to participate in philanthropy.
            </p>
          </div>
        </div>
        <div class="donation">
          <div class="gen-query">
            <h5>
              <strong>
                All General Queries
                <br />
              </strong>
            </h5>
            <div class="contact-email">
              <p>info@helpinghands.org</p>
            </div>

            <h5>Donation Related Queries</h5>
            <h6>For New Donors</h6>
            <p>
              Yashvir- +91-9351426881 <br />
              newdonors@helpinghands.org
            </p>
            <h6>For Existing Donors</h6>
            <p>
              Vinay Raj - +91-8252301410 <br />
              olddonors@helpinghands.org
            </p>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name="Name"
                  required="required"
                  placeholder="Full Name"
                />
              </div>
              <div class="inputBox">
                <input
                  type="email"
                  name="Email"
                  required="required"
                  placeholder="Email"
                />
              </div>
              <div class="inputBox">
                <textarea
                  required="required"
                  placeholder="Type your message....."
                ></textarea>
              </div>
              <div class="inputBox">
                <input
                  type="submit"
                  name="contact-btn"
                  value="Send"
                  required="required"
                />
              </div>
            </form>
          </div>
        </div>
       
      </section>
    </ContactContainer>
  );
};
const ContactContainer = styled.div`
  margin: 0;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  font-family: 'poppins'
`;
export default contactus;
