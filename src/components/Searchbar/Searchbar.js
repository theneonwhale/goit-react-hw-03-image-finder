import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    // if (this.state.pokemonName.trim() === '') {
    //   toast.error('Введите имя покемона.');
    //   return;
    // }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>
              <ImSearch style={{ marginRight: 8 }} />
              Search
            </span>
          </button>

          <input
            type="text"
            //   autocomplete="off"
            //   autofocus
            value={this.state.query}
            onChange={this.handleQueryChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
