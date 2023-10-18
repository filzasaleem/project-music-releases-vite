
export const AlbumName = ({name,albumUrl}) => {
 const url = albumUrl.spotify;

  return (
    <>
    
    <a href={url}>{name}</a>
   
    </>
   
  )
}
