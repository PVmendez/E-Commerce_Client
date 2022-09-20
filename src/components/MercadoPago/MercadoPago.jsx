import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FORM_ID = "payment-form";

export const MercadoPago = ({ items, totalPrice, user }) => {
  const { id } = useParams();
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    axios({
      method: "POST",
      baseURL: process.env.REACT_APP_API_BASE_URL,
      url: "/products/comprar",
      data: { data: { productId: id, totalPrice, items, user } },
    }).then((order) => {
      setPreferenceId(order.preferenceId);
    });
  }, [id, totalPrice, items, user]);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      console.log(form)
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method="GET" />;
};
