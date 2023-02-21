import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";

export type TData = {
    id: string;
    img_product: string;
    name: string;
    price: string;
    quantity: string;
};

function Product() {
    const data = useQuery<TData[]>({
        queryKey: ["data"],
        queryFn: async () => {
            const data = await fetch("https://designerportal.net/testreact/listProducts.php", {
                method: "GET",
                mode: "cors",
            }).then((res) => {
                return res.json();
            });

            return data;
        },
    });

    const navigate = useNavigate();

    const handleNavigate = (id: string) => {
        navigate(`/product/${id}`);
    };

    if (data.isLoading) {
        return (
            <div className="w-100">
                <p className="text-info text-center" style={{ fontSize: "50px" }}>
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className="container d-flex flex-wrap gap-4">
            {data !== undefined ? (
                data.data?.map((e) => {
                    return <Card key={e.id} data={e} nav={handleNavigate} />;
                })
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Product;
