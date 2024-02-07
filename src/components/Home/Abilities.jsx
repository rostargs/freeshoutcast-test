// MUI
import { Container, Grid } from "@mui/material";
// Utils
import { abilitiesList } from "../../utils/abilitiesList";
// Components
import AbilityItem from "./AbilityItem";

const Abilities = () => {
  return (
    <Container maxWidth="xl">
      <Grid container paddingBlock={10} spacing={3}>
        {abilitiesList.map((item) => (
          <Grid item xl={4} md={6} xs={12} key={item.title}>
            <AbilityItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Abilities;
