import {Link} from "react-router-dom";
import {useEffect} from "react";
function TeacherDetail(){
    useEffect(() => {
        document.title = "Teacher Detail"
    });
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                    <h3>Gabriela </h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p className="fw-bold">Skills : <Link to="/category/python">Python</Link>, <Link to="/teacher-detail/1">JavaScript</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="/teacher-detail/1">Django Course</Link></p>
                    <p className="fw-bold">Rating : 4/5</p>
                </div>
            </div>
            {/* Course Video*/}
            <div className="card mt-4">
                <h5 className="card-header">
                    Course List
                </h5>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 3</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 4</Link>
                </div>
            </div>
        </div>
    )
}

export default TeacherDetail;