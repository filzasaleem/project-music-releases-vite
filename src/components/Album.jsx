import { AlbumName } from "./AlbumName"
import {ArtistName} from "./ArtistName"
import {CoverImage} from "./CoverImage";
import {Description} from "./Description";

export const Album = ({name,albumUrl,images,artists,releaseDate}) => {
    const albumName = <AlbumName name={name} albumUrl={albumUrl} />
    const artistName = <ArtistName artists = {artists} />
    const coverImage = <CoverImage images = {images} />
    const albumReleaseDate = <Description description = {releaseDate} />

  return (
  
      <div className="albums">
        <div className="imageContainer">
          {coverImage}
        </div>
        {albumName} 
        {artistName}
        {albumReleaseDate}  
    </div>
   
  )
}
