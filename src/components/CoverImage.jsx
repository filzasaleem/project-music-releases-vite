import heartIcon from '../assets/icons/heart.svg'
import playIcon from '../assets/icons/play.svg'
import dotsIcon from '../assets/icons/dots.svg'

export const CoverImage = ({images}) => {

 const firstImage = images[1];

  const imgUrl = firstImage.url;
  const width = firstImage.width;
  const height = firstImage.height;
  const imgAlt = "image of the album"; 
  return (
    <div className="imageContainer">
     <img src={imgUrl} alt={imgAlt} />
     <div className='iconsContainer'>
      <img
        src={heartIcon}
        alt='heart icon'
        id='heart-highlight'
        className='icons'
      ></img>
      <img
        src={playIcon}
        alt='play icon'
        id='play-highlight'
        className='icons'
      ></img>
      <img
        src={dotsIcon}
        alt='dots icon'
        id='dots-highlight'
        className='icons'
      ></img>
     </div>
    </div>
  )
}
