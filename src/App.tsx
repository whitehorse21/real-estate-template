import "./App.css";
import FlatDetail from "./components/FlatDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<BlogDetail />}></Route>
          <Route path="/flat/:slug" element={<FlatDetail />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
