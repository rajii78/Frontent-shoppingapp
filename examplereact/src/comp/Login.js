import { useState } from "react";
import '../css/Login.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();   // ✅ correct

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setMessage("Please enter details");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/studentkedi/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: form.username,
            password: form.password
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);
        setMessage("Login successful!");
        setTimeout(() => {
          Navigate("/Adminpanal");
        }, 1500);

      }
      else if (response.status === 401) {
        setMessage("Invalid username or password");
      }
      else {
        setMessage("Login failed");
      }

    } catch (err) {
      console.error("Fetch error:", err);
      setMessage("Server error");
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit} className="form-container">
        {message && (
          <div
            className="alert alert-success"
            role="alert"
            style={{
              width: "300px",
              textAlign: "center",
              fontSize: "18px",
              position: "fixed",
              top: "20px",
              zIndex: 9999,

            }}
          >
            {message}
          </div>
        )}
        <div className="login-container">

          <h2>Login</h2>
          <div id="name">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              value={form.username}
              placeholder="Enter Username"
              onChange={handleForm}
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
          <div id="forget"><Link to="/forget-password">Forget Password?</Link>
            <label><input type="checkbox" id="checkbox" />Remember me</label>
          </div>
          <div className="btn-container ">
            <div >
              <button id="btn1" type="submit">Login</button>
              {/* <button id="btn1" onClick={()=>Navigate("/Adminpanal")} >Bcak</button> */}
            </div>
            <Link to="/Registration">Don't have a account Register</Link>
          </div>
        </div>
        {/* <button id="btn1" onClick={()=>Navigate("/Adminpanal")} >Bcak</button> */}

      </form>
    </>
  );
}

export default Login;
