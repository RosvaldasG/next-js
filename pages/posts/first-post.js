import React from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

const Test = (props) => {
  const products = props.products;
  return (
    <div>
      {products.map((n) => {
        return (
          <div>{`vakaip galima su axios ${n.id} ${n.title} ${n.brand}`}</div>
        );
      })}

      <Link href="/">Back</Link>
    </div>
  );
};

export default Test;

export async function getServerSideProps(contex) {
  // console.log("contex", contex);

  const response = await axios.get("https://dummyjson.com/products");

  return {
    props: {
      products: response.data.products,
    },
  };
}
