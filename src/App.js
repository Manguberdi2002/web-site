import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navbar, Login, Main, Register } from "./components";
import { getItem } from "./helpers/peristance-storage";
import AuthService from "./service/auth";
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

  useEffect(() => {
    const token = getItem('token')
    if(token){
      getUser()
    }
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
