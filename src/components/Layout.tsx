import { Outlet, NavLink } from "react-router";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app-layout">
      <header>
        <nav>
          <NavLink to="/" end>Головна</NavLink>
          <NavLink to="/models">Модельний ряд</NavLink>
          <NavLink to="/test-drive">Тест-драйв</NavLink>
          <NavLink to="/service">Сервіс</NavLink>
        </nav>
      </header>
      <main className="content">
        {/* Сюди будуть вставлятися дочірні компоненти */}
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2026 Наш Автосалон. Усі права захищено.</p>
      </footer>
    </div>
  );
}
