import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Head";

export default function UserProfile() {
  const { user } = useParams();
  return (
    <>
      <Head title={user} description={`Veja as fotos de ${user}`} />
      <section className="mx-2">
        <h1 className="title text-5xl tablet:text-6xl m-2">{user}</h1>
        <Feed user={user} />
      </section>
    </>
  );
}
