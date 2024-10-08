import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AddCourse(){
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: null,
        techs: '',
    });

    useEffect(() => {
        try {
            axios.get(baseUrl + '/category/')
                .then((response) => {
                    setCats(response.data);
                });
        } catch (error) {
            console.log(error);
        }
        document.title = "Add Course";
    }, []);

    const handleChange = (event) => {
            setCourseData({
                ...courseData,
                [event.target.name]: event.target.value
            });
    };

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            f_img: event.target.files[0]
        });
    }

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append("category", courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        if (courseData.f_img instanceof File) {
            _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        }
        _formData.append('techs', courseData.techs);

        // Log form data for debugging
        for (let [key, value] of _formData.entries()) {
            console.log(key, value);
        }

        try {
            axios.post(baseUrl + '/course/', _formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((response) => {
                // console.log(response.data);
                window.location.href = '/add-course/'
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
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Category</label>
                                <select name="category" onChange={handleChange} className="form-control">
                                    <option value="">Select Category</option>
                                    {cats.map((category, index) => (
                                        <option key={index} value={category.id}>{category.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" onChange={handleChange} name="title" id="title" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea type="text" onChange={handleChange} name="description" className="form-control" id="description" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="video" className="form-label">Featured Images</label>
                                <input type="file" onChange={handleFileChange} name="f_img" className="form-control" id="video" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="techs" className="form-label">Technologies</label>
                                <textarea onChange={handleChange} name="techs" className="form-control" placeholder="Python, JavaScript, SQL, PHP" id="techs" />
                            </div>
                            <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddCourse;