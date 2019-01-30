import React, { Component } from 'react';
import {
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Amiibo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 1,
  //     amiibo: {}
  //   };
  // }

  // componentDidMount(){
  //   const { slug } = this.props.match.params;
  //   axios.get(`/api/amiibo/${slug}`)
  //     .then(response => response.data)
  //     .then(amiibo =>
  //       this.setState({
  //         amiibo
  //       })
  //     );
  // }

  // addOne() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

  // removeOne() {
  //   if (this.state.count > 1)
  //     this.setState({
  //       count: this.state.count - 1
  //     })
  // }

  render() {
    // const { addFigureIntoTheBox } = this.props;
    const { amiibo } = this.props;
    const { name, image, price, amiiboSeries, slug } = amiibo;
    // return <Col lg="3" md="6" sm="6">{amiibo.name}</Col>
    return (
      <Col lg="3" md="6" sm="6">
        <CardDeck className="p-2">
          <Card>
            <Link to={`amiibo/${slug}`}>
              <CardImg
                top
                style={{ width: '200px', height: '300px', margin: '0 auto' }}
                src={image}
                alt={name}
              />
              <CardBody>
                <CardTitle><strong>{name}</strong></CardTitle>
                <CardTitle>{amiiboSeries}</CardTitle>
                <CardSubtitle>{price} €</CardSubtitle>
                {/* <CardText>
                  <Button
                    onClick={this.removeOne.bind(this)}
                    style={{ color: 'black', backgroundColor: 'white' }}
                  >
                    -
                  </Button>
                  <h5 className="d-inline-block mx-3">{this.state.count}</h5>
                  <Button
                    onClick={this.addOne.bind(this)}
                    style={{ color: 'black', backgroundColor: 'white' }}
                  >
                    +
                  </Button>
                </CardText> */}
                {/* <Button
                  style={{ backgroundColor: '#FB9116', border: 'none' }}
                  onClick={() => addFigureIntoTheBox(name)}>Add to box !
                </Button> */}
              </CardBody>
            </Link>
          </Card>
        </CardDeck>
      </Col>
    )
  }
}

export default Amiibo;
