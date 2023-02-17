import { mobbex } from "mobbex";
import mobbexConfig from "./config";

import React from "react";

const mobbexSDK = () => {
  const createSuscription = () => {
    const checkout = {
      total: 100.2,
      currency: "ARS",
      reference: "2982-2XtPXlgSaWccqUyobuv4sEmLYMV0N6oX6MoridMw",
      description: "Descripción de la Venta",
      items: [
        {
          image:
            "https://www.mobbex.com/wp-content/uploads/2019/03/web_logo.png",
          quantity: 2,
          description: "Mi Producto",
          total: 50,
        },
        {
          image:
            "https://www.mobbex.com/wp-content/uploads/2019/03/web_logo.png",
          quantity: 1,
          description: "Mi otro producto",
          total: 50.2,
        },
      ],
      options: {
        domain: "midominio.com",
      },
      return_url: "https://mobbex.com/sale/return?session=56789",
      webhook: "https://mobbex.com/sale/webhook?user=1234",
    };

    mobbex.checkout
      .create(checkout)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const deleteSuscription = () => {
    console.log("deleteSuscription");
  };

  return (
    <div>
      <button onClick={createSuscription}>Create</button>
      <button onClick={deleteSuscription}>Delete</button>
    </div>
  );
};

export default mobbexSDK;
