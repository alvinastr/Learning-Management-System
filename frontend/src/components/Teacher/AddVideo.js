import {Link} from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import {useEffect} from "react";

function AddVideo(){
    useEffect(() => {
        document.title = "Add Course"
    });
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
                                <input type="text" id="title" className="form-control" id="title"/>
                            </div>
                            <div className="mb-3">
                            <label For="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description"/>
                            </div>
                            <div className="mb-3">
                                <label For="video" className="form-label">Video</label>
                                <input type="file" className="form-control" id="video"/>
                            </div>
                            <div className="mb-3">
                                <label For="techs" className="form-label">Remarks</label>
                                <textarea className="form-control" placeholder="This Video Focused on" id="techs"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddVideo;