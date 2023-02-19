import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import {Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
      <Header />
        <section>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/detail/:id" element={<Detail />} />
     </Routes>
        </section>
        <Footer />
      </main>

    </div>

  );
}

export default App;
