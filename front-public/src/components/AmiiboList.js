import React, { Component } from "react";
import Amiibo from "./Amiibo";

import { Row } from 'reactstrap';

class AmiiboList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amiibos: []
    };
  }

  componentDidMount = () => {
    fetch('http://www.amiiboapi.com/api/amiibo/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          amiibos: data.amiibo
        })
      )
  };

  render() {
    const { amiibos } = this.state;
    return (
      <div id="AmiiboList">
        <Row>
          {
            amiibos &&
            amiibos.map(amiibo => {
              return (
                <Amiibo
                  name={amiibo.name}
                  image={amiibo.image}
                />
              )
            })
          }
        </Row>
      </div>
    );
  }
}

export default AmiiboList;
