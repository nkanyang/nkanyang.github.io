import React from "react";
import styles from "./style.module.css";


function City({children,onClick,active}){
  const clickMe = (e)=>{
    e.preventDefault();
    onClick(children);
  };
  //console.log(active);
  return(
    <div className={active ? styles.citytagactive:styles.citytag}>
    {/* <div className={styles.citytag}> */}
      <button onClick={clickMe}>{children}</button>
    </div>
  );
}

function CityCard({onClick,active}){
  return(
    <div className={styles.container}>
      <City onClick={onClick} active={active==="Melbourne"}>Melbourne</City>
      <City onClick={onClick} active={active==="Sydney"}>Sydney</City>
      <City onClick={onClick} active={active==="Canberra"}>Canberra</City>
      <City onClick={onClick} active={active==="Brisbane"}>Brisbane</City>
      <City onClick={onClick} active={active==="Perth"}>Perth</City>
      <City onClick={onClick} active={active==="Adelaide"}>Adelaide</City>
    </div>
  );
}

export default CityCard;