import classNames from "classnames";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import Head from "../Head";
import Input from "../Input";
import { LoadingSpinner } from "../loading/loadingspinner";

export default function SingingForm() {
  const username = useForm("username");
  const email = useForm("email");
  const password = useForm();

  const userContext = useContext(UserContext);

  function validateForm() {
    return username.validate() && email.validate() && email.validate();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      userContext.singin(username.value, password.value, email.value);
    }
  }

  return (
    <div className="anime-fade-left m-4 flex flex-col mt-20 max-w-lg tablet:mt-4 tablet:justify-center flex-1">
      <Head title={"Singin"} description="Crie a sua conta no Dogs." />
      <h1 className="mobile:text-[2.5rem] tablet:text-5xl title">
        Cadastre-se
      </h1>
      <form onSubmit={handleSubmit} className="large-tablet:max-w-sm mt-4">
        <Input
          type={"text"}
          id="username"
          label={"Usuário"}
          placeholder="Nome de usuário"
          value={username.value}
          onChange={username.onChange}
          onBlur={username.onBlur}
          error={username.error}
        />
        <Input
          type={"email"}
          id="email"
          label={"Email"}
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          error={email.error}
        />
        <Input
          type={"password"}
          id="password"
          label={"Senha"}
          placeholder="Senha"
          onChange={password.onChange}
          onBlur={password.onBlur}
          error={password.error}
        />
        {userContext.error && (
          <p className="text-red-600">{userContext.error}.</p>
        )}
        <div className="w-32 h-10 mt-2 flex justify-center items-center">
          {userContext.loading ? (
            <LoadingSpinner height={20} width={20} />
          ) : (
            <button className={classNames("w-full", {})}>Cadastrar</button>
          )}
        </div>
      </form>
    </div>
  );
}
