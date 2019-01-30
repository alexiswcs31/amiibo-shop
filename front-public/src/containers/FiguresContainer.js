// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';
// import { fetchFiguresRequest } from '../redux/actions';

// class FiguresContainer extends Component {
//   componentDidMount() {
//     const { fetchFiguresRequest } = this.props;
//     axios.get('/api/amiibo')
//       .then(response => response.data)
//       .then(figures => fetchFiguresRequest(figures)
//     );
//   }

//   render() {
//     return(
//       <div />
//     )
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   fetchFiguresRequest: figures => dispatch(fetchFiguresRequest(figures))
// })

// export default withRouter(connect(null, mapDispatchToProps)(FiguresContainer));





import React, { Component } from 'react';
import {
  fetchFiguresRequest,
  fetchFiguresSuccess,
  fetchFiguresError,
  addToBox
} from '../redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import AmiiboList from '../components/AmiiboList';

class FiguresContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      figures: []
    }
    this.addFigureIntoTheBox = this.addFigureIntoTheBox.bind(this);
  }

  componentDidMount() {
    this.props.fetchFiguresRequest()
    axios.get('http://localhost:3591/api/amiibo')
      .then(response => response.data)
      .then(figures => this.props.fetchFiguresSuccess(figures))
      .catch(error => this.props.fetchFiguresError(error))
  }

  addFigureIntoTheBox(id, name, amiiboSeries, reference, description, stock, price, image, createdAt) {
    this.props.addToBox(id, name, amiiboSeries, reference, description, stock, price, image, createdAt);
  }

  render() {
    const { figures } = this.props;
    return (
      <div>
        <AmiiboList
          amiibos={figures}
          addFigureIntoTheBox={this.addFigureIntoTheBox}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  figures: state.figures.list,
  box: state.box.box
})

const mapDispatchToProps = {
  fetchFiguresRequest,
  fetchFiguresSuccess,
  fetchFiguresError,
  addToBox
}

export default connect(mapStateToProps, mapDispatchToProps)(FiguresContainer);
