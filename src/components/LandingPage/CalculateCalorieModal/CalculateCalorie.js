import React, { useState } from "react";
// import { Modal } from "bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./CalculateCalorie.css";

const CalculateCalorie = (props) => {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Cup");
  const [calories, setCalories] = useState(0.0);
  const [foodError, setFoodError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const handleUnitSelect = (unit) => setUnit(unit);

  const handleFoodChange = (e) => {
    const value = e.target.value;
    if (/\d/.test(value)) {
      setFoodError("Food name cannot contain numbers");
    } else {
      setFoodError("");
    }
    setFood(value);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setQuantity(value);
      setQuantityError("");
    } else {
      setQuantityError("Quantity must be a positive number");
    }
  };

  const handleCalculate = async () => {
    // Placeholder for calculation logic, replace with actual API call
    const calculatedCalories = await calculateCalories(food, quantity, unit);
    setCalories(calculatedCalories);
  };

  // Placeholder function for calorie calculation, replace with actual API call
  const calculateCalories = async (food, quantity, unit) => {
    // Replace this logic with your actual backend call and calculation logic
    // Example:
    // const response = await fetch('/api/calculate-calories', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ food, quantity, unit }),
    // });
    // const data = await response.json();
    // return data.calories;

    // Temporary calculation logic for demonstration purposes
    return quantity * 50; // Assume 50 kcal per unit for demonstration
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal-width"
    >
      <Modal.Header closeButton className="calorie-display">
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="mb-4">Kcal</h5>
          <h3>{calories.toFixed(1)}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group controlId="formFood">
            <Form.Label>Food</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter food"
              value={food}
              onChange={handleFoodChange}
              isInvalid={!!foodError}
            />
            <Form.Control.Feedback type="invalid">
              {foodError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formQuantity" className="mt-3">
            <Form.Label>Food quantity</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Enter a number"
                value={quantity}
                onChange={handleQuantityChange}
                isInvalid={!!quantityError}
                min="0"
              />
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title={unit}
                id="input-group-dropdown-1"
                onSelect={handleUnitSelect}
              >
                <Dropdown.Item eventKey="Cup">Cup</Dropdown.Item>
                <Dropdown.Item eventKey="Gram">Gram</Dropdown.Item>
                <Dropdown.Item eventKey="Ounce">Ounce</Dropdown.Item>
              </DropdownButton>
              <Form.Control.Feedback type="invalid">
                {quantityError}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button
            variant="primary"
            className="w-100 mt-3"
            onClick={handleCalculate}
          >
            Calculate Calorie
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CalculateCalorie;
