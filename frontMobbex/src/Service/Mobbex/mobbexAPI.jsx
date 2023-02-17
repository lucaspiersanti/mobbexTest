import React, { useState } from "react";

function App() {
  const [paymentUrl, setPaymentUrl] = useState(null);

  function handlePayment() {
    fetch("https://api.mobbex.com/p/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
        "x-access-token": "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
      },
      body: JSON.stringify({
        total: 100,
        currency: "ARS",
        description: "Mi compra",
        reference: "1234",
        webhook: "https://miwebhook.com/mobbex",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (data.result.payment.url) {
        //   window.location.href = data.result.payment.url;
        // } else {
        //   console.log("Error al obtener la URL de pago");
        // }
      })
      .catch((error) => {
        console.error("Error al procesar el pago: ", error);
      });
  }

  return (
    <div>
      <button onClick={handlePayment}>Pagar</button>
      {paymentUrl && (
        <div>
          <a href={paymentUrl}>Ir a la página de pago</a>
        </div>
      )}
    </div>
  );
}

export default App;
