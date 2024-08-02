import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/teacher/";

function TeacherLogin() {
    const [teacherLoginData, setteacherLoginData] = useState({
        'email': '',
        'password': '',
    });

    const handleChange = (event) => {
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault(); // Prevent default form submission
        const teacherFormData = new FormData();
        teacherFormData.append("email", teacherLoginData.email);
        teacherFormData.append("password", teacherLoginData.password);

        try {
            axios.post(baseUrl + "login/", teacherFormData)
                .then((response) => {
                    if (response.data.bool === true) {
                        localStorage.setItem("teacherLoginStatus", true);
                        localStorage.setItem("teacherId", response.data.teacher_id);
                        window.location.href = '/teacher-dashboard';
                    } else {
                        console.log("Login failed");
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
    if (teacherLoginStatus === 'true') {
        window.location.href = '/teacher-dashboard';
    }

    useEffect(() => {
        document.title = "Teacher Login";
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">Teacher Login</h3>
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Username</label>
                                    <input type="email" value={teacherLoginData.email} name="email" onChange={handleChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={teacherLoginData.password} name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLogin;