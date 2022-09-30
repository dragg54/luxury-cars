import Layout from "./layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./pages/Item";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/item" element={<Item />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
