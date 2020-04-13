import React, {Component} from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      label: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onLabelChange = this.onLabelChange.bind(this);
  }

  onLabelChange(evt){
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit(evt) {
    const {onItemAdded} = this.props;
    const {label} = this.state;
    evt.preventDefault();
    onItemAdded(label);
    this.setState({
      label: ""
    });
  }

  render() {
    const {label} = this.state;
    return(
      <form className="item-add-form"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="uk-input item-add-form__input"
               onChange={this.onLabelChange}
               placeholder="What needs to be done?"
               value={label}
               minLength="3"/>
        <button className="item-add-form__button uk-button uk-button-primary">Add Item</button>
      </form>
    )
  }
}
