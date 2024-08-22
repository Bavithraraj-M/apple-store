import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface Item {
  id: string;
  name: string;
  price: number;
  display: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  imgUrl: string;
}

interface ItemDetailModalProps {
  open: boolean;
  onClose: () => void;
  item: Item | null;
}

const AppleWatchDetails: React.FC<ItemDetailModalProps> = ({ open, onClose, item }) => {
  const theme = useTheme();

  return (
    <Dialog 
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: '1.5rem',
        },
      }}
    >
      <DialogTitle align="center">
        {item?.name}
      </DialogTitle>
      <DialogContent dividers sx={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
        {item && (
          <Box sx={{ flex: 2 }}>
            <img
              src={item.imgUrl}
              alt={item.name}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Box>
        )}
        {item && (
          <Box 
            sx={{ 
              flex: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem' // Adds space between each Typography
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', // Use theme's divider color
                paddingBottom: '0.5rem' // Space between text and the line
              }}
            >
              ₹ {item.price}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', 
                paddingBottom: '0.5rem'
              }}
            >
              {item.display}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', 
                paddingBottom: '0.5rem'
              }}
            >
              {item.feature1}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', 
                paddingBottom: '0.5rem'
              }}
            >
              {item.feature2}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', 
                paddingBottom: '0.5rem'
              }}
            >
              {item.feature3}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                borderBottom: '1px solid', 
                borderColor: 'divider', 
                paddingBottom: '0.5rem'
              }}
            >
              {item.feature4}
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AppleWatchDetails;
