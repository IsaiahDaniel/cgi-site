import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="containe">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
