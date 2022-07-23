import { useEffect, useState } from "react";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

export default function StatisticsGraphs({ data }) {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.length) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
      setGraph(graphData);
    }
  }, [data]);

  return (
    <>
      <section className="anime-fade-left">
        <div>
          <p>Acessos: {total}</p>
        </div>
        <div
          className={
            graph.length ? `tablet:grid tablet:grid-cols-2 gap-3` : null
          }
        >
          {graph.length ? (
            <div className=" flex justify-center items-center w-full mx-auto">
              <VictoryPie data={graph} innerRadius={65} />
            </div>
          ) : null}
          <div>
            <VictoryChart>
              <VictoryBar alignment="start" data={graph}></VictoryBar>
            </VictoryChart>
          </div>
        </div>
      </section>
    </>
  );
}
