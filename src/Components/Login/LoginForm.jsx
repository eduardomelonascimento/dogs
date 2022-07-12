import classNames from "classnames";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import Input from "../Input";
import Loading from "../loading/Loading";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const userContext = useContext(UserContext);

  function validateForm() {
    return username.validate() && password.validate();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      userContext.login(username.value, password.value);
    }
  }

  return (
    <div className="anime-fade-left m-4 flex flex-col justify-center max-w-lg flex-1">
      <h1 className="font-serif text-5xl font-bold login relative">Login</h1>
      <form onSubmit={handleSubmit} className="large-tablet:max-w-sm mt-4">
        <Input
          type={"text"}
          id="username"
          label={"Usuário"}
          value={username.value}
          onChange={username.onChange}
          error={username.error}
          placeholder="Nome de usuário ou email"
          onBlur={username.onBlur}
        />
        <Input
          type={"password"}
          id="password"
          label={"Senha"}
          value={password.value}
          onChange={password.onChange}
          error={password.error}
          placeholder="Senha"
          onBlur={password.onBlur}
        />
        <div className="w-32 h-10 flex justify-center items-center">
          <button
            className={classNames("w-full", {
              hidden: userContext.loading,
            })}
          >
            Entrar
          </button>
          {userContext.loading && <Loading height={20} width={20} />}
        </div>
        {userContext.error && (
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: userContext.error }}
          ></div>
        )}
      </form>
      <Link
        to="perdeu"
        className="text-gray-600 w-fit border-b-2 border-gray-500 my-8 leading-4"
      >
        Perdeu a senha?
      </Link>
      <h2 className="font-serif text-3xl font-bold my-6 cadastre">
        Cadastre-se
      </h2>
      <p className="mb-4">Ainda não possui conta? Cadastre-se no site.</p>
      <Link to="criar" className="button">
        Cadastro
      </Link>
    </div>
  );
}
