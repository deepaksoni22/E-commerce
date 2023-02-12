import React from "react";
import "./Contect.css";

function Contect() {
  return (
    <div className="contectPage">
      <div className="contect-heading">
        <h1>Get in touch</h1>
        <h3>let's have talk</h3>
      </div>
      <form id="contect-form" className="contectUs-form">
        <div class="input-icons">
          <i class="fa fa-user icon"></i>
          <input class="input-field" type="text" placeholder="Username" />
        </div>

        <div class="input-icons">
          <i class="fa fa-envelope icon"></i>
          <input class="input-field" type="text" placeholder="Email" />
        </div>

        <div class="input-icons">
          <i class="fa fa-key icon"></i>
          <input class="input-field" type="password" placeholder="Password" />
        </div>
      </form>
      <textarea className="form-textArea" placeholder="Text Here"></textarea>
    </div>
  );
}

export default Contect;
