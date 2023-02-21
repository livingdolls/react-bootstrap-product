import { TData } from "../pages/Poduct";

type props = {
    data: TData;
    nav: (id: string) => void;
};

export const Card = ({ data, nav }: props) => {
    return (
        <div
            onClick={() => nav(data.id)}
            className="card shadow-lg"
            role={"button"}
            style={{ width: "20rem" }}
        >
            <div className="">
                <img
                    src={data.img_product}
                    className="card-img-top"
                    alt="Card image cap"
                    height={280}
                />
            </div>
            <div className="p-2">
                <div className="flex text-center">
                    <p className="mx-auto my-auto" style={{ fontSize: "17px", fontWeight: 500 }}>
                        {data.name}
                    </p>
                    <p
                        className="mx-auto my-auto text-danger"
                        style={{ fontSize: "19px", fontWeight: 500 }}
                    >
                        ${data.price}
                    </p>
                </div>
            </div>
        </div>
    );
};
