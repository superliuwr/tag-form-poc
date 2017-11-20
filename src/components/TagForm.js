import React, { Component } from 'react';
import './TagForm.css';
import { FormGroup } from '@blueprintjs/core';
import TagContexts from './TagContexts';

class TagForm extends Component {
  render() {
    return (
      <FormGroup className='TagForm-form'>
        <TagContexts />
        <input className="pt-input .default" type="text" placeholder="Tag name" dir="auto" />
      </FormGroup>
    );
  }
}

export default TagForm;