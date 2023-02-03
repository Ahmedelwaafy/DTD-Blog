import "./Sass/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Suspense, lazy } from "react";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import { MainLoader, PinLoader } from "./utilities/Loaders";
const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyAddEditPost = lazy(() => import("./pages/AddEditPost"));
const LazyCategoryPage = lazy(() => import("./pages/CategoryPage"));
const LazySinglePostPage = lazy(() => import("./pages/SinglePostPage"));

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<MainLoader />}>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="/categories/:CategoryName"
            element={
              <Suspense fallback={<MainLoader />}>
                <LazyCategoryPage />
              </Suspense>
            }
          />
          <Route
            path="/posts/:Post"
            element={
              <Suspense fallback={<MainLoader />}>
                <LazySinglePostPage />
              </Suspense>
            }
          />
          <Route
            path="/write"
            element={
              <Suspense fallback={<PinLoader />}>
                <LazyAddEditPost />
              </Suspense>
            }
          />
          <Route
            path="/update/:post"
            element={
              <Suspense fallback={<PinLoader />}>
                <LazyAddEditPost />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
