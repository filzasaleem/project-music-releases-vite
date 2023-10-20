
export const AlbumName = ({name,albumUrl}) => {
 const url = albumUrl.spotify;

  return (
    <>
    
    <a className="albumName" href={url}>{name}</a>
   
    </>
   
  )
}