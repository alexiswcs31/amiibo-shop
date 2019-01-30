import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import axios from 'axios';
import AddToBox from '../containers/AddToBox';

class AmiiboDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      amiibo: {}
    }
  }

  componentDidMount(){
    const { slug } = this.props.match.params;
    axios.get(`/api/amiibo/${slug}`)
      .then(res => res.data)
      .then(amiibo => 
        this.setState({
          amiibo
        })
      );
  }

  render() {
    const { id, name, amiiboSeries, reference, description, stock, price, image, createdAt } = this.state.amiibo;
    return (
      <Container>
        <Button>Back</Button>
        <Row>
          <Col lg='4'>
            <img
              key={id}
              src={image}
              alt={name}
            />
          </Col>
          <Col lg='8'>
            <div>
              <h3>{name}</h3>
              <p>{amiiboSeries}</p>
              <p>{stock}</p>
              <p>{reference}</p>
              <p>{description}</p>
              <p>{createdAt}</p>
              <p>{price} €</p>
              <AddToBox
                amiibo={this.state.amiibo}
              />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AmiiboDetails;
