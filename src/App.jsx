import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestWorks from "./Components/LatestWorks";
import store from "./Redux/store";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen font-nunito transition-colors duration-300 ${
        theme === "dark" ? "bg-[#111] text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="homeId"
    >
      <Header />
      <Body />
      <LatestWorks />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
