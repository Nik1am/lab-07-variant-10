import { Link } from "react-router";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 Сторінку не знайдено</h1>
      <p>Схоже, ви перейшли за неіснуючим посиланням.</p>
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
}
