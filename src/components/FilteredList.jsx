import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: 'All'
    };
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };

  onFilter = (event) => {
    this.setState({
      type: event.target.value
    });
  };

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType =
      this.state.type === 'All' || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <section className="panel">
        <h2>Produce Filter</h2>
        <div className="filter-controls">
          <label htmlFor="produce-search">Search produce</label>
          <input
            id="produce-search"
            type="text"
            placeholder="Type to search"
            value={this.state.search}
            onChange={this.onSearch}
          />
          <label htmlFor="produce-type">Filter by type</label>
          <select
            id="produce-type"
            value={this.state.type}
            onChange={this.onFilter}
          >
            <option value="All">All</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetables</option>
          </select>
        </div>
        <List items={filteredItems} />
      </section>
    );
  }
}

export default FilteredList;
