export const sendWhatsAppOrder = ({
  phoneNumber,
  productName,
  price,
  size,
  quantity
}) => {
  const message = `
Hello EcoTote 👋

I would like to place an order.

🛍 Product: ${productName}
📏 Size: ${size}
📦 Quantity: ${quantity}
💰 Price: ₹${price}

Please let me know the next steps.
`;

  const encodedMessage = encodeURIComponent(message.trim());
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};
