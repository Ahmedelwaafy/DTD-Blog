import "./Sass/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import { Suspense, lazy, useState, useEffect } from "react";
import About from "./pages/About";
import AddEditPost from "./pages/AddEditPost";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import { MainLoader } from "./components/Util-Components/Loaders";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import TagPage from "./pages/TagPage";
import AuthorPage from "./pages/AuthorPage";
import Categories from "./pages/Categories";
import Pricing from "./pages/Pricing";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FutureUpdates from "./pages/FutureUpdates";
const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyCategoryPage = lazy(() => import("./pages/CategoryPage"));
const LazySinglePostPage = lazy(() => import("./pages/SinglePostPage"));



function App() {
  const navigate = useNavigate();

    const [user, setUser] = useState(null);

 useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     if (authUser) {
       setUser(authUser);
     } else {
       setUser(null);
     }
   });

  
 }, []);

 const handleLogout = () => {
   signOut(auth).then(() => {
     setUser(null);
     navigate("/signin");
   });
 };
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout user={user} handleLogout={handleLogout} />}>
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
          <Route path="/tags/:tagName" element={<TagPage />} />
          <Route path="/authors/:authorName" element={<AuthorPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/trending" element={<TrendingPostsPage />} />
          <Route
            path="/posts/:id"
            element={
              <Suspense fallback={<MainLoader />}>
                <LazySinglePostPage user={user} />
              </Suspense>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        <Route
          path="/write"
          element={
            user ? <AddEditPost user={user} /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/update/:id"
          element={
            user ? <AddEditPost user={user} /> : <Navigate to="/signin" />
          }
        />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/FutureUpdates" element={<FutureUpdates />} />
      </Routes>
    </>
  );
}

export default App;

