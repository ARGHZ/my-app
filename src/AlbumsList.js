import React from 'react';

import API from './api';

export default class AlbumsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: 'selena quintanilla',
      albums: [],
    }

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.inputUpdated = this.inputUpdated.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ search: value });
  }

  handleClick() {
    API.get(`https://itunes.apple.com/search`, {
        params: {
          term: this.state.search,
          country: 'mx', 
          entity: 'album'
        }
      })
      .then(res => {
        const albums = res.data.results;
        this.setState({ albums });
      })
  }

  componentDidMount() {
    //https://itunes.apple.com/search?term=selena+quintanilla&country=mx&entity=album
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">Artist: </label>
        <input type="text" name="search" id="search" value={this.state.search} onInput={this.inputUpdated} />
        <button onClick={this.handleClick}>Search</button>
        
          { this.state.albums.map(album => 
            <div>
              <img src={album.artworkUrl100} alt="N/A" />
              <h3>{album.artistName}</h3>
              <h3>{album.collectionName}</h3>
              <h3>{album.releaseDate}</h3>
            </div>
          )}
        
      </React.Fragment>
    )
  }
}