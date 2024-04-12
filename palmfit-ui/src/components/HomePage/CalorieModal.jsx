import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

export default function CalorieModal(props) {
  return (
    <Modal {...props} size="sm" centered>
      <Modal.Body style={{ padding: 0, backgroundColor: "#1A8D8D" }}>
        <p className="text-white fs-5 ps-4 pt-3">Kcal</p>
        <p className="text-white  fs-4 ps-5">0.0</p>
        <form
          className="bg-white mt-5"
          style={{ width: "100%", height: "45vh", borderRadius: "5% 5% 0 0" }}
        >
          <div className="form-group mb-3">
            <label for="food" className="ps-2 m-2">
              Food
            </label>
            <input
              type="name"
              className="form-control mx-auto"
              id="foodId"
              aria-describedby="food"
              style={{ width: "90%" }}
            />
          </div>

          <div className="form-group mt-3 d-flex justify-content-between">
            <div>
              <label for="foodQuanitity" className="ps-2 m-2">
                Food quantity
              </label>
              <input
                type="name"
                className="form-control mx-auto"
                id="foodQId"
                placeholder="Enter a number"
                style={{ width: "90%" }}
              />
            </div>
            <div className="align-self-center mt-4 pt-3 pe-3">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#F4F4F4", color: "black" }}
                >
                  {" "}
                  Cup{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <a class="dropdown-item" href="#">
                      Ounce
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a class="dropdown-item" href="#">
                      Cubit
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a class="dropdown-item" href="#">
                      KJ
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <a
            className="btn btn-primary mt-4"
            href="#"
            style={{
              marginLeft: "12%",
              width: "70%",
              backgroundColor: "#1A8D8D",
            }}
          >
            Calculate Calorie
          </a>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
