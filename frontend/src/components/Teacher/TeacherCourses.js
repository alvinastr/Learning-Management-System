import {Link} from 'react-router-dom';
import TeacherSidebar from "./TeacherSidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function TeacherCourses(){
    const [courseData, setCourseData] = useState([]);
    const [error, setError] = useState(null);
    const teacherId = localStorage.getItem("teacherId");
    console.log(teacherId);

    useEffect(() => {
        axios.get(baseUrl + '/teacher-course/' + teacherId)
            .then((response) => {
                setCourseData(response.data);
            })
            .catch((error) => {
                console.error(error);
                setError("Network Error: Unable to fetch data");
            });

        document.title = "My Courses";
    }, [teacherId]);

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
                            {error && <div className="alert alert-danger">{error}</div>}
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Total Enrolled</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) =>
                                    <tr key={index}>
                                        <td><Link to={"/all-videos/"+course.id}>{course.title}</Link></td>
                                        <td><img src={course.featured_img} width="80" className="rounded" alt={course.title} /></td>
                                        <td><Link to="/">1222</Link></td>
                                        <td>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                            <Link className="btn btn-success btn-sm ms-2" to={"/add-video/"+course.id}>Add Videos</Link>
                                        </td>
                                    </tr>
                                    )}
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