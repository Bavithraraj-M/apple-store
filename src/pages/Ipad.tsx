import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import storeItems from "../data/ipads.json";
import IpadDetail from "../components/IpadDetail";
import Button from "@mui/material/Button";
import { useBag } from '../context/BagContext';

interface StoreItem {
  id: string;
  name: string;
  price: number;
  display: string;
  camera: string;
  processor: string;
  connectivity: string;
  otherSpecs: string;
  imgUrl: string;
}

export default function Ipad() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  const { addToBag } = useBag();

  const handleClickOpen = (item: StoreItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleAddToBag = (item: StoreItem) => {
    addToBag({
      id: item.id,
      name: item.name,
      price: item.price,
      imgUrl: item.imgUrl,
      quantity: 0
    });
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" padding="2rem">
      <Box display="flex" justifyContent="space-between" style={{ margin: "1.5rem 4rem 3rem 4rem" }}>
      <Typography variant="h2" fontWeight="bold" >
        iPad
      </Typography>
      <Typography variant="h5" fontWeight="bold">
      Touch, draw and type <br />
      on one magical device.
      </Typography>
      </Box>
      <Box display="flex" margin={"4%"} gap="12rem" justifyContent="center" flexWrap="wrap">
        {storeItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              borderRadius: "1rem",
              transition: "transform 1s ease, box-shadow 0.3s ease",
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: theme.shadows[5],
                cursor: "pointer"
              },
            }}
          >
            <CardContent sx={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="400"
              image={item.imgUrl}
              alt={item.name}
              onClick={() => handleClickOpen(item)}
            />
            <CardContent sx={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
              <Box>
                <Typography variant="body1" color="text.secondary" paddingTop={0.8}>
                  ₹ {item.price}
                </Typography>
              </Box>
              <Box display="flex" gap="2rem">
                <Button 
                  variant="contained" 
                  sx={{ fontSize: "10px", borderRadius: "2rem" }}
                  onClick={() => handleAddToBag(item)}
                >
                  Add to Bag
                </Button>
                <Button variant="contained" sx={{ fontSize: "10px", borderRadius: "2rem" }}>
                  Buy
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <IpadDetail
        open={open}
        onClose={handleClose}
        item={selectedItem}
      />
    </Box>
  );
}
