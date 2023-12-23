import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import SectionFirstComponent from "./components/SectionContent/SectionFirst/SectionFirstComponent";
import SectionSecondComponent from "./components/SectionContent/SectionSecond/SectionSecondComponent";
import SectionThirdComponent from "./components/SectionContent/SectionThird/SectionThirdComponent";
import SectionFourthComponent from "./components/SectionContent/SectionFourth/SectionFourthComponent"

function App() {
  return (
    <div className="App">
      <main className="main_wrapper"></main>
      <HeaderComponent />
      <SectionFirstComponent/>
      <SectionSecondComponent/>
      <SectionThirdComponent/>
      <SectionFourthComponent/>
    </div>
  );
}

export default App;
