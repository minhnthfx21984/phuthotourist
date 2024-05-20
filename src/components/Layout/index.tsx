import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="container">
        <div className="layout-padding"></div>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
