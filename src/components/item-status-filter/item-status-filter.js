import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="item-status-filter">
      <button type="button"
              className="uk-button uk-button-primary item-status-filter__button">All</button>
      <button type="button"
              className="uk-button uk-button-default item-status-filter__button">Active</button>
      <button type="button"
              className="uk-button uk-button-default item-status-filter__button">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
