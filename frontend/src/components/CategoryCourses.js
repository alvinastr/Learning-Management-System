import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function CategoryCourses(){
    const [courseData, SetCourseData] = useState([]);
    const { category_slug } = useParams();
    useEffect(() => {
        try{
            axios.get(baseUrl + '/course/')
                .then((response) => {
                    SetCourseData(response.data);
                });
        }catch(error){
            console.error(error);
        }
        document.title = "Web Development Courses"
    });
    return(
        <div className="container mt-4">
            {/* Latest Course*/}
            <h3 className="pb-1 mb-3">{category_slug}</h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/Python.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/Python.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#"><img src="/Python.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1"><img src="/Python.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Latest Course*/}
            {/* pagination*/}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* pagination*/}
        </div>
    );
}

export default CategoryCourses;