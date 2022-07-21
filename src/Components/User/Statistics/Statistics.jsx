import Head from "../../Head";
import useFetch from "../../../hooks/useFetch";
import { lazy, Suspense, useEffect } from "react";
import { GetStats } from "../../../services/api";
import LoadingBone from "../../Loading/LoadingBone";
import Loading from "../../Loading/Loading";
const StatisticsGraphs = lazy(() => import("./StatisticsGraphs"));

export default function Statistics() {
  const req = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GetStats(localStorage.getItem("token"));
      await req.request(url, options);
    }
    getData();
  }, []);

  if (req.loading) return <LoadingBone />;
  if (req.error)
    return <p className="text-2xl text-center mt-16">{req.error}</p>;

  if (req.data)
    return (
      <>
        <div className="anime-fade-left">
          <Head title={"Estatísticas"} description="Vejas suas estatísticas e a atividade das suas publicações no Dogs." />
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><Loading height={50} width={50}/></div>}>
            <StatisticsGraphs data={req.data} />
          </Suspense>
        </div>
      </>
    );
}
