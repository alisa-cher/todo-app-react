import React, {Component} from "react";

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(evt) {
    const {onChanged} = this.props;
    onChanged(evt.target.value);
  }

  render() {
    const {searchKey} = this.props;
    return(
      <input className={`uk-input search-panel ${this.props.className}`}
             placeholder="Type something here"
             value={searchKey}
             onChange={this.onSearchChange}/>
    )
  }
}
