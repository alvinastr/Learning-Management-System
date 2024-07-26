// import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
const baseUrl ='http://127.0.0.1:8000/api/teacher/'
function TeacherRegister(){
    const [teacherData, setteacherData]=useState({
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
    const submitForm = ()=>{
        const teacherFormData=new FormData();
        teacherFormData.append("full_name",teacherData.full_name)
        teacherFormData.append("email",teacherData.email)
        teacherFormData.append("password",teacherData.password)
        teacherFormData.append("qualification",teacherData.qualification)
        teacherFormData.append("mobile_no",teacherData.mobile_no)
        teacherFormData.append("skills",teacherData.skills)

        try{
            axios.post(baseUrl,teacherFormData).then(response =>{
                setteacherData({
                    'full_name': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': 'success',
                });
            });
        }catch(error){
            console.log(error);
            setteacherData({'status': error})
        }


    };
    useEffect(() => {
        document.title = "Teacher Register"
    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status=='success' && <p className="text-success">Succesfully registration</p>}
                    {teacherData.status=='error' && <p className="text-success">Failed registration</p>}
                    <div className="card">
                        <h3 className="card-header">Teacher Register</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Full Name</label>
                                    <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                    <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Qualification</label>
                                    <input value={teacherData.qualification} onChange={handleChange} type="text" name="qualification" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Mobile NO</label>
                                    <input value={teacherData.mobile_no} onChange={handleChange} name="mobile_no" type="number" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} onChange={handleChange} name="skills" className="form-control"/>
                                    <div id="emailHelp" className="form-text">Python, PHP, Java, JavaScript, etc</div>
                                </div>
                                <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherRegister;