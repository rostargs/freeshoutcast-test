// MUI
import { Box, Container, Typography, Stack, styled, Button } from "@mui/material";

const StartWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

const StartButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  whiteSpace: "nowrap",
  ":hover": {
    border: `1px solid  ${theme.palette.common.white}`,
  },
}));

const StartContent = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "2rem",
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    gap: "1rem",
  },
}));

const Start = () => {
  return (
    <StartWrapper>
      <Container maxWidth="xl">
        <StartContent>
          <Typography component="h2" variant="h5">
            Start your Online Radio Station with a 100% Free Radio Server
          </Typography>
          <StartButton variant="outlined" disableFocusRipple>
            Start now
          </StartButton>
        </StartContent>
      </Container>
    </StartWrapper>
  );
};

export default Start;
