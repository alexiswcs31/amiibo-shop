import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { addToBox } from './../redux/actions';

class AddToBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.addOne=this.addOne.bind(this);
    this.deleteOne=this.deleteOne.bind(this);
  }

  deleteOne(){
    if (this.state.count >= 1) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  addOne(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { id } = this.props.figure;
    const { count } = this.state;
    const { addToBox } = this.props;
    return (
      <div>
        <Row>
          <Col lg="6">
            <Button
              onClick={this.deleteOne.bind(this)}
            >
              -
            </Button>
            <h6 className="d-inline-block mx-3">{count}</h6>
            <Button
              onClick={this.addOne.bind(this)}
            >
              +
            </Button>
          </Col>
          <Col lg="6">
            <Button
              onClick={() => addToBox(id, count)}
            >Add to box !</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToBox: (id, count) => dispatch(addToBox(id, count))
})

export default connect(null, mapDispatchToProps)(AddToBox);
