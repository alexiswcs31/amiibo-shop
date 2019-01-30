import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';

const IntoTheBox = ({ pickedFigures }) => (
  <Container>
    {
      pickedFigures.map((pickedFigure, index) =>
        <CardDeck key={index} className="p-2">
          <Card>
            <CardTitle>{pickedFigure.quantityNeeded}</CardTitle>
            <CardImg top style={{ width: '200px', height: '300px', margin: '0 auto' }} src={pickedFigure.image} alt={pickedFigure.name} />
            <CardBody>
              <CardTitle><strong>{pickedFigure.name}</strong></CardTitle>
              <CardTitle>{pickedFigure.amiiboSeries}</CardTitle>
              <CardSubtitle>{pickedFigure.reference}</CardSubtitle>
              <CardText>{pickedFigure.description}</CardText>
              <CardSubtitle>{pickedFigure.stock}</CardSubtitle>
              <CardSubtitle>{pickedFigure.price} €</CardSubtitle>
              <CardSubtitle>{pickedFigure.createdAt}</CardSubtitle>
              <CardSubtitle>
                <i
                  className="fas fa-ban d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  // onClick={() => removeFigure(figure.id, figure.price)}
                >
                </i>
              </CardSubtitle>
            </CardBody>
          </Card>
        </CardDeck>
      )
    }
  </Container>
)

export default IntoTheBox;
