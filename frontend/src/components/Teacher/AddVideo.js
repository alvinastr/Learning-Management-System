import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AddVideo(){
    const [videoData, setVideoData] = useState({
        title: '',
        description: '',
        video: null,
        remarks: '',
    });

    useEffect(() => {
        document.title = "Add Video";
    }, []);

    const handleChange = (event) => {
            setVideoData({
                ...videoData,
                [event.target.name]: event.target.value
            });
    };

    const handleFileChange = (event) => {
        setVideoData({
            ...videoData,
            f_img: event.target.files[0]
        });
    }

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', 1);
        _formData.append('title', videoData.title);
        _formData.append('description', videoData.description);
        if (videoData.video instanceof File) {
            _formData.append('video', videoData.video, videoData.video.name);
        }
        _formData.append('remarks', videoData.remarks);

        // Log form data for debugging
        for (let [key, value] of _formData.entries()) {
            console.log(key, value);
        }

        try {
            axios.post(baseUrl + '/video/', _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((response) => {
                // console.log(response.data);
                window.location.href = '/add-video/1';
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('Error data:', error.response.data);
                    console.log('Error status:', error.response.status);
                    console.log('Error headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log('Error request:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error message:', error.message);
                }
                console.log('Error config:', error.config);
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add Video</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label For="title" className="form-label">Title</label>
                                <input type="text" onChange={handleChange} name="title" id="title" className="form-control" id="title"/>
                            </div>
                            <div className="mb-3">
                            <label For="description" className="form-label">Description</label>
                                <textarea className="form-control" onChange={handleChange} name="description" id="description"/>
                            </div>
                            <div className="mb-3">
                                <label For="video" className="form-label">Video</label>
                                <input type="file" className="form-control" onChange={handleFileChange} name="video" id="video"/>
                            </div>
                            <div className="mb-3">
                                <label For="techs" className="form-label">Remarks</label>
                                <textarea onChange={handleChange} name="remarks" className="form-control" placeholder="This Video Focused on" id="techs"/>
                            </div>
                            <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddVideo;