import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: '',
};

export default class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  }

  handleSubmit = (e) => {
    const { value } = e.target;
    this.props.onComplete(this.state);
  }

  render() {
    console.log(this.props, 'WHAT IS THIS LOL')
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="section-form"
      >
      <input
      type="number"
      name="Budget"
      placeholder="title????idk"
      value={this.state.value}
      onChange={this.handleChange}
    />
    <button type="submit">{buttonText}</button>
  </form>
    );
  }
}

SectionForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
};
