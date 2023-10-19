
export const CoverImage = ({images}) => {

 const firstImage = images.length>1?  images[1] : images[0];

  const imgUrl = firstImage.url;
  const width = firstImage.width;
  const height = firstImage.height;
  const imgAlt = "image of the album"; 
  return (
    <>
     <img src={imgUrl} alt={imgAlt}/>
     </>
  
  )
}
