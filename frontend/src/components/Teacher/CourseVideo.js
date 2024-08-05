import Swal from "sweetalert2";
import {Link} from 'react-router-dom';
import TeacherSidebar from "./TeacherSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";

function CourseVideo(){
    const [videoData, setVideoData] = useState([]);
    const [totalresult, setTotalResult] = useState(0);
    const {course_id} = useParams();

    useEffect(() => {
        try{
            axios.get(baseUrl + '/course-video/' + course_id)
            .then ((response) => {
                setTotalResult(response.data.length);
                setVideoData(response.data);
            });
        }catch(error){
            console.error(error);
        }
    },[course_id]);

    // Delete button click
    const handleDeleteClick = (video_id) => {
        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this video?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then ((result) => {
            if (result.isConfirmed) {
                try{
                    axios.delete(baseUrl + '/video/' + video_id)
                    .then ((response)=>{
                        Swal.fire('success', 'Data has been deleted',);
                        try{
                            axios.get(baseUrl + '/course-video/' + course_id)
                            .then ((response) => {
                                setTotalResult(response.data.length);
                                setVideoData(response.data);
                            });
                        }catch(error){
                            console.error(error);
                        }
                        // console.log(response);
                        // setTotalResult(response.data.lenght);
                        // setVideoData(response.data);
                    });
                }catch (error) {
                    Swal.fire('error', 'Data has not been deleted',);
                }
            }else{
                Swal.fire('error', 'Data has not been deleted',);
            }
        });
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">All Videos ({totalresult}) <Link className="btn btn-success btn-sm float-end" to={"/add-video/" + course_id}>Add Video</Link></h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Video</th>
                                    <th>Remarks</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {videoData.map((video, index) =>
                                    <tr key={index}>
                                        <td><Link to={'/edit-video/' + video.id}>{video.title}</Link></td>
                                        <td>

                                            {video.video ? (
                                                <div className="d-flex justify-content-center">
                                                    <video controls width="250" className="justify-content-center">
                                                        <source src={video.video} type="video/webm"/>
                                                        <source src={video.video} type="video/mp4"/>
                                                        Sorry, your browser doesn't support embedded videos.
                                                    </video>
                                                </div>
                                            ) : (
                                                <p>No video available</p>
                                            )}
                                        </td>
                                        <td>{video.remarks}</td>
                                        <td>
                                            <Link to={'/edit-video/' + video.id} className="btn btn-info"><i
                                                className="bi bi-pencil-square"></i></Link>
                                            <button onClick={() => handleDeleteClick(video.id)} className="btn btn-danger ms-2"><i className="bi bi-trash"></i></button>
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

export default CourseVideo;