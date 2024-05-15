import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import PostsPage from "./pages/PostsPage";
import NewPostForm from "./pages/CreatePostForm ";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewPostForm />} />
          {/* <Route path="" element={<NewPostForm />} /> */}
          <Route path="posts" element={<PostsPage />} />

          <Route path="*" element={<h4>Страница не найдена</h4>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;