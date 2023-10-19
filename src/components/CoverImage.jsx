import heartIcon from '../assets/icons/heart.svg'
import playIcon from '../assets/icons/play.svg'
import dotsIcon from '../assets/icons/dots.svg'

export const CoverImage = ({images}) => {

 const firstImage = images.length>1?  images[1] : images[0];

  const imgUrl = firstImage.url;
  const width = firstImage.width;
  const height = firstImage.height;
  const imgAlt = "image of the album"; 
  return (
   <>
     <img src={imgUrl} alt={imgAlt} />
     <div className='iconsContainer'>
      <img
        src={heartIcon}
        alt='heart icon'
        id='heart-highlight'
        className='icons'
      />
      <img
        src={playIcon}
        alt='play icon'
        id='play-highlight'
        className='icons'
      />
      <img
        src={dotsIcon}
        alt='dots icon'
        id='dots-highlight'
        className='icons'
      />
     </div>
     </>
  )
}
