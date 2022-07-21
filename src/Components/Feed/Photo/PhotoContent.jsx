import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Image from "../Image";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import "./styles.css";

export default function PhotoContent({ data, loading }) {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  if (loading) return <h1>carregando</h1>;
  return (
    <div className="modal bg-white justify-center">
      <div className="photo">
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className="px-8 pt-8">
        <div className="text-gray-400 mb-4 flex justify-between items-center">
          {user.data?.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`} className="hover:underline">
              @{photo.author}
            </Link>
          )}

          <span className="block text-inherit">{photo.acessos}</span>
        </div>
        <Link to={`/photo/${photo.id}`}>
          <h1 className="title text-5xl mb-4">{photo.title}</h1>
        </Link>
        <ul className="flex items-center gap-8 font-bold text-lg">
          <li className="attribute">{photo.peso} kg</li>
          <li className="attribute">
            {photo.idade > 1 ? photo.idade + " anos" : photo.idade + " ano"}
          </li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}
