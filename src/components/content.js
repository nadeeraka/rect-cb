import React from "react";
import { Consumer } from "../contax";
import Cards from "../components/cards";

const Content = () => (
  <Consumer>
    {value => {
      const { data } = value;

      return (
        <>
          {!data.length > 0 ? (
            <div>
              <h3 className="text-center mt-3">Looding....</h3>
              <p className="text-center">pleas wait moment</p>
            </div>
          ) : (
            ""
          )}
          {data.map(r => (
            <Cards key={r.id} data={r} />
          ))}
        </>
      );
    }}
  </Consumer>
);

export default Content;
