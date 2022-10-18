import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0rk9q6t",
        "template_3e1dh3e",
        form.current,
        "vNiYSDAgsX29iVPpAo79L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span> Level Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text"> With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email to join"
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
