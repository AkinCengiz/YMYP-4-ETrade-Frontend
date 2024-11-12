import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header bg-success">
              <h3 className="text-light text-center">Register Page</h3>
            </div>
            <div className="card-body pb-1">
              <form>
                <div class="form-group mb-3 row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Username
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div class="form-group mb-3 row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="usermail"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div class="form-group mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div class="form-group mb-3 row p-2">
                  <button className="btn btn-success w-100 ">Sign Up</button>
                  <Link className="mt-2 btn btn-secondary" to="/login">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
