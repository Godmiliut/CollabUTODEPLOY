import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage"

export default function AppContainer(){
return(
<AuthContextProvider>
<App/>
</AuthContextProvider>

)
}

function App() {
const {user} = useAuthContext
  return (
    <div className="App">
      <React.Fragment>
        {
          <BrowserRouter>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegistrationPage/>} />
                <Route path = "/profile" element = {<ProfilePage/>}/>
              </Routes>
            </main>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}
