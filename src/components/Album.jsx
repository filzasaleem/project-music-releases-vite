import { AlbumName } from "./AlbumName"
 import {ArtistName} from "./ArtistName"
 import {CoverImage} from "./CoverImage";

export const Album = ({name,albumUrl,images,artists}) => {
    const albumName = <AlbumName name={name} albumUrl={albumUrl} />
    const artistName = <ArtistName artists = {artists} />
     const coverImage = <CoverImage images = {images} />

  return (
  
      <div className="albums">
        <div className="imageContainer">
          {coverImage}
          {/* <img className="playButton" src='./assets/icons/play.svg' alt="Play Button" /> */}
        </div>
        {albumName} 
        {artistName}
      
    </div>
   
  )
}
