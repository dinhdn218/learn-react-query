import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import menu from "./constants/menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {menu.map((item, index) => {
          const Element = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Container className="my-4">
                  <Element />
                </Container>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
