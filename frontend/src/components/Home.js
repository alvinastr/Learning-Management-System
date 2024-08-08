import {Link} from 'react-router-dom';
import AllCourses from "./AllCourses";
import {useEffect, useState} from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";
function Home() {
    const [courseData, SetCourseData] = useState([]);
    useEffect(() => {
        try{
            axios.get(baseUrl + '/course/?result=4')
                .then((response) => {
                    SetCourseData(response.data);
                });
        }catch(error){
            console.error(error);
        }
        document.title = "Home"
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

  return (
      <div className="container mt-4">
          {/* Latest Course*/}
          <h3 className="pb-1 mb-3">Latest Courses<Link to="/all-courses" className="float-end">See All</Link></h3>
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
                              <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link>
                              </h5>
                          </div>
                      </div>
                  </div>
              )}
          </div>
          {/* End Latest Course*/}
          {/* Popular Course*/}
          <h3 className="pb-1 mb-3 mt-3">Popular Courses<Link to="/popular-courses" className="float-end">See All</Link>
          </h3>
          <div className="row mb-4">
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Course Title</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                              <span className="float-end">Views : 123</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Course Title</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                              <span className="float-end">Views : 123</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Course Title</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                              <span className="float-end">Views : 123</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Course Title</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                              <span className="float-end">Views : 123</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* End Popular Course*/}
          {/* Popular Teachers*/}
          <h3 className="pb-1 mb-3 mt-3">Featured Teachers<Link to="/popular-teachers" className="float-end">See All</Link></h3>
          <div className="row mb-4">
              <div className="col-md-3">
                  <div className="card">
                      <Link to="/teacher-detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                      <div className="card-body">
                          <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                      <div className="card-body">
                          <h5 className="card-title"><a href="#">Teacher Name</a></h5>
                      </div>
                      <div className="card-footer">
                          <div className="title">
                              <span>Rating 4/5</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* End Popular Teachers*/}
          {/* Student Testimonial*/}
          <h3 className="pb-1 mb-3 mt-3">Student Testimonial</h3>
          <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-4" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                          className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                          aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                          aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <figure className="text-center">
                          <blockquote className="blockquote">
                              <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption className="blockquote-footer">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="carousel-item">
                      <figure className="text-center">
                          <blockquote className="blockquote">
                              <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption className="blockquote-footer">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="carousel-item">
                      <figure class="text-center">
                          <blockquote class="blockquote">
                              <p>A well-known quote, contained in a blockquote element.</p>
                          </blockquote>
                          <figcaption class="blockquote-footer">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                          </figcaption>
                      </figure>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          {/* End Popular Teachers*/}
      </div>
  );
}

export default Home;