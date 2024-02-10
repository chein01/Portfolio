import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>
<p className="home-about-body">
  <br />I am proficient in utilizing
  <i>
    <b> Python</b> along with frameworks such as <b className="purple"> Django and FastAPI</b>.
  </i>
  <br />
  <br />
  My expertise lies in leveraging these technologies to build innovative web solutions and products. Additionally, I have a keen interest in exploring emerging technologies, particularly in the realms of
  <i>
    <b className="purple"> blockchain and decentralized applications.</b>
  </i>
  <br />
  <br />
  While my primary focus remains on Python-based development, I also possess skills in deploying applications on <b className="purple"> AWS</b> and <b className="purple"> Docker</b> containers. Moreover, I have a basic understanding of <b className="purple"> Solidity</b>, which enables me to work with smart contracts within the blockchain ecosystem.
  <br />
  <br />
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://twitter.com/cheein01111"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chien-pham-6507a7141/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
