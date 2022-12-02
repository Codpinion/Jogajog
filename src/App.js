import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import SinglePost from "./Components/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='post/:postId' element={<SinglePost />} />
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
