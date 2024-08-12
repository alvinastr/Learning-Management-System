import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";

function AllCourses(){
    const [courseData, SetCourseData] = useState([]);
    useEffect(() => {
        try{
            axios.get(baseUrl + '/course/?category='+category_slug)
                .then((response) => {
                    SetCourseData(response.data);
                });
        }catch(error){
            console.error(error);
        }
        document.title = "All Courses"
    }, []);

    const imageContainerStyle = {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover'
    };

    return(
        <div className="container mt-4">
            {/* Latest Course*/}
            <h3 className="pb-1 mb-3">Latest Courses</h3>
            <div className="row mb-4">
                {courseData && courseData.map((course, index) =>
                <div className="col-md-3 mb-4" key={index}>
                    <div className="card">
                        <Link to={`/detail/${course.id}`}>
                            <div style={imageContainerStyle}>
                                <img src={course.featured_img} className="card-img-top" alt={course.title} style={imageStyle}/>
                            </div>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
                        </div>
                    </div>
                </div>
                )}
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

export default AllCourses;