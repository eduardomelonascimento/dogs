import "./styles.css";
import Loading from "./Loading";

export default function LoadingOverlay() {
  return (
    <div className="overlay">
      <Loading height={"100px"} width="100px" />
    </div>
  );
}
