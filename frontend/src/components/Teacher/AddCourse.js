import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {useEffect,useState} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";
function AddCourse(){
    const [cats,setCats]=useState([]);

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

    // console.log(cats);
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
                                <select name="category" className="form-control">
                                    {cats.map((category, index)=>{return <option key={index}>{category.title}</option>})}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" id="title" className="form-control" id="title"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="video" className="form-label">Featured Images</label>
                                <input type="file" className="form-control" id="video"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="techs" className="form-label">Technologies</label>
                                <textarea className="form-control" placeholder="Python, JavaScript, SQL, PHP"
                                          id="techs"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddCourse;