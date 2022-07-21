import classNames from "classnames";
import useFetch from "../../../hooks/useFetch";
import { DeletePhoto } from "../../../services/api";
export default function PhotoDelete({ id }) {
  const req = useFetch();
  async function handleClick() {
    const { url, options } = DeletePhoto(id, localStorage.getItem("token"));
    const { response, json } = await req.request(url, options);
    if (response.ok) {
      location.reload();
    }
  }

  if (req.error)
    return <p>Erro inesperado, recarregue a página e tente novamente</p>;
  return (
    <>
      <button
        className={classNames(
          "p-1 bg-gray-100 text-inherit text-xs border hover:border-current",
          {
            "cursor-wait": req.loading,
          }
        )}
        onClick={handleClick}
        disabled={req.loading}
      >
        {req.loading ? "Carregando..." : "Excluir"}
      </button>
    </>
  );
}
