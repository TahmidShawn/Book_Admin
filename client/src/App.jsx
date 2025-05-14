import Root from "./layout/Root";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
