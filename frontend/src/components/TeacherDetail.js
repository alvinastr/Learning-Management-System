import {Link} from "react-router-dom";

function TeacherDetail(){
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                    <h3>Gabriela </h3>
                    <p>Skills</p>
                    <p className="fw-bold">Course By : <Link to="/teacher-detail/1">Teacher 1</Link></p>
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
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-3">1:30 Minutes</span>
                            <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeacherDetail;