// MUI
import { Button, FormControl, Grid, Typography, styled } from "@mui/material";
// Assets
import video from "../../assets/video.mp4";

const HeroContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 1rem",
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    padding: "100px 0 50px 0",
    alignItems: "center",
  },
}));

const HeroForm = styled(FormControl)(({ theme }) => ({
  display: "flex",
  marginTop: "1.5rem",
  flexDirection: "row",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));
const HeroInput = styled("input")(({ theme }) => ({
  width: "60%",
  fontFamily: theme.typography.fontFamily,
  paddingLeft: 10,
  border: "none",
  ":focus": {
    outline: 0,
  },
}));
const FromSubmit = styled(Button)({
  borderRadius: 0,
});

const HeroVideo = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Hero = () => {
  return (
    <Grid container sx={{ backgroundColor: "primary.light" }}>
      <HeroContent item xs={12} md={5}>
        <Typography component="h1" variant="h4">
          Get Your Free Radio Server
        </Typography>
        <Typography component="h6" variant="h6" marginTop={1}>
          Start Your Online Radio Station now
        </Typography>
        <HeroForm component="form">
          <HeroInput type="text" placeholder="Enter email" />
          <FromSubmit variant="contained" color="error">
            Start
          </FromSubmit>
        </HeroForm>
      </HeroContent>
      <HeroVideo item xs>
        <video width="100%" src={video} autoPlay loop muted />
      </HeroVideo>
    </Grid>
  );
};

export default Hero;
