import { useState } from "react";
import '../css/Registration.css';
import { Link, Navigate, useNavigate } from "react-router-dom";

function Registration() {
  const [form, setForm] = useState({
    fname: "",
    email: "",
    phonenumber: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/studentkedi/infoh",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
    if (response.ok) {
      alert("Registration Successful!");
      return;
    }
    // alert("Registration Successful!");
    setMessage("Registration Failed!");
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handlesubmit} id="form-container" >

        <div id="container">
          {/* <Link to="/" className="bi bi-arrow-left" id="link"></Link> */}
          <i
            className="bi bi-arrow-left"
            id="link"
            role="button"
            onClick={() => navigate("/")}
          />
          <h2>Sign Up</h2>
          <p>let's create your account</p>
          <div className="tags-container">
            <label>Full Name</label>
            <div className="name">
              <input
                type="text"
                name="fname"
                value={form.fname}
                placeholder="First Name"
                onChange={handleForm}
                required
              />
            </div>
            <div className="tag-con2">
              <div>
                <label>Phone number</label>
                <input
                  type="text"
                  name="phonenumber"
                  value={form.phonenumber}
                  placeholder="### ### ####"
                  onChange={handleForm}
                  required
                /></div>

            </div>
            <label>Email</label>
            <div>
              <input
                type="text"
                name="email"
                value={form.email}
                placeholder="Enter Your Email"
                onChange={handleForm}
                required
              />
            </div>
            <div id="password">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter Password"
                onChange={handleForm}
              />
            </div>
          </div>
        </div>
        <div class="terms">
          <input type="checkbox" id="agree" />
          <label for="agree">I agree to terms & conditions</label>
        </div>
        <div class="alredy">
          <label>Already have an account?</label>
          <Link to="/Signin"> Sign in</Link>
        </div>
        {/* Already have an account? [Sign in] */}
        <div className="btn-container">
          <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
            <button type="submit" id="btn">Sign Up</button>
            {/* <Link to="/" className="bi bi-arrow-left" id="link"></Link> */}
          </div>
        </div>
        {message && <h3>{message}</h3>}
      </form>
    </>
  );
}
export default Registration;