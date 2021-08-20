import React from 'react';
import axios from 'axios';

import API from './api';

export default class AlbumsList extends React.Component {
  state = {
    search: 'selena quintanilla',
    albums: []
  }

  componentDidMount() {
    //https://itunes.apple.com/search?term=selena+quintanilla&country=mx&entity=album
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

  render() {
    return (
      <ul>
        { this.state.albums.map(album => <li>{album.artistName} | {album.collectionName} | {album.releaseDate}</li>)}
      </ul>
    )
  }
}