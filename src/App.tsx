import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/404/Error";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import GlobalStyle from "./GlobalStyle";
import { Fragment } from "react";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </UserProvider>
      </Router>
    </Fragment>
  );
}

export default App;
