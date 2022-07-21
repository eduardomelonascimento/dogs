import { useState } from "react";

const types = {
  name: {
    regex: /^[a-zA-Zá-úÁ-Ú' ]{5,30}$/,
    message:
      "O nome deve ter entre 5 e 30 caracteres e não pode conter números",
  },
  username: {
    regex: /^[a-zA-Zá-úÁ-Ú][a-zA-Z0-9]{0,9}/,
    message:
      "O nome deve ter entre 4 e 25 caracteres e não pode começar com números",
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
    message:
      "A senha deve conter letras maiúsculas, minúsculas, pelo menos um número e deve ter entre 8 e 15 caracteres.",
  },
  number: {
    regex: /^\d{1,2}$/,
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
  },
  cpfCnpj: {
    regex:
      /^([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})$|^([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/,
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
};

export default function useForm(type) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (!value.length) {
      setError("Preencha esse campo");
      return false;
    } else if (type && !types[type].regex.test(value.trim())) {
      types[type].message
        ? setError(types[type].message)
        : setError(`Dado inválido`);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange(value) {
    setValue(value.trimStart());
    if (error) {
      validate(value);
    }
  }

  function onBlur() {
    setValue(value.trim());
    validate(value);
  }

  return { value, setValue, error, onChange, validate, type, onBlur };
}
