import {Link} from 'react-router-dom';

function TeacherRegister(){
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h3 className="card-header">Teacher Register</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Full Name</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Username</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Skills</label>
                                    <textarea className="form-control"/>
                                    <div id="emailHelp" className="form-text">Python, PHP, Java, JavaScript, etc</div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="disabledFieldsetCheck">Remember Me</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TeacherRegister;