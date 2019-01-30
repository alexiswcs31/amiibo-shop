import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntoTheBox from '../components/IntoTheBox';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
// import { deleteFromBox } from '../redux/actions';

class BoxContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.removeFigure = this.removeFigure.bind(this);
  // }

  // removeFigure(id, price) {
  //   this.props.deleteFromBox(id, price)
  // }

  render() {
    const { figures, box } = this.props;
    const pickedFigures = box.map(box => {
      const figure = figures.find(figure => figure.id === box.id);
      const { image, amiiboSeries, price, slug } = figure;
      const totalPrice = box.quantityNeeded * price;
      return {
        ...box,
        image,
        amiiboSeries,
        price,
        slug,
        totalPrice
      }
    })

    return (
      <Container>
        <Row>
          <Col>
            <IntoTheBox pickedFigures={pickedFigures} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  box: state.box,
  figures: state.figures
});

export default connect(mapStateToProps)(BoxContainer);
