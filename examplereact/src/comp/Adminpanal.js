import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from "react-router-dom";
import '../css/Adminpanal.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ad1 from '../Image/ad-1.jpg';
import ad2 from '../Image/ad-2.jpg';

function Adminpanal() {

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/studentkedi/getDetails");

  }
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* TOP NAVBAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "linear-gradient(90deg, #5b2dc5, #4b1bbd)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          zIndex: 1000
        }}
      >
        <div> <button
          // style={{
          //  right:"15rem"
          //   }}
          style={{
            right: "15rem",
            marginTop: "4px",
            marginLeft: open ? "250px" : "0",
            padding: "20px",
            transition: "margin-left 0.3s ease"
          }}
          className="menu-btn btn btn-outline-light "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button> </div>

        <div className="ms-auto mt-2 " 
        style={{display:"flex",
          justifyContent:"center",
          gap:"30px"
        }}> 
          <i className="bi bi-calendar4 fs-3"></i>
          <i className="bi bi-calculator fs-3 text-light"></i>
          <button className="btn btn-success" onClick={()=>navigate("/login-admin")}>Signin</button>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className="sidebar-con bg-dark text-white"
        style={{
          position: "fixed",
          top: "0",
          left: open ? "0" : "-250px",
          width: "250px",
          height: "100vh",
          transition: "left 0.3s ease",
          zIndex: 1000,
          overflowY: "auto"
        }}
      >
        <div className="sidebar-header"
          style={{
            display: "flex",
            justifyContent: "space-between"
            // right:"77rem"
          }}
        >
          <h5>Admin Panel</h5>

        </div>
        <ul className="nav flex-column px-2 py-4">
          <li className="nav-item">
            <a className="nav-link text-white active" href="/Adminpanal/Details">
              Costomer Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Adaddproduct">
              Addproduct
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Fees Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" >
              Result Details
            </a>
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          marginTop: "56px",
          marginLeft: open ? "250px" : "0",
          padding: "20px",
          transition: "margin-left 0.3s ease"
        }}
      >
        <Outlet />  
        <h2>Dashboard</h2>
      <div className="slide-right-to-left container mt-4">
  <div className="row">
    <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={ad1} className="card-img-top" alt="card" />
        <div className="card-body text-center">
          <h5 className="card-title">Student Details</h5>
          <button className="btn btn-primary"  onClick={() => navigate("/Adminpanal/Details")}>
            Click
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={ad2} className="card-img-top" alt="card" />
        <div className="card-body text-center">
          <h5 className="card-title">Course Details</h5>
          <a href="#" className="btn btn-primary">
            Click
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={ad1} className="card-img-top" alt="card" />
        <div className="card-body text-center">
          <h5 className="card-title">Fees Details</h5>
          <a href="#" className="btn btn-primary">
            Click
          </a>
        </div>
      </div>
    </div>

    <div className="col-md-3 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={ad2} className="card-img-top" alt="card" />
        <div className="card-body text-center">
          <h5 className="card-title">Result Details</h5>
          <a href="#" className="btn btn-primary">
            Click
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

    </>
  );
}
export default Adminpanal;