import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripecheckout = () => {
  return (
    <StripeCheckout>
      <button
        style={{
          display: "flex",
          marginLeft: "auto",
          backgroundColor: "#fb641b",
          color: "#fff",
          width: "250px",
          height: 51,
          borderRadius: 2,
          alignItems: "center",
          fontSize: 18,
          paddingLeft: 42,
          border: "none",
        }}
      >
        Proceed to checkout
      </button>
    </StripeCheckout>
  );
};

export default Stripecheckout;
