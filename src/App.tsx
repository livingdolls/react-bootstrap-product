import { Route, Routes } from "react-router-dom";
import Product from "./pages/Poduct";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
    return (
        <div className="container d-flex flex-wrap gap-4" style={{ marginTop: "20px" }}>
            <Routes>
                <Route index element={<Product />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;
