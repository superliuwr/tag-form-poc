import React from 'react';

import './TagForm.css';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      displayName: '',
      context: '',
      themes: [],
      isVisible: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDisplayNameChange = this.handleDisplayNameChange.bind(this);
    this.handleContextChange = this.handleContextChange.bind(this);
    this.handleThemesChange = this.handleThemesChange.bind(this);
    this.handleIsVisibleChange = this.handleIsVisibleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
      displayName: this.state.displayName,
      context: this.state.context,
      themes: this.state.themes,
      isVisible: this.state.isVisible
    });
  }

  handleDisplayNameChange(event) {
    this.setState({
      name: this.state.name,
      displayName: event.target.value,
      context: this.state.context,
      themes: this.state.themes,
      isVisible: this.state.isVisible
    });
  }

  handleContextChange(event) {
    this.setState({
      name: this.state.name,
      displayName: this.state.displayName,
      context: event.target.value,
      themes: this.state.themes,
      isVisible: this.state.isVisible
    });
  }

  handleThemesChange(event) {
    this.setState({
      name: this.state.name,
      displayName: this.state.displayName,
      context: this.state.context,
      themes: event.target.value,
      isVisible: this.state.isVisible
    });
  }

  handleIsVisibleChange(event) {
    this.setState({
      name: this.state.name,
      displayName: this.state.displayName,
      context: this.state.context,
      themes: this.state.themes,
      isVisible: !this.state.isVisible
    });
  }

  handleSubmit(event) {
    alert('Form submitted: ' + this.state.name + ' ,' + this.state.displayName + ' ,' + this.state.context);
    event.preventDefault();
  }

  render() {
    return (
      <div className='App-TagForm'>
        <form onSubmit={this.handleSubmit}>
          <label className='pt-label pt-inline'>
            Name
            <span className='pt-text-muted'>*</span>
            <input className='pt-input' style={{width: '200px'}} type='text' dir='auto' value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label className='pt-label pt-inline'>
            Display Name
            <span className='pt-text-muted'>*</span>
            <input className='pt-input' style={{width: '200px'}} type='text' dir='auto' value={this.state.displayName} onChange={this.handleDisplayNameChange} />
          </label>
          <label className='pt-label pt-inline'>
            Context
            <div class='pt-select'>
              <select value={this.state.context} onChange={this.handleContextChange}>
                <option>Choose a context</option>
                <option value='1'>Place</option>
                <option value='2'>People</option>
                <option value='3'>Organization</option>
                <option value='4'>Event</option>
                <option value='5'>Thing</option>
              </select>
            </div>
          </label>
          <label className='pt-control pt-switch pt-align-right'>
            <input type='checkbox' />
            <span className='pt-control-indicator'></span>
            Visible
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default TagForm;