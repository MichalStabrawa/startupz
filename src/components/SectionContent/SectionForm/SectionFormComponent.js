import { useState } from "react";
import SectionComponent from "../../UI/Section/SectionComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./SectionFormComponent.module.scss";
import ButtonComponent from "../../UI/Button/ButtonComponent";

const SectionFormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    if (e.target.type === "text") {
      setName(value);
    }
    if (e.target.type === "email") {
      setEmail(value);
    }
  };

  const handleTextarea = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      alert(`name: ${name} email: ${email} meesage: ${message}`);
    } else {
      alert("Empty inputs");
    }
  };

  return (
    <SectionComponent css="yellow">
      <Container>
        <Row>
          <Col lg={12}>
            <div className={classes.form_main} id="form">
              <h2 className={classes.title}>
                Are you ready to board this rocket ship?
              </h2>
              <p className={classes.description}>
                Share your excitement with us.
              </p>
              <form>
                <input
                  onChange={handleInput}
                  type="text"
                  placeholder="Name*"
                  value={name}
                />
                <input
                  onChange={handleInput}
                  type="email"
                  placeholder="Email*"
                  value={email}
                />
                <textarea
                  onChange={handleTextarea}
                  placeholder="Message*"
                  value={message}
                />
                <span>
                  {" "}
                  <ButtonComponent
                    click={sendData}
                    type="submit"
                    text="Shoot us a message"
                    css="submit"
                  />
                </span>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionComponent>
  );
};

export default SectionFormComponent;
