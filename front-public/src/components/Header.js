import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
      // box: this.props.cartItems,
      searchBarMobile: false
    };
  }

  handleBox(event) {
    event.preventDefault();
    this.setState({
      showBox: !this.state.showBox
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  handleMobileSearchBar(event) {
    event.preventDefault();
    this.setState({
      searchBarMobile: true
    });
  }

  // handleSearchNav(e) {
  //   e.preventDefault();
  //   this.setState(
  //     {
  //       mobileSearch: false
  //     },
  //     function () {
  //       this.refs.searchBox.value = "";
  //       this.props.handleMobileSearch();
  //     }
  //   );
  // }
  // handleClickOutside(event) {
  //   const cartNode = findDOMNode(this.refs.cartPreview);
  //   const buttonNode = findDOMNode(this.refs.cartButton);
  //   if (cartNode.classList.contains("active")) {
  //     if (!cartNode || !cartNode.contains(event.target)) {
  //       this.setState({
  //         showCart: false
  //       });
  //       event.stopPropagation();
  //     }
  //   }
  // }
  // componentDidMount() {
  //   document.addEventListener(
  //     "click",
  //     this.handleClickOutside.bind(this),
  //     true
  //   );
  // }
  // componentWillUnmount() {
  //   document.removeEventListener(
  //     "click",
  //     this.handleClickOutside.bind(this),
  //     true
  //   );
  // }
  render() {
    return (
      <Container fluid id="Header" style={{ backgroundColor: '#FB9116' }}>
        <Row>

          <Col lg="4">
            <img
              style={{ width: '90%', height: '90%' }}
              src="./images/logo-amiibo-c-est-beau-la-vie.png"
              alt="'Amiibo c'est beau la vie' logo"
              className="d-flex justify-content-center align-items-center"
            />
          </Col>

          {/* <Col lg="4"> */}
          {/* <Form
              action="#"
              method="get" 
             className={
               this.state.mobileSearch ? "search-form active" : "search-form"
             }
            >
              <a
                className="back-button"
                href="#"
              onClick={this.handleSearchNav.bind(this)}
              >
              <i class="fas fa-arrow-circle-left"></i>

              </a>
              
            </Form> */}
          {/* </Col> */}

          {/* <Col lg="1">
            <Button
              type="submit">D
            </Button> */}
          {/* onClick={this.handleSubmit.bind(this)} */}

          {/* </Col> */}
          <Col lg="4">
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

          <Col lg="4">
            <p>{/* <strong>{this.props.totalItems}</strong> */} selected items</p>
            <p>Total price : {/* <strong>{this.props.total}</strong> */}</p>
            <i
              className="fas fa-box-open"
              style={{ transform: 'scale(1.5,1.5)', cursor: 'pointer' }}
            // onClick={this.handleCart.bind(this)}
            ></i>

            {/* {this.props.totalItems ? (
                <span className="cart-count">{this.props.totalItems}</span>
              ) : (
                  ""
                )} */}

            {/* <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview"
              }
              ref="cartPreview"
            > */}
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Header;
