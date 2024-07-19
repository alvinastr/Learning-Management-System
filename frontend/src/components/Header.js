import {Link} from 'react-router-dom';
function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="/">Learn Courses</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ms-auto">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      <a className="nav-link" href="#">Courses</a>
                      <a className="nav-link" href="#">Teachers</a>
                      <Link className="nav-link" to="/user-login">Login</Link>
                      <Link className="nav-link" to="/user-register">Register</Link>
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default Header;
