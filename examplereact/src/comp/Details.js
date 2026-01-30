import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../css/Details.css';
import '../css/Details.css';

function Details() {
  const navigate = useNavigate();
  const [message, setMessage]= useState("");
  const[confirmId,setConfirmId]=useState(null);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/studentkedi/getDetails")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
   
    await fetch(`http://localhost:8080/api/studentkedi/deletestudent/${id}`, {
      method: "DELETE",
    });
     
    setStudents ((prev)=>prev.filter((stu)=>stu.id !==id));
    setConfirmId(null);
     setMessage("Deleted Successfully!");
    setTimeout(()=>setMessage(""),1500)
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    
    
    <div className="container mt-4">
     {confirmId && (
  <div
    className="alert alert-dark text-center"
    role="alert"
    style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "350px",
      zIndex: 9999,
    }}
  >
    <p className="mb-3 ">Are you sure you want to delete?</p>
     <i className="bi bi-trash fs-1"></i>
    <button
      className="btn btn-danger me-2"
      onClick={() => handleDelete(confirmId)}
    >
      Yes
    </button>

    <button
      className="btn btn-secondary"
      onClick={() => setConfirmId(null)}
    >
      No
    </button>
  </div>
)}

      <h2>Student Details</h2>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Action</th>
            <th>ID</th>
            <th>FirstName</th>
            <th>lastname</th>
            <th>phonenumber</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Course</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu) => (
            <tr key={stu.id}>
              <td>{<div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Action
                </button>
                <ul className="dropdown-menu custom-dropdown">
                  <li><button className="dropdown-item" onClick={() => navigate(`/UpdateDeletedetails/${stu.id}`)}>Edit</button></li>
                  <li><button className="dropdown-item" role="alert" onClick={() => setConfirmId(stu.id)}>Delete</button></li>
                  
                  <li><a className="dropdown-item" href="#"></a></li> 
                </ul>
              </div>}</td>
              <td>{stu.id}</td>
              <td>{stu.fname}</td>
              <td>{stu.lname}</td>
              <td>{stu.phonenumber}</td>
              <td>{stu.dob}</td>
              <td>{stu.email}</td>
              <td>{stu.course}</td>
              <td>{stu.gender}</td>
              <td>{stu.city}</td>
              <td>{stu.state}</td>
              <td>{stu.address}</td>

            </tr>

          ))}
        </tbody>
      </table>
      <button id="btn1" onClick={() => navigate("/Adminpanal")} >Bcak</button>

    </div>

  );
}

export default Details;

