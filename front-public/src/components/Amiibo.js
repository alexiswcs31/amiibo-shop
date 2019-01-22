import React, { Component } from 'react';

import { Col } from 'reactstrap';

class Amiibo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amiibo: undefined
    };
  }

  componentDidMount = () => {
    fetch(`http://www.amiiboapi.com/api/amiibo/?name=${this.props.character}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          amiibo: data
        })
      )
  };

  render() {
    const { name, image } = this.props;
    return (
      <Col lg="3" md="6" sm="12">
        <div>
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </div>
      </Col>
    )
  }
}

export default Amiibo;