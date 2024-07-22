import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddCourse(){
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
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title"/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Description</label>
                                <textarea className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label For="video" className="form-label">Course Video</label>
                                <input type="file" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Technologies</label>
                                <textarea className="form-control"/>
                            </div>
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddCourse;