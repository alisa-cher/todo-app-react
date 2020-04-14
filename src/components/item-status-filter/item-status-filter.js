import React, {Component} from 'react';

import './item-status-filter.css';

const buttons = ["All", "Active", "Done"];

export default class ItemStatusFilter extends Component {
  render() {
    const {activeFilter, onStatusFilterClicked} = this.props;
    return (
      <div className="item-status-filter">
        {buttons.map((button) =>
          <button type="button"
                  key={button}
                  className={`uk-button item-status-filter__button ${activeFilter === button ? "uk-button-primary" : "uk-button-default"}`}
                  onClick={(evt) => onStatusFilterClicked(evt.target.innerHTML)}>{button}</button>
        )}
      </div>
    );
  };
};

