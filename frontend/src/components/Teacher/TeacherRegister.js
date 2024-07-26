// import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
// import axios from 'axios';
function TeacherRegister(){
    const [teacherData, setteacherData]=useState(null);
    setteacherData({
        'full_name': '',
        'email': '',
        'password': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'status': '',
    });
    // Change Element Value
    const handleChange=(event)=>{
        setteacherData({
           ...teacherData,
           [event.target.name]: event.target.value
        });
    }
    console.log();
    useEffect(() => {
        document.title = "Teacher Register"
    });
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">Teacher Register</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Full Name</label>
                                    <input onChange={handleChange} name="full_name" type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                    <input onChange={handleChange} name="email" type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Qualification</label>
                                    <input onChange={handleChange} type="text" name="qualification" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Mobile NO</label>
                                    <input onChange={handleChange} name="mobile_no" type="number" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Skills</label>
                                    <textarea onChange={handleChange} name="skills" className="form-control"/>
                                    <div id="emailHelp" className="form-text">Python, PHP, Java, JavaScript, etc</div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherRegister;