import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  async function fetchDataProducts() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`
      );

      const data = await response.json();

      setProducts([...products, ...data.products]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDataProducts(page);
  }, [page]);

  useEffect(() => {
    if (products.length >= 50) {
      setDisableButton(true);
    }
  }, [products]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (errMessage) {
    return <h3>{errMessage}</h3>;
  }

  return (
    <div>
      <h3 className="text-center text-3xl bg-sky-400 text-white">
        Load More Data
      </h3>
      <div className="containerData">
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <>
                <div className="boxProduct">
                  <img src={product.thumbnail} alt="" />
                  <span>{product.title}</span>
                </div>
              </>
            );
          })}
      </div>
      <div className="btn-more flex flex-col">
        {disableButton ? (
          <p>You has reach 50 data!!</p>
        ) : (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={disableButton}
          >
            Fetch More Product
          </button>
        )}
      </div>
    </div>
  );
}
