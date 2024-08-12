import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
const siteUrl = "http://127.0.0.1:8000/";
const baseUrl = "http://127.0.0.1:8000/api";

function CourseDetail() {
    const [courseData, setCourseData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [relatedCourseData, setRelatedCourseData] = useState([]);
    const [techListData, setTechListData] = useState([]);
    const [error, setError] = useState(null);
    let { course_id } = useParams();

    useEffect(() => {
        axios.get(baseUrl + '/course/' + course_id)
            .then((response) => {
                setCourseData(response.data);
                setVideoData(response.data.course_videos);
                setTeacherData(response.data.teacher);
                setRelatedCourseData(JSON.parse(response.data.related_videos));
                setTechListData(response.data.tech_list);
                setError(null); // Clear any previous errors
            })
            .catch((error) => {
                console.error(error);
                setError('Failed to fetch course details. Please try again later.');
            });
    }, [course_id]);

    return (
        <div className="container mt-3">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                <div className="col-4">
                    <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title} />
                </div>
                <div className="col-8">
                    <h3>{courseData.title}</h3>
                    <p>{courseData.description}</p>
                    <p className="fw-bold">Course By : <Link to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                    <p className="fw-bold">Techs :
                        {techListData.map((tech, index) =>
                            <Link key={index} to={`/category/${tech.trim()}`} className="badge bg-warning m-lg-1">{tech}</Link>
                        )}
                    </p>
                    <p className="fw-bold">Duration : 2 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled : 256 Students</p>
                    <p className="fw-bold">Rating : 4/5</p>
                </div>
            </div>
            {/* Course Video*/}
            <div className="card mt-4">
                <h5 className="card-header">
                    Course Video
                </h5>
                <ul className="list-group list-group-flush">
                    {videoData && videoData.map((video, index) =>
                        <li key={video.id} className="list-group-item">{video.title}
                            <span className="float-end">
                                <span className="me-3">1:30 Minutes</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target={`#videoModal${index}`}><i className="bi-youtube"></i></button>
                            </span>
                            <div className="modal fade" id={`videoModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Video {index + 1}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe src={video.video} title={video.title} allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <h3 className="pb-1 mb-3 mt-5">Related Courses</h3>
            {relatedCourseData.map((rcourse, index) => (
                <div className="row mb-4" key={index}>
                    <div className="col-md-3">
                        <div className="card">
                            <Link target="_blank" to={`/detail/${rcourse.pk}`}><img src={`(siteUrl)media/${rcourse.fields.featured_img}`} className="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseDetail;