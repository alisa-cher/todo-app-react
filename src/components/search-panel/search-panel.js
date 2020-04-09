import React, {Component} from "react";

export default class SearchPanel extends Component {
  render() {
    return(
      <input className={`uk-input search-panel ${this.props.className}`}
             placeholder="Type something here"/>
    )
  }
}
