import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";

export default function LoadingOverlay() {
  return (
    <div className="overlay">
      <LoadingSpinner height={"100px"} width="100px" />
    </div>
  );
}
