import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/Signin.css';

function Signin() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const Navigate = useNavigate();

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setMessage("Please Enter Details");
            return;
        }
        try {
            const response = await fetch("",
                {
                    method: "post",
                    headers: { "Content-Type": "applicaton/json" },
                    body: JSON.stringify({
                        email: form.email,
                        password: form.password
                    })
                }
            );
            if (response.ok) {
                const data = response.json()
                console.log("signin success", data);
                setMessage("Signin Successful!");
                setTimeout(() => {
                    Navigate("/")
                }, 1500);
            }
            else if (response.status === 401) {
                setMessage("Invalid Email or Password");
            } else {
                setMessage("Signin Failed");
            }
        } catch (err) {
            console.log("fetch error", err);
            setMessage("Sever error");
        }
    };

    return (
        <form onSubmit={handlesubmit}>
            <div className="signin">
                <div className="signin-container">
                     <i
            className="bi bi-arrow-left"
            id="link"
            role="button"
            onClick={() => Navigate("/")}
          />
                    <h2>Sign In</h2>
                    <p>Sign In to continue shopping</p>
                    <div id="name" className="element">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            placeholder="Enter Email"
                            onChange={handleForm}
                        />
                    </div>
                    <div id="name" className="element">
                        <label>Password</label>
                        <input
                            type="text"
                            name="password"
                            value={form.password}
                            placeholder="Enter Password"
                            onChange={handleForm}
                        />
                    </div>
                    <div id="button" className="element" >
                        <button id="btn1" type="submit">Sign In</button>
                    </div>
                    <div id="account" className="element" >
                        <label>Don't have an account?</label>
                        <Link to="/Registration"> Sign Up </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Signin;