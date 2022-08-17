import { useState } from "react";
import { Form, Button, Label, Col, Row } from "react-bootstrap";

// const loggingIn = () => {
//   return (
//     <div>
//       <Row>
//         <Col>{loginForm()}</Col>
//       </Row>
//     </div>
//   );
// };

const LoggingInForm = () => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  // Validating Input Fields:
  const validateField = (e) => {
    let fieldValue = e.target.value;
    let fieldId = e.target.id;
    switch (fieldId) {
      case "formBasicEmail":
        validateEmail(fieldValue);
        break;
      case "formBasicPassword":
        validatePassword(fieldValue);
        break;
    }
  };

  // Validating Email:
  const validateEmail = (fieldValue) => {
    if (fieldValue.includes("@" && ".com", ".net")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  // Validating Password:
  const validatePassword = (fieldValue) => {
    if (fieldValue === null || fieldValue.trim() === "") {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  return (
    <Row>
      <Col>
        <Form className="loggingForm">
          <div class="form-outline mb-4">
            <input type="email" id="formBasicEmail" class="formEmail" />
            <label
              class="form-label"
              for="form2Example1"
              isInvalid={emailIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            >
              Enter Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="formBasicPassword"
              class="formPassword"
            />
            <label
              class="form-label"
              for="form2Example2"
              isInvalid={passwordIsValid === false}
              onBlur={(e) => {
                validateField(e);
              }}
            >
              Enter Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberCheckbox"
                />
                <label class="form-check-label" for="rememberMe">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forget your password, traveler?</a>
            </div>
          </div>

          <Button
            variant="outline-danger"
            class="btn btn-danger mb-4"
            // className="enterButton"
          >
            Enter
          </Button>

          <div class="text-center">
            <p>
              New to the game? <a href="#!">Register here.</a>
            </p>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default LoggingInForm;
