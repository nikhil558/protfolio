import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestWorks from "./Components/LatestWorks";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#111] text-white font-nunito ">
        <Header />
        <Body />
        <LatestWorks />
        <ContactSection />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
