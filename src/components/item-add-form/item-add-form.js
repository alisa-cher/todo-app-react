import React, {Component} from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const {onItemAdded} = this.props;
    return(
      <div className="item-add-form">
        <button className="item-add-form__button uk-button uk-button-primary" onClick={() => onItemAdded('text')}>Add Item</button>
      </div>
    )
  }
}
