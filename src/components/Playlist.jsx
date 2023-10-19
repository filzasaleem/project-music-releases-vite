 import { AlbumName } from "./AlbumName"
 import {CoverImage} from "./CoverImage";
 import {Description} from "./Description";

export const Playlist = ({name,albumUrl,images,description}) => {
    const albumName = <AlbumName name={name} albumUrl={albumUrl} />
    const coverImage = <CoverImage images = {images} />
    const albumDescription = <Description description = {description} />
  return (
    <div className="playlists">
        <div className="playlistImage">
         {coverImage}
        </div>
        <div className="playlistText">
        {albumName} 
        {albumDescription}
        </div>
       
    </div>
  )
}
