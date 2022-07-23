import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState();
  const [pages, setpages] = useState([1]);
  const [infinite, setInfinite] = useState(true);
  const { data } = useContext(UserContext);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      const height = document.body.offsetHeight - window.innerHeight;
      if (scrollY > height * 0.75 && !wait && infinite) {
        setpages((pages) => [...pages, pages.length + 1]);
        wait = true;
        setTimeout(() => {
          wait = false;
        }, 1500);
      }
    }
    addEventListener("wheel", infiniteScroll);
    addEventListener("scroll", infiniteScroll);
    return () => {
      removeEventListener("scroll", infiniteScroll);
      removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          setModalPhoto={setModalPhoto}
          page={page}
          setInfinite={setInfinite}
          total={6}
          user={user ? user : data ? data.id : 0}
        />
      ))}
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {!infinite && (
        <p className="text-center text-gray-400 my-8">
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
}
