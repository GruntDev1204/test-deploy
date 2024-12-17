import { useState } from "react"
import { Link } from "react-router-dom"

export default function SignUp() {
  const [continute, setContinute] = useState<boolean>(false)

  const getContinute = () => {
    setContinute(!continute)
  }

  return (
    <div className="alert alert-form form-login mt-5">
      <div className="row mt-4 mb-2">
        <div className="col medium">
          <h3 className="text-center mb-3 title">
            <i className="fa-solid fa-user-plus"></i> Register
          </h3>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col">
          <div className="form-group">
            <label className="mb-2">
              {" "}
              <i className="fa-solid fa-envelope"></i> Email address
            </label>
            <input type="email" className="form-control mb-4" />
          </div>

          <div className="form-group mt-5">
            <label className="mb-2">
              <i className="fa-solid fa-phone"></i> Phone Number
            </label>
            <input type="text" className="form-control mb-4" />
          </div>

          <div className="form-group mt-5">
            <label className="mb-2">
              <i className="fa-solid fa-circle-user"></i> Full Name
            </label>
            <input type="text" className="form-control mb-4" />
          </div>

          <small className="form-text text-muted mt-5 text-center flex-center">
            We will use the information below to create an account for you! {" "}
            <i className="fa-solid fa-circle-chevron-right medium" title="continute"  onClick={getContinute}></i>
          </small>

          {continute ? (
            <>
              <div className="form-group mt-2 " >
                <label className="mb-2">
                  <i className="fa-solid fa-user"></i> User Name
                </label>
                <input type="text" className="form-control mb-4" />
              </div>

              <div className="form-group mt-5 ">
                <label className="mb-2">
                  {" "}
                  <i className="fa-solid fa-lock"></i> Password{" "}
                </label>
                <input type="password" className="form-control mb-2" />
              </div>

              <div className="form-group mt-5 ">
                <label className="mb-2">
                  <i className="fa-solid fa-lock"></i> ReType Password{" "}
                </label>
                <input type="password" className="form-control mb-2" />
              </div>
            </>
          ) : (
            ""
          )}

          <button type="submit" className="button mt-5 small">
            Submit
          </button>
          <button type="submit" className="button mt-5 small ml-3">
             <Link to="/login">
                  Login?
              </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
