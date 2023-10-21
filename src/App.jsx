import data from "./data.json";
import playlistData from "./stretched-goal.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import { Playlist } from "./components/Playlist";

const playlists = playlistData.playlists.items;
const albums = data.albums.items;
 console.log(albums);

console.log(playlists);

const renderAlbums =() =>{

  const filteredAlbums = albums.filter((album) => album.album_type == "album");
 return filteredAlbums.map(({id,name,external_urls,images,artists,release_date})=>(
   <Album 
   key={id} 
   name={name} 
   albumUrl={external_urls} 
   images={images} 
   artists={artists}
   releaseDate= {release_date}
  />
 ));

};
const renderSingles =() =>{
  
  const singles = albums.filter((album) => album.album_type == "single");


  return singles.map(({id,name,external_urls,images,artists,release_date})=>(
    <Album 
    key={id} 
    name={name} 
    albumUrl={external_urls} 
    images={images} 
    artists={artists}
    releaseDate= {release_date}
   />
  ));

};

const renderPlaylists = ()=>{
  return playlists.map(({id,name,external_urls,images,description})=>(
    <Playlist
    key={id} 
    name={name} 
    albumUrl={external_urls} 
    images={images} 
    description={description}
   />
 
  ));
};

export const App = () => {
  return (
  <div>
    <Header/>
    <div className="wrapper">
    
    <div className="sidebar">
        <h3 className="topText">Playlist</h3>     
      {renderPlaylists()}
    </div>

    <div className="albumsOuter">
        <div className="textCenter">
          <h2>Singles</h2>
        </div>
        {renderSingles()}
        <div className="textCenter">
          <h2>Albums</h2>
        </div>
        {renderAlbums()}
    </div>

</div>

  </div>);
};
