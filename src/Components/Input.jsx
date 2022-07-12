import classNames from "classnames";

export default function Input({ id, label, type, value, onChange, error, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        className={classNames("mb-1", { invalid: error })}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}