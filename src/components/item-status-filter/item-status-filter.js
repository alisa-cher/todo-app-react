import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render()  {
    const {activeFilter, onStatusFilterClicked} = this.props;
    return (
      <div className="item-status-filter">
        <button type="button"
                className={`uk-button item-status-filter__button ${activeFilter === "All" ? "uk-button-primary" : "uk-button-default"}`}
                onClick={(evt) => onStatusFilterClicked(evt.target.innerHTML)}>All</button>
        <button type="button"
                className={`uk-button item-status-filter__button ${activeFilter === "Active" ? "uk-button-primary" : "uk-button-default"}`}
                onClick={(evt) => onStatusFilterClicked(evt.target.innerHTML)}>Active</button>
        <button type="button"
                className={`uk-button item-status-filter__button ${activeFilter === "Done" ? "uk-button-primary" : "uk-button-default"}`}
                onClick={(evt) => onStatusFilterClicked(evt.target.innerHTML)}>Done</button>
      </div>
    );
  };
};

