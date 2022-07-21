import classNames from "classnames";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { PasswordReset } from "../../services/api";
import Head from "../Head";
import Input from "../Input";
import LoadingSpinner from "../Loading/LoadingSpinner";

export default function PasswordResetForm() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const req = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key && login) {
      setKey(key);
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PasswordReset({
        login,
        key,
        password: password.value,
      });
      const { response } = await req.request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="anime-fade-left flex flex-col justify-center w-full -mt-24 max-w-md tablet:max-w-sm tablet:w-auto m-4">
      <Head title={"Redefinir senha"} description="Redefina a senha da sua conta no Dogs." />
      <h1 className="title text-3xl">Nova senha</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <Input
          type={"password"}
          id={"password"}
          label="Nova senha"
          error={password.error || req.error}
          onChange={password.onChange}
          onBlur={password.onBlur}
          value={password.value}
        />
        <div
          className={classNames("w-[77px]", {
            "flex items-center justify-center": req.loading,
          })}
        >
          {req.loading ? (
            <LoadingSpinner height={20} width={20} />
          ) : (
            <button>Redefinir</button>
          )}
        </div>
      </form>
    </section>
  );
}
