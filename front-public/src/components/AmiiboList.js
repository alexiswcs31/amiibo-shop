import React, { Component } from 'react';
import Amiibo from './Amiibo';

import { Row } from 'reactstrap';

class AmiiboList extends Component {
  render() {
    const { amiibos } = this.props;
    return (
      <div id="AmiiboList">
        <Row>
          {
            amiibos && amiibos.map(amiibo => (
              <Amiibo
                key={amiibo.id}
                amiibo={amiibo}
              />
            ))
          }
        </Row>
      </div>
    );
  }
}

export default AmiiboList;
