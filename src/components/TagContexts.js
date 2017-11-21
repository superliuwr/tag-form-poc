import React, { Component } from 'react';
import { Classes, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/labs";

class TagContexts extends Component {
  render() {
    const tagContexts = [{
      name: "People",
      id: 1
    }, {
      name: "Place",
      id: 2
    }, {
      name: "Organization",
      id: 3
    }];

    const renderTagContext = ({handleClick, index, isActive, item}) => {
      <MenuItem className={isActive ? Classes.ACTIVE : ""}
        key={item.id}
        label={item.name}
        text={item.name}
        onClick={() => {console.log(item.name)}}
      />
    };

    console.log('rendering');

    return (
      <Select
        items={tagContexts}
        itemRenderer={renderTagContext}
        onItemSelect={() => {}}
      />
    );
  }
}

export default TagContexts;