import Image from "./Image";
import "./styles.css";
import useMedia from "../../hooks/useMedia";
import { useNavigate } from "react-router-dom";

function FeedPhotoItem({ photo, setModalPhoto }) {
  const mobile = useMedia("(max-width: 960px)");
  const navigate = useNavigate();

  function handleClick() {
    if (mobile) {
      navigate(`/photo/${photo.id}`);
    } else {
      setModalPhoto(photo);
    }
  }

  return (
    <li className="photo grid pointer-events-none" onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
