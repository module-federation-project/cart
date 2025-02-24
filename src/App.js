import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const cartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$15',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$20',
  },
];

const Cart = () => {
  return (
    <div>
      <Typography mb={4} variant="h6">
        This is your cart micro.
      </Typography>
      <Stack spacing={4}>
        {cartItems.map(item => (
          <Card
            key={item.id}
            sx={{ display: 'flex', alignItems: 'center', p: 2 }}
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="text.secondary">{item.price}</Typography>
            </CardContent>
            <Button variant="contained" color="error">
              Remove
            </Button>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Cart;
