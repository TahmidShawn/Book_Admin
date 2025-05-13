import Root from "./layout/Root";
import { Route, Routes } from "react-router";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}></Route>
        </Routes>
    );
};

export default App;
