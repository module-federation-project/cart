import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Cart = () => {
  let removeFromCart;
  let cart;

  try {
    const store = require("shell/store");
    const storeInstance = store.useStore();
    removeFromCart = storeInstance.removeFromCart;
    cart = storeInstance.cart;
  } catch (e) {
    console.error("shell/store module not found");
  }

  return (
    <div>
      <Typography mb={4} variant="h6">
        This is your cart micro.
      </Typography>
      {cart && cart.length > 0 ? (
        <Stack spacing={4}>
          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{ display: "flex", alignItems: "center", p: 2 }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography color="text.secondary">
                  {item.quantity} x {item.price}
                </Typography>
                <Typography color="text.secondary">
                  {item.price * item.quantity}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFromCart({ id: item.id })}
              >
                Remove
              </Button>
            </Card>
          ))}
        </Stack>
      ) : (
        <Typography mb={4} variant="h7">
          Your cart is empty!
        </Typography>
      )}
    </div>
  );
};

export default Cart;
