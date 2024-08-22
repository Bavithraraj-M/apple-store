import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';

const Home = () => {
  const items = [
    { name: 'iPhone', link: '/iPhone' , imgSrc: "/images/homeImages/iphone.png"},
    { name: 'iPad', link: '/iPad' ,imgSrc: "/images/homeImages/ipad.png"},
    { name: 'Mac', link: '/mac' , imgSrc: "/images/homeImages/mac.png"},
    { name: 'Watch', link: '/watch' , imgSrc: "/images/homeImages/applewatch.png"},
  ];

  return (
    <>
      <Typography variant="h3" style={{ margin: "4rem 1rem 4rem" }}>
        Apple Store. <Typography variant="h3" style={{ color: "gray" }}> The best way to buy the <br /> products you love.</Typography>
      </Typography>
      
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="1rem 2rem"
      >
        <Box display="flex" gap="2rem" flexWrap="wrap" justifyContent="center">
          {items.map((item) => (
            <Card
              key={item.name}
              sx={{
                maxWidth: 345,
                borderRadius: '1rem',
                boxShadow: 3,
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 5,
                },
              }}
            >
              <CardActionArea component={Link} to={item.link}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imgSrc}
                  alt={item.name}
                />
                <Box padding="1rem">
                  <Typography variant="h5" align="center">
                    {item.name}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="black"
        color="white"
        padding="1rem 0"
        gap="1rem"
        marginTop="5rem"
      >
        <Typography variant="h5">iPhone 15 Pro</Typography>
      </Box>
      <Box
        component="img"
        src={"/images/homeImages/titanium.png"}
        alt="Titanium"
        sx={{ width: "100%", display: "block" }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="black"
        color="white"
        padding="1rem 0"
      >
      <Button component={Link} to={'/iPhone'} variant="contained" sx={{ borderRadius: "2rem" }}>
                  Buy iPhone
        </Button>
        </Box>
        
    </>
  );
};

export default Home;
