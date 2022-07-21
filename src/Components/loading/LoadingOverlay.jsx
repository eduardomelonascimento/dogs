import { LoadingSpinner } from "./loadingspinner";
import "./styles.css";

export default function LoadingOverlay() {
  return (
    <div className="overlay">
      <LoadingSpinner height={"100px"} width="100px" />
    </div>
  );
}
