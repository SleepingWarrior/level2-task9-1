// ?: Styles
import "./App.css";

// ?: Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/LoginPage";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

// ?: Components
// import Card from "./components/card/Card";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import item from "./services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="card-container">
        {item.map((createCard) => (
          <Card key={createCard.key} title={createCard.title} img={createCard.img} price={createCard.price} />
        ))}
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
