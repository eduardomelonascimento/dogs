import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { GetPhoto } from "../../../services/api";
import LoadingBone from "../../Loading/LoadingBone";
import PhotoContent from "../Photo/PhotoContent";

export default function Photo() {
  const { id } = useParams();
  const req = useFetch();

  useEffect(() => {
    const { url, options } = GetPhoto(id);
    req.request(url, options);
  }, []);

  if (req.loading) {
    return <LoadingBone />;
  }

  return (
    <section className="tablet:mt-4">
      {req.data && <PhotoContent loading={req.loading} data={req.data} />}
    </section>
  );
}
