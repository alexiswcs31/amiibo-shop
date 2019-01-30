import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showInsideBox: false
  //   };
  //   this.handleBox = this.handleBox.bind(this)
  // }

  // handleBox() {
  //   this.setState({
  //     showInsideBox: !this.state.showInsideBox
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  // }

  // handleMobileSearchBar(event) {
  //   event.preventDefault();
  //   this.setState({
  //     searchBarMobile: true
  //   });
  // }
  
  render() {
    return (
      <Container fluid id="Header" style={{ backgroundColor: '#FB9116' }}>
        <Row>

          <Col lg="4">
            <Link to='/' tag={Link}>
              <img
                style={{ width: '90%', height: '90%' }}
                src="./images/logo-amiibo-c-est-beau-la-vie.png"
                alt="'Amiibo c'est beau la vie' logo"
                className="d-flex justify-content-center align-items-center"
              />
            </Link>
          </Col>
          
          <Col lg="3">
            <InputGroup>
              <Input
                type="search"
                placeholder="Search for Amiibo"
                className=""
              />
              <InputGroupAddon addonType="append">
                <i
                  className="fab fa-searchengin d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                </i>
              </InputGroupAddon>
            </InputGroup>
          </Col>

          <Col lg="3">
            <p>... selected items</p>
            <p>Total price : ...</p>
            <Link to='/my-box'>
              <i
                className="fas fa-box-open"
                style={{ transform: 'scale(1.5,1.5)', cursor: 'pointer', color: 'black' }}
              ></i>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  figures: state.figures
})

export default connect(mapStateToProps)(Header);
