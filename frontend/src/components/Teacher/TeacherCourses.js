import {Link} from 'react-router-dom';
import TeacherSidebar from "./TeacherSidebar";
import {useEffect} from "react";

function TeacherCourses(){
    useEffect(() => {
        document.title = "My Courses"
    });
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Create By</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Python Development</td>
                                    <td><Link to="/">Alvin</Link></td>
                                    <td>
                                        <button className="btn btn-danger btm-sm text-center"
                                                style={{width: '100%', display: 'flex', justifyContent: 'center'}}>Delete
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

 export default TeacherCourses;