import React from "react";

function RegistrationForm() {
  return (
    <div className="registrationForm">
      <form className="form">
        <h3>Registration Form</h3>
        <br />
        <input type="text" placeholder="Enter firstname" required />
        &nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Enter Lastname" required />
        <br />
        <br />
        <input type="email" placeholder="Enter Email Id" required />
        &nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Enter Username" required />
        <br />
        <br />
        <input type="number" placeholder="Enter Age" required />
        <br />
        <br />
        <button type="submit">Register</button>
        <br />
      </form>
    </div>
  );
}
export default RegistrationForm;
