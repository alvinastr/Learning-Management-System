import {Link} from 'react-router-dom';
import TeacherSidebar from "./TeacherSidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";
function EditVideo() {
    const [videoData, setVideoData] = useState({
        course: '',
        title: '',
        description: '',
        prev_video: '',
        video: null,
        remarks: '',
    });

    const handleChange = (event) => {
        setVideoData({
            ...videoData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const newFile = new File([file], `${videoData.title}${file.name.substring(file.name.lastIndexOf('.'))}`, {type: file.type});
        setVideoData({
            ...videoData,
            video: newFile
        });
    }

    const {video_id} = useParams();
    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', videoData.course);
        _formData.append('title', videoData.title);
        _formData.append('description', videoData.description);
        if (videoData.video && videoData.video instanceof File) {
            _formData.append('video', videoData.video, videoData.video.name);
        }
        _formData.append('remarks', videoData.remarks);

        // Log form data for debugging
        for (let [key, value] of _formData.entries()) {
            console.log(key, value);
        }

        try {
            axios.put(`${baseUrl}/video/${video_id}/`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    if (response.status === 200){
                        Swal.fire({
                            title : 'Data has been updated',
                            icon : 'success',
                            toast : true,
                            timer : 3000,
                            position : 'top-right',
                            timerProgressBar : true,
                            showConfirmButton : false,
                        })
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        try {
            axios.get(baseUrl + '/video/' + video_id)
            .then((response) => {
                setVideoData({
                    course: response.data.course,
                    title: response.data.title,
                    description: response.data.description,
                    prev_video: response.data.video,
                    video: '',
                    remarks: response.data.remarks
                });
            });
        } catch (error) {
            console.error(error);
        }
    }, [video_id]);

  return (
      <div className="container mt-4">
        <div className="row">
          <aside className="col-md-3">
            <TeacherSidebar/>
          </aside>
          <section className="col-md-9">
            <div className="card">
              <h5 className="card-header">Update Video</h5>
              <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={videoData.title} onChange={handleChange} name="title" className="form-control" id="title"/>
                </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <textarea className="form-control" value={videoData.description} onChange={handleChange} name="description" id="description"/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="video" className="form-label">Video</label>
                      <input type="file" className="form-control" onChange={handleFileChange} name="video" id="video"/>
                      <video controls width="100%" className="mt-2">
                          {videoData.prev_video && (
                              <>
                                  {videoData.prev_video instanceof File ? (
                                      <>
                                          <source src={URL.createObjectURL(videoData.prev_video)} type="video/webm"/>
                                          <source src={URL.createObjectURL(videoData.prev_video)} type="video/mp4"/>
                                      </>
                                  ) : (
                                      <>
                                          <source src={videoData.prev_video} type="video/webm"/>
                                          <source src={videoData.prev_video} type="video/mp4"/>
                                      </>
                                  )}
                              </>
                          )}
                          Your browser does not support the video tag.
                      </video>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="techs" className="form-label">Remarks</label>
                      <textarea onChange={handleChange} value={videoData.remarks} name="remarks"
                                className="form-control" placeholder="This Video Focused on" id="techs"/>
                  </div>
                  <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default EditVideo;