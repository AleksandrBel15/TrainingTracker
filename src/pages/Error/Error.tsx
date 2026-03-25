import { useNavigate } from "react-router-dom";
import "./Error.css";

export function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-code">404</div>
      <div className="error-message">Страница не найдена</div>
      <button className="error-button" onClick={() => navigate("/")}>
        Вернуться на главную
      </button>
    </div>
  );
}