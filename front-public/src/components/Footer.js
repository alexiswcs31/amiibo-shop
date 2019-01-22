import React, { Component } from "react";
import {
  Container,
  Row
} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Container fluid id="Footer">
        <Row>
          <a
            href="https://github.com/alfrofro"
            target="_blank"
            style={{ paddingRight: '20px' }}
          >
            My Github profile
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-fromager-328557174/"
            target="_blank"
            style={{ paddingLeft: '20px' }}
          >
            My LinkedIn profile
          </a>
        </Row>
        <Row>
          <p>
            &copy; {(new Date().getFullYear())} <strong>Amiibo c'est beau la vie</strong> - FROMAGER Alexis
          </p>
        </Row>
      </Container>
    )
  }
};

export default Footer;