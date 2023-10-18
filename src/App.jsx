import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header";


const albums = data.albums.items;
console.log(albums);

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


export const App = () => {
  return (
  <div>
   
   <Header />

    <div className="container">
    <div className="albumsOuter">{renderAlbums()}</div>
    </div>
   

  </div>);
};
