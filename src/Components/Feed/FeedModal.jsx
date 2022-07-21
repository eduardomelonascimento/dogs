import { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import useMedia from "../../hooks/useMedia";
import { GetPhoto } from "../../services/api";
import LoadingBone from "../Loading/LoadingBone";
import PhotoContent from "./Photo/PhotoContent";

export default function FeedModal({ photo, setModalPhoto }) {
  const mobile = useMedia("(max-width: 960px)");
  const overlay = useRef();
  const req = useFetch();
  useEffect(() => {
    async function getModalPhoto() {
      const { url, options } = GetPhoto(photo.id);
      await req.request(url, options);
    }
    getModalPhoto();
  }, [photo]);

 useEffect(() => {
    if (mobile) setModalPhoto(null);
  }, [mobile]);
 
  function handleClick(e) {
    if (e.target === overlay.current) {
      setModalPhoto(null);
    }
  }

  return (
    <div
      className="tablet:p-16 fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50 flex items-center justify-center overlay"
      onClick={handleClick}
      ref={overlay}
    >
      {req.loading && <LoadingBone />}
      {req.error && <p>Erro ao carregar conteúdo. Tente novamente</p>}
      {req.data && <PhotoContent data={req.data} loading={req.loading} />}
    </div>
  );
}
