import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Divider } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useBag } from '../context/BagContext';

export default function Bag() {
  const { bagItems, increaseQuantity, decreaseQuantity, removeFromBag } = useBag();

  const totalPrice = bagItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box display="flex" padding="2rem" height="80vh">
      <Box flex={2} overflow="auto" marginRight="2rem">
        <Typography variant="h3"  gutterBottom>
          Your Bag
        </Typography>

        {bagItems.length === 0 ? (
          <Typography variant="h6" color="text.secondary" align="center" margin="2rem">
            Your bag is empty.
          </Typography>
        ) : (
          <Box display="flex" flexDirection="column" gap="2rem">
            {bagItems.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '1.5rem',
                  boxShadow: 3,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 300, objectFit: 'cover' }}
                  image={item.imgUrl}
                  alt={item.name}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                  <Typography variant="h5" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    ₹ {item.price}
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ gap: '1rem' }}>
                    <IconButton onClick={() => decreaseQuantity(item.id)} size="small">
                      <Remove />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => increaseQuantity(item.id)} size="small">
                      <Add />
                    </IconButton>
                  </Box>
                  <Divider sx={{ marginY: '1rem' }} />
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ alignSelf: 'flex-start', borderRadius: '2rem', fontSize: '12px' }}
                    onClick={() => removeFromBag(item.id)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        padding="2rem"
        marginTop="5rem"
        sx={{ position: 'sticky', top: 0 }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
          Total Price: ₹ {totalPrice.toFixed(2)}
        </Typography>
        <Button variant="contained" sx={{ fontSize: '16px', borderRadius: '2rem', padding: '1rem 2rem' }}>
          Proceed to Buy
        </Button>
      </Box>
    </Box>
  );
}
