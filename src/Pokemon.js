import React, { useState } from "react";

const Pokemon = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={"container"}>
      <img src={image} alt={name} />
      <div>
        <h3>{name.toUpperCase()}</h3>
        {show === true ? (
          <div>
            <p>Type : {type}</p>
            <p>Height : {height}</p>
            <p>Weight : {weight}</p>
            <p>
              {stat1} : {bs1}
            </p>
            <p>
              {stat2} : {bs2}
            </p>
            <p>
              {stat3} : {bs3}
            </p>
            <p>
              {stat4} : {bs4}
            </p>
            <p>
              {stat5} : {bs5}
            </p>
            <p>
              {stat6} : {bs6}
            </p>
          </div>
        ) : (
          <></>
        )}
        <button className="pokeinfo" onClick={() => setShow(!show)}>
          {show === true ? "ok" : "see the details"}
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
