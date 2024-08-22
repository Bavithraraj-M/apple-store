import React from 'react';
import { Typography, Box, Link as MuiLink } from '@mui/material';
import { Link } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        marginTop: '2rem',
      }}
    >
       <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: "0 15rem 0 15rem"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem' }}>
          ‡No Cost EMI is available with the purchase of an eligible product made using
          qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '0.5rem' }}>
          Representative example: Based on a 6-month tenure. ₹79600.00 total cost includes 15.99% p.a. and No Cost EMI savings of ₹3582.00, paid over 6 months as six monthly payments of ₹13267.00.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
          ◊Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank, and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies.{' '}
          <Link href="#" color="inherit">
            Click here
          </Link>{' '}
          to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback. To receive this offer, purchase must be charged to a single eligible card.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap="1rem" marginTop="1rem">
        <MuiLink href="#" underline="hover">
          Privacy Policy
        </MuiLink>
        <MuiLink href="#" underline="hover">
          Terms of Use
        </MuiLink>
        <MuiLink href="#" underline="hover">
          Contact Us
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;
