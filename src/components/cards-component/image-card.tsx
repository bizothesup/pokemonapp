import {FunctionComponent} from "react";
type Props = {
    images?: string,
    name?: string
}
const ImageCard:FunctionComponent<Props> = ({images,name}) => {
  return (
      <div>
         <img src={images} alt={name}/>
      </div>
  )
}
export default ImageCard;