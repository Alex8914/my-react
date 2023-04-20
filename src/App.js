// import Shop from "./components/shop";
// import Header from "header";
// import Footer from "footer";
import Shop from "./components/shop";
import TicTackToe from "./components/ticTackToe";

function Home() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <>
      <TicTackToe />
      <Shop />
      <Home />
    </>
  );
}

export default App;
