import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateDeletedetails() {

    const{id}=useParams();
  const [message, setMessage] = useState("");

    // const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        address: "",
        gender: "",
        dob: "",
        city: "",
        state: "",
        course: ""
    });

    //   const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/api/studentkedi/getStudent/${id}`)
            .then(res => res.json())
            .then(data => setForm(data))
            .catch(err => console.log(err));
    }, [id]);


    const handleForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value });

    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try{
             await fetch(`http://localhost:8080/api/studentkedi/update/${id}`,
                {
            
                method: "Put",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(form),
            });
            // alert("Updated Successfully!");
           setMessage("Updated Successfully!");
           setTimeout(()=>{ navigate("/Adminpanal/Details");}
            ,1500);
        } catch(err){
            console.error(err);
            setMessage("Update Failed!");
        }
    };
    return (
        <div>
        <form onSubmit={handlesubmit} id="form-container" >
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
              left:"38rem",
              zIndex: 9999,
             
            }}
          >
            {message}
          </div>
        )}
            <div id="container">
                 <h2>Update Student</h2>
                {/* <h2>Registration Form</h2> */}
                <div className="tags-container">
                    <label>Student name</label>
                    <div className="name">
                        <input
                            type="text"
                            name="fname"
                            value={form.fname}
                            placeholder="First Name"
                            onChange={handleForm}
                            required
                        />
                        <input
                            type="text"
                            name="lname"
                            value={form.lname}
                            placeholder="Last Name"
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
                        <div>
                            <label>Date Of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={form.dob}
                                placeholder="YYYY-MM-DD"
                                onChange={handleForm}
                                pattern="\d{1,2}/\d{1,2}/\d{4}"
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
                    <label>Course</label>
                    <div id="select">
                        <select
                            name="course"
                            value={form.course}
                            onChange={handleForm}
                            required
                        >
                            <option value="">Select Course</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="FullStack">FullStack</option>
                        </select>
                    </div>
                    <div className="gender">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={form.gender === "Female"}
                                onChange={handleForm}
                            />Female</label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={form.gender === "Male"}
                                onChange={handleForm}
                            /> Male</label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={form.gender === "Other"}
                                onChange={handleForm}
                            />Other</label>
                    </div>
                    <div className="tag-con2">
                        <div id="city">
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                placeholder="Enter Your City"
                                onChange={handleForm}
                            /></div>
                        <div id="state">
                            <label>State</label>
                            <input
                                type="text"
                                name="state"
                                value={form.state}
                                placeholder="Enter Your State"
                                onChange={handleForm}
                            /></div>
                    </div>

                    <label>Address</label>
                    <div>
                        <textarea
                            name="address"
                            value={form.address}
                            placeholder="Address"
                            onChange={handleForm}
                            required
                        />
                    </div>
                </div>

<div style={{display:"flex", justifyContent:"center" , gap:"50px"}}>
                <button className="btn btn-success" type="submit" id="btn-src ">
                    Update
                </button>
                <button className="btn btn-success" type="button" id="btn-src " onClick={() => navigate("/Adminpanal/Details")}>
                    Cancel
                </button>
                </div>
            </div>
          </form>
        </div>
    );
}
export default UpdateDeletedetails;
