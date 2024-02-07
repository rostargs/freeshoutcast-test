// MUI
import { Card, CardContent, Typography, styled } from "@mui/material";

const AbilityCard = styled(Card)({
  display: "flex",
  height: "100%",
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: theme.typography.fontWeightMedium,
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.light.contrastText : theme.palette.light.main,
  fontWeight: theme.typography.fontWeightMedium,
  ...theme.typography.subtitle2,
}));

const AbilityItem = ({ image, title, info }) => {
  return (
    <AbilityCard elevation={4}>
      <CardContent sx={{ alignSelf: "start" }}>
        <img src={image} alt="Micro" style={{ width: "3rem" }} />
      </CardContent>
      <CardContent sx={{ textAlign: "start" }}>
        <CardTitle component="h6">{title}</CardTitle>
        <Paragraph component="p">{info}</Paragraph>
      </CardContent>
    </AbilityCard>
  );
};

export default AbilityItem;
