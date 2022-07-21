import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { PasswordLost } from "../../services/api";
import Head from "../Head";
import Input from "../Input";
import { LoadingSpinner } from "../Loading/LoadingSpinner";

export default function PasswordLostForm() {
  const login = useForm();
  const req = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PasswordLost({
        login: login.value,
        url: location.href.replace("lost", "reset"),
      });
      await req.request(url, options);
    }
  }

  return (
    <section className="anime-fade-left flex flex-col justify-center w-full -mt-24 max-w-md tablet:max-w-sm tablet:w-auto m-4">
      <Head title={"Esqueceu a senha"} description="Recupere a senha da sua conta no Dogs." />
      {req.data ? (
        <p>
          {req.data} Em alguns minutos você receberá no seu email um link para
          recuperar a sua conta.
        </p>
      ) : (
        <>
          <h1 className="title text-3xl">Perdeu a senha?</h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <Input
              type={"text"}
              id={"login"}
              label={"Email / Usuário"}
              error={login.error || req.error}
              onChange={login.onChange}
              value={login.value}
              onBlur={login.onBlur}
            />
            <div className="w-[77px] flex items-center justify-center">
              {req.loading ? (
                <LoadingSpinner height={20} width={20} />
              ) : (
                <button>Enviar</button>
              )}
            </div>
          </form>
        </>
      )}
    </section>
  );
}
