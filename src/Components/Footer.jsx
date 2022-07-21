import DogsLogo from "./Svgs/DogsLogo";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary w-full flex flex-col items-center justify-center gap-3 h-24">
        <DogsLogo color="rgb(133 77 14)" />
        <span className="text-yellow-700">
          Dogs. Alguns direitos reservados&copy;
        </span>
      </footer>
    </>
  );
}
