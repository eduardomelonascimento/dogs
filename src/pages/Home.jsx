import { useContext } from "react";
import Feed from "../Components/Feed/Feed";
import Head from "../Components/Head";
import LoadingBone from "../Components/Loading/LoadingBone";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const { loading } = useContext(UserContext);

  if (loading) return <LoadingBone />;
  return (
    <section className="mt-4">
      <Head title={"Fotos"} description="Página inicial do Dogs." />
      <Feed user={0} />
    </section>
  );
}
