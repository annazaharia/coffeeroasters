export default function Register() {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="registerFirstName">
                First Name
              </label>
              <input type="text" id="registerFirstName" className="form-control" name="firstName" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="registerLastName">
                Last Name
              </label>
              <input type="text" id="registerLastName" className="form-control" name="lastName" />
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input type="email" id="registerEmail" className="form-control" name="email" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input type="password" id="registerPassword" className="form-control" name="password" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerAddress">
            Address
          </label>
          <textarea id="registerAddress" className="form-control" rows={3} name="address" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerCity">
            City
          </label>
          <select id="registerCity" className="form-select" aria-label="Default select example" name="city">
            <option value="Bucharest">Bucharest</option>
            <option value="Iasi">Iasi</option>
            <option value="Cluj-Napoca">Cluj-Napoca</option>
            <option value="Timisoara">Timisoara</option>
            <option value="Constanta">Constanta</option>
            <option value="Brasov">Brasov</option>
            <option value="Oradea">Oradea</option>
          </select>
        </div>

        <div className="form-check d-flex mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
            name="terms"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
