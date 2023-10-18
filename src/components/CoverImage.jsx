
export const CoverImage = ({images}) => {

 const firstImage = images[1];

  const imgUrl = firstImage.url;
  const width = firstImage.width;
  const height = firstImage.height;
  const imgAlt = "image of the album"; 
  return (
    <div className="imageContainer">
     <img src={imgUrl} alt={imgAlt} />
    </div>
  )
}
