import { asyncAwait } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/Order.js";

export const placeOrder = asyncAwait(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    shippingCharges,
    totalAmount,
    notes,
  } = req.body;

  const user = req.user._id;

  const orderOption = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    shippingCharges,
    totalAmount,
    notes,
    user,
  };

  await Order.create(orderOption);
  res.status(201).json({
    success: true,
    message:
      "Your order has been successfully placed, you'll receive a call from our delivery driver. Thank you!",
  });
});
