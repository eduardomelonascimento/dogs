import Head from "./Head";

export default function NotFound() {
  return (
   <section className="mt-8">
    <Head title={"404 - NotFound"} description="Página não encontrada."/>
      <h1 className="font-bold text-5xl mb-4 title">Erro 404</h1>
      <p className="text-4xl">Página não encontrada</p>
   </section>
  )
}

