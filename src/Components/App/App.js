import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from  '../Playlist/Playlist';
class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      searchResults: 
      [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3},
      {name: 'name4', artist: 'artist4', album: 'album4', id: 4},
      {name: 'name5', artist: 'artist5', album: 'album5', id: 5}],
      playlistName: "Rafal's playlist",
      playlistTracks: 
      [{name: 'Rafal1', artist: 'Rafalartist1', album: 'Rafalalbum1', id: 11}, 
      {name: 'Rafal2', artist: 'Rafalartist2', album: 'Rafalalbum2', id: 22},
      {name: 'Rafal3', artist: 'Rafalartist3', album: 'Rafalalbum3', id: 33},
      {name: 'Rafale4', artist: 'Rafalartist4', album: 'Rafalalbum4', id: 44},
      {name: 'Rafal5', artist: 'Rafalartist5', album: 'Rafalalbum5', id: 55}], 
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks ;

    // CHECK IF THAT IS GONNA WORK TO
    // for (let savedTrack of tracks){
    //   if (savedTrack.id === track.id) {
    //     return;
    //   }
    // }
    
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
          
    this.setState({playlistTracks: tracks});
  }



  render() {

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            {<SearchResults 
              searchResults = {this.state.searchResults} 
              onAdd = {this.addTrack}/>}
            {<Playlist 
              playlistName = {this.state.playlistName} 
              playlistTracks = {this.state.playlistTracks}
              onRemove = {this.removeTrack}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
