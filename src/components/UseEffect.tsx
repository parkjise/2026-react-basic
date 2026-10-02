import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffect = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("데이터를 불러오지 못했습니다");
        setLoading(false);
      }
    };

    return () => {};
  }, []);
  if (loading) return <p>불러오는중</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default UseEffect;
