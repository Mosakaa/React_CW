import React, { Component } from 'react';

class List extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="produce-list">
        {items.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span className="produce-type">{item.type}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
