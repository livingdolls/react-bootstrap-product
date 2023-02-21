import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Rupiah from "../components/Rupiah";
import { TData } from "./Poduct";

export const ProductDetail = () => {
    const { id } = useParams();

    const data = useQuery<TData>({
        queryKey: ["product-id", id],
        queryFn: async () => {
            const data = await fetch(
                `https://designerportal.net/testreact/getProduct.php?product_id=${id}`,
                {
                    method: "GET",
                    mode: "cors",
                }
            ).then((res) => {
                return res.json();
            });

            return data;
        },
    });

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
        <div className="d-flex w-100 gap-1 " style={{ marginTop: "30px" }}>
            <div className="border">
                <img src={data.data?.img_product} />
            </div>
            <div className="w-100">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p className="my-auto">Name Product</p>
                        <p className="my-auto">{data.data?.name}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p className="my-auto">Price</p>
                        <p className="my-auto">${data.data?.price}</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Quantity
                        <p className="my-auto">{data.data?.quantity}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
