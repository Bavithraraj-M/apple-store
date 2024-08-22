import Typography from "@mui/material/Typography";
import PasswordIcon from '@mui/icons-material/Password';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import BuildIcon from '@mui/icons-material/Build';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CardMedia from "@mui/material/CardMedia";
import applecareplusimage from 'images/applecare+.png'


export default function Support() {
    const imgUrl: String ="./applecare+.png"
    return <>
    <Box display="flex" flexDirection="column" alignItems={"center"} justifyContent={"center"} gap="5rem">
        <Typography variant="h2" fontWeight="bold" textAlign="center" margin="2rem 0 2rem 0">
            Apple Support
        </Typography>
        <Box  display="flex" gap="5rem"  >
        <Card
           
            sx={{
              width: 300,
              marginBottom: "20px",
              borderRadius: "1rem",
              transition: "transform .7s ease, box-shadow .3s ease",
              '&:hover': {
                transform: 'scale(1.05)',
                cursor: "pointer"
              },
            }}
          >
            <CardContent sx={{ alignItems:"center", display: "flex", flexDirection:"column", justifyContent: "center", gap:".5rem" }}>
                <PasswordIcon></PasswordIcon>
                <Link href="#" underline="hover">
                    {'Forgot AppleIDPassword'}
                </Link>
            </CardContent>
        </Card>
        <Card
           
           sx={{
             width: 300,
             marginBottom: "20px",
             borderRadius: "1rem",
             transition: "transform .7s ease, box-shadow .3s ease",
             '&:hover': {
               transform: 'scale(1.05)',
               cursor: "pointer"
             },
           }}
         >
           <CardContent sx={{ alignItems:"center", display: "flex", flexDirection:"column", justifyContent: "center", gap:".5rem" }}>
               <BuildIcon></BuildIcon>
               <Link href="#" underline="hover">
                   {'Apple Repair'}
               </Link>
           </CardContent>
       </Card>
       <Card
           
           sx={{
             width: 300,
             marginBottom: "20px",
             borderRadius: "1rem",
             transition: "transform .7s ease, box-shadow .3s ease",
             '&:hover': {
               transform: 'scale(1.05)',
               cursor: "pointer"
             },
           }}
         >
           <CardContent sx={{ alignItems:"center", display: "flex", flexDirection:"column", justifyContent: "center", gap:".5rem" }}>
               <ReceiptIcon></ReceiptIcon>
               <Link href="#" underline="hover">
                   {'Billing and Subscription'}
               </Link>
           </CardContent>
       </Card>
       </Box>
       <Card
            sx={{
              maxWidth: 500,
              marginBottom: "20px",
              borderRadius: "1rem",
              transition: "transform .7s ease, box-shadow .3s ease",
              '&:hover': {
                transform: 'scale(1.05)',
                cursor: "pointer"
              },
            }}
          >
            <CardContent sx={{ marginTop: "1rem"}}>
              <Typography gutterBottom variant="h2" component="div" alignItems={"center"}>
                Apple Care +
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
              Get unlimited repairs for accidental damage protection, priority access to Apple experts, and more.
              </Typography>
              <Link href="#" underline="hover">
                   {'Learn more'}
               </Link>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image={"/images/applecare+.png"}
            />
        </Card>
        </Box>
    </>
}