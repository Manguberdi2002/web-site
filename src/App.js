import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navbar, Login, Main, Register } from "./components";
import { getItem } from "./helpers/peristance-storage";
import ArticleService from "./service/article";
import AuthService from "./service/auth";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";
import { SingUserSuccess } from "./slice/auth";
const App = () => {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(SingUserSuccess(response.user))
    } catch (error) {
      console.log("ERROR")
    }
  };

  const getArticles = async() =>{
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if(token){
      getUser()
    }
    getArticles()
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
