import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./comp/NavBar";
import TesteUm from "./pages/TesteUm";
import TesteDois from "./pages/TesteDuis";
import TesteTres from "./pages/TesteTres";
import TesteQuatro from "./pages/TesteQuatro";
import TesteCinco from "./pages/TesteCinco";
import TesteSeis from "./pages/TesteSeis";

function Layout() {
  const location = useLocation();
  
  // Define quais rotas devem ocultar a NavBar
  const hideNavBarRoutes = ["/","/testeDuis", "/testeTres", "/testeQuatro", "/testeCinco", "/testeSeis"];


  return (
    <>
      {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<TesteUm />} />
        <Route path="/testeDuis" element={<TesteDois />} />
        <Route path="/testeTres" element={<TesteTres />} />
        <Route path="/testeQuatro" element={<TesteQuatro />} />
        <Route path="/testeCinco" element={<TesteCinco />} />
        <Route path="/testeSeis" element={<TesteSeis />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;