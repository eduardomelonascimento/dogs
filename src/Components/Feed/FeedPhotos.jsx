import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { GetPhotos } from "../../services/api";
import LoadingBone from "../Loading/LoadingBone";
import FeedPhotoItem from "./FeedPhotoItem";

export default function FeedPhotos({ setModalPhoto, page, setInfinite, total, user }) {
  const req = useFetch();
  const { pathname } = useLocation();

  useEffect(() => {
    async function getPhotos() {
      const { url, options } = GetPhotos(page, total, pathname === "/" ? 0 : user);
      const { json } = await req.request(url, options);
      if (json.length !== total) {
        setInfinite(false);
      }
    }
    getPhotos();
  }, [page, setInfinite]);

  if (req.loading) return <LoadingBone />;
  return (
    <>
      <ul className="grid grid-cols-2 tablet:grid-cols-3 gap-2 tablet:gap-3 max-w-screen-large-tablet mb-3">
        {req.data?.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    </>
  );
}
