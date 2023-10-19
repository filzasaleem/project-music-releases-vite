import data from "./data.json";
import playlistData from "./stretched-goal.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import { Playlist } from "./components/Playlist";

const playlists = playlistData.playlists.items;
const albums = data.albums.items;
// console.log(albums);

console.log(playlists);

const renderAlbums =() =>{
  
  return albums.map(({id,name,external_urls,images,artists})=>(
    <Album 
    key={id} 
    name={name} 
    albumUrl={external_urls} 
    images={images} 
    artists={artists}
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
}
const myImage = playlists[0].images[0].url;


export const App = () => {
  return (
  <div>
   
   <Header/>

   <div className="wrapper">
    
        <div className="sidebar">
            <h3 className="topText">Playlist</h3>     
          {renderPlaylists()}
        </div>
        <div className="container">
         <div className="albumsOuter">{renderAlbums()}</div>
         </div>
    </div>
   
   
   

  </div>);
};
