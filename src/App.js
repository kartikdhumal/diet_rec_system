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
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import YourPlan from "./Components/YourPlan";
import Daily from "./Components/Daily";
import Monthly from "./Components/Monthly";
import Weekly from "./Components/Weekly";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<SendEmail />} />
        <Route path="/allitem" element={<AllItems />} />
        <Route path="/prefence" element={<YourPlan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/BMI" element={<BMI/>}/>
        <Route path="/daily" element={<Daily/>}/>
        <Route path="/monthly" element={<Monthly/>}/>
        <Route path="/weekly" element={<Weekly/>}/>
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
