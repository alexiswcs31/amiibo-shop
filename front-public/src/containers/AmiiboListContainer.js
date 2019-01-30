import React from 'react';
import AmiiboList from '../components/AmiiboList';

const AmiiboListContainer = ({ figures }) => (
  <div>
    <AmiiboList
      figures={figures}
    />
  </div>
);

export default AmiiboListContainer;
