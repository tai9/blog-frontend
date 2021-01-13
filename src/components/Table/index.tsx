import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Table = () => {
  return (
    <div className="wrapper">
      <div className="">
        <Link to="/login">
          <button type="button" className="btn btn-primary">
            Logout
          </button>
        </Link>
        <button type="button" className="btn btn-warning">
          Change password
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Article Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Shares</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Bootstrap 4 CDN and Starter Template</td>
                  <td>Cristina</td>
                  <td>2.846</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bootstrap Grid 4 Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>3.417</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bootstrap Flexbox Tutorial and Examples</td>
                  <td>Cristina</td>
                  <td>1.234</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="btn btn-danger">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
