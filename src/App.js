import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import SectionFirstComponent from "./components/SectionContent/SectionFirst/SectionFirstComponent";
function App() {
  return (
    <div className="App">
      <main className="main_wrapper"></main>
      <HeaderComponent />
      <SectionFirstComponent/>
    </div>
  );
}

export default App;
