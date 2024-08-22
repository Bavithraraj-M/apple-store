import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import storeItems from "../data/ipads.json";
import IpadDetail from "../components/IpadDetail";

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

  const handleClickOpen = (item: StoreItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" padding="2rem">
      <Typography variant="h3" style={{ margin: "0.5rem 2rem 1.5rem 2rem" }}>
        Shop iPad
      </Typography>
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
                cursor:"pointer"
              },
            }}
            onClick={() => handleClickOpen(item)}
          >
            <CardMedia
              component="img"
              height="400"
              image={item.imgUrl}
              alt={item.name}
            />
            <CardContent sx={{ display: "flex" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" paddingTop={.8}>
                ₹ {item.price}
              </Typography>
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
