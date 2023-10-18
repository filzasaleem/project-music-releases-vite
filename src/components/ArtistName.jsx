
export const ArtistName = ({artists}) => {

  const artistList = artists.map(({id,name, external_urls }) => ({
    key:id,
    artistName: name,
    url: external_urls.spotify
  }));
const length = artistList.length
  const seperator = (index) =>{
      if(length > 1){
        if (index === length - 2) {
          return " & ";
        } else if (index < length - 2) {
          return ", ";
        }
      }
  }
  return (
    <>
 <div>
      {artistList.map((artist,index) => (
        <a key={artist.key} href={artist.url}>
          {artist.artistName} {seperator(index)}
        </a>
      ))}
 </div>


   
   </>
  )
}
