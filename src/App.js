import "./App.css";
import item from "./services";
import Card from "./components/Card";
import Header from "./components/header components/Header"
import Landing from "./components/Landing";
import Footer from "./components/footer components/Footer";
import Login from "./components/login components/Login"

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Login />
      <div className="container">
        {item.map((createCard) => (
          <Card
            key={createCard.key}
            title={createCard.title}
            img={createCard.img}
            price={createCard.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
