import { useEffect, useState } from "react";
import "./App.css";
import UseEffect from "./components/UseEffect";

function App() {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("검색 API 호출", keyword);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <input type="text" value={keyword} onChange={handleChange} />
      <UseEffect />
    </>
  );
}

export default App;
