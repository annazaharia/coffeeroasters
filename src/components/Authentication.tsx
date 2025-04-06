export default function Authentication() {
  return (
    <>
      <ul className="nav nav-pills nav-justified mb-3" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="tab-login"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="tab-register"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginEmail">
                Email
              </label>
              <input type="email" id="loginEmail" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <input type="password" id="loginPassword" className="form-control" />
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                  <label className="form-check-label" htmlFor="loginCheck">
                    Remember me
                  </label>
                </div>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" htmlFor="registerUsername">
                Username
              </label>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" className="form-control" />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div className="form-check d-flex mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
