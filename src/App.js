import { Toaster } from "react-hot-toast";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="">
        <Toaster position="top-center" reverseOrder={true} />
      </div>
      <Header />
      <Main className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
