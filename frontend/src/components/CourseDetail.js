import {Link, useParams} from 'react-router-dom';

function CourseDetail(){
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="..."/>
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p className="fw-bold">Course By : <a href="#">Teacher 1</a></p>
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
            <h3 className="pb-1 mb-3 mt-5">Related Courses</h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                              <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card">
                          <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                          <div className="card-body">
                              <h5 className="card-title"><a href="#">Course Title</a></h5>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    )
}

export default CourseDetail;