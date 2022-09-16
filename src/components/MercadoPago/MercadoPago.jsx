import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

const FORM_ID = "payment-form";

export const MercadoPago = ({ items, totalPrice, user }) => {
  const { id } = useParams(); // id de producto
  const [preferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    // axios.post('/products/comprar', { productId: id } ,{data: totalPrice, items, user }).then((order) => {
    //   setPreferenceId(order.preferenceId);
    // });
  }, [id]);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method="GET" />;
};
