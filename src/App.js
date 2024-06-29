import { Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import Pagenotfound from './Components/Pagenotfound'
import Register from "./Components/Register";
import SendEmail from "./Components/SendEmail";
import ChangePassword from './Components/ChangePassword'
import OTP from "./Components/OTP";
import BMI from "./Components/BMI";
import Prefence from "./Components/Prefence";
import FoodPreference from "./Components/FoodPrefence";
import AllItems from "./Components/AllItems";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodPreference/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<SendEmail />} />
        <Route path="/allitem" element={<AllItems />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
