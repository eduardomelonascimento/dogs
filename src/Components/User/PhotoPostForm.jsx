import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { PostPhoto } from "../../services/api";
import Head from "../Head";
import Input from "../Input";
import { LoadingSpinner } from "../loading/loadingspinner";
import "./styles.css";

export default function PhotoPostForm() {
  const nome = useForm("username");
  const peso = useForm("number");
  const idade = useForm("number");

  const [img, setImg] = useState({});
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const req = useFetch();

  function handleImgChange([img]) {
    setImg({
      raw: img,
      preview: URL.createObjectURL(img),
    });
  }

  function validateForm() {
    return nome.validate() && peso.validate() && idade.validate() && img;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setResponse("");
    if (validateForm()) {
      const formData = new FormData();
      formData.append("img", img.raw);
      formData.append("nome", nome.value);
      formData.append("peso", peso.value);
      formData.append("idade", idade.value);
      const { url, options } = PostPhoto(
        formData,
        localStorage.getItem("token")
      );
      const { response } = await req.request(url, options);
      if (response.ok) {
        setResponse("Nova foto publicada com sucesso!");
        navigate("/account");
      }
      if (!response.ok)
        setResponse("Houve um erro inesperado, tente novamente.");
    }
  }

  return (
    <>
      <Head
        title={"Publique uma foto"}
        description="Publique uma foto no Dogs."
      />
      <form
        className={classNames("anime-fade-left post ", {
          "tablet:grid grid-cols-2 gap-4": img.preview,
        })}
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            type={"text"}
            id="nome"
            label={"Nome"}
            placeholder="Nome"
            value={nome.value}
            error={nome.error}
            onChange={nome.onChange}
            onBlur={nome.onBlur}
          />
          <Input
            type={"text"}
            id="peso"
            label={"Peso"}
            placeholder="Peso"
            value={peso.value}
            error={peso.error}
            onChange={peso.onChange}
            onBlur={peso.onBlur}
          />
          <Input
            type={"text"}
            id="idade"
            label={"Idade"}
            placeholder="Idade"
            value={idade.value}
            error={idade.error}
            onChange={idade.onChange}
            onBlur={idade.onBlur}
          />
          <div className="max-w-sm">
            <label htmlFor="img">Foto</label>
            <input
              type="file"
              id="img"
              className="max-w-sm"
              onChange={({ target }) => handleImgChange(target.files)}
            />
            {response && <p className="mt-6">{response}</p>}
            {req.loading ? (
              <div className="w-24 mx-0 my-6">
                <LoadingSpinner height={20} width={20} />
              </div>
            ) : (
              <button className="my-4">Publicar</button>
            )}
          </div>
        </div>
        {img.preview && (
          <div
            className="preview mb-4 max-w-sm tablet:block"
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </form>
    </>
  );
}
