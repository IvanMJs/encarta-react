import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner";
import { getList } from "../../services/services";
import "../countries/countries.css";

export default function Countries() {
  const [list, setList] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    return setList(nameRef.current.value);
  }

  useEffect(() => {
    setIsLoading(true);
    if (typeof list === "string" && list !== "") {
      getList(list)
        .then((items) => {
          setList(items);
          console.log(items);
        })
        .catch(() => {
          setErrorMessage("Error al carrgar"); //Poner mensaje de error en interfaz
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [list]);

  return (
    <div className="container">
      <style>{"body { background-color: white; }"}</style>
      <form className="first" onSubmit={handleSubmit}>
        <input type="text" placeholder="Country" ref={nameRef} />
        <input type="submit" />
      </form>
      <div className="second">
        <div className="title">
          <h1>Countries</h1>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div>
              {Array.isArray(list)
                ? list.map((item) => (
                    <li key={item.cca3}>
                      <h2>{item.capital}</h2>
                      <h2>{item.region}</h2>
                      <h2>{item.subregion}</h2>
                    </li>
                  ))
                : null}
            </div>
          </div>
        )}

        <Link to="/">Back</Link>
      </div>
    </div>
  );
}
