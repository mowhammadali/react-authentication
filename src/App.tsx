import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
};

export default App;
