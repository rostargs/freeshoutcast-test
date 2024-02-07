// MUI
import { Box, Container, Stack, Typography, styled } from "@mui/material";
// Router
import { Link } from "react-router-dom";

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  marginTop: "auto",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.light.secondary,
  ...theme.typography.body2,
  borderBottom: `1px dotted ${theme.palette.light.secondary}`,
  textAlign: "center",
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <Stack alignItems="center" paddingTop={2} paddingBottom={1} color="light.secondary" textAlign="center">
          <Typography component="h5" variant="body2">
            Copyrights © 2008-2024 All Rights Reserved by FastCast DWC-LLC
          </Typography>
          <Stack direction="row" justifyContent="center" component="nav">
            <FooterLink to="#" aria-label="Terms of Service">
              Terms of Service
            </FooterLink>
            <pre> / </pre>
            <FooterLink to="#" aria-label="Privacy Policy">
              Privacy Policy
            </FooterLink>
          </Stack>
        </Stack>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
