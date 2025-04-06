export default function Login() {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="loginEmail">
            Email
          </label>
          <input type="email" id="loginEmail" className="form-control" name="email" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input type="password" id="loginPassword" className="form-control" name="password" />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex">
            <div className="form-check mb-3 mb-md-0">
              <input className="form-check-input" type="checkbox" value="" id="loginCheck" name="rememberMe" />
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
  );
}
