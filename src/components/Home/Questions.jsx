// React
import { useState } from "react";
// MUI
import {
  Box,
  Container,
  Paper,
  Tab,
  Tabs,
  Typography,
  styled,
  Stack,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// Components
import Explanation from "./Explanation";
// Utils
import { questions } from "../../utils/questions";

const Paragraph = styled(Typography)(({ theme }) => ({
  marginTop: "0.75rem",
  ...theme.typography.body1,
  color: theme.palette.mode === "light" ? theme.palette.light.main : theme.palette.light.contrastText,
}));

const QuestionsTab = styled(Tabs)(({ theme }) => ({
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.mode === "dark" && theme.palette.border.light,
  "& button": {
    textTransform: "capitalize",
  },
  "& button.Mui-selected": {
    color: theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  marginBlock: 40,
  display: "flex",
  alignItems: "flex-start",
  textAlign: "start",
  gap: "1.5rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Questions = () => {
  const [activeTopic, setActiveTopic] = useState(questions[0].id);
  const [activeExplanation, setActiveExplanation] = useState(false);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const onSelectTab = (_, newValue) => {
    setActiveTopic(newValue);
    setActiveExplanation(false);
  };

  const onSelect = (event) => {
    setActiveTopic(event.target.value);
    setActiveExplanation(false);
  };

  const onToggleExplanation = (panel) => (_, isExpanded) => {
    setActiveExplanation(isExpanded ? panel : false);
  };

  const renderSelectItems = questions.map((question) => (
    <MenuItem id={question.id} key={question.id} value={question.id}>
      {question.topic}
    </MenuItem>
  ));

  const renderTabItems = questions.map((question) => <Tab label={question.topic} id={question.id} key={question.id} />);

  const renderExplanations = questions[activeTopic].instruction.map((item, index) => (
    <Explanation
      {...item}
      key={item.title}
      isExpanded={activeExplanation}
      onToggleExplanation={onToggleExplanation}
      id={index}
    />
  ));

  return (
    <Container maxWidth="xl">
      <Box paddingBlock={6} textAlign="center">
        <Typography component="h2" variant="h4" fontWeight="medium">
          Frequently Asked Questions
        </Typography>
        <Paragraph component="p">
          We're always super happy to answer all your questions about our services, but you can also check for an answer
          here...
        </Paragraph>
        <ContentWrapper>
          {matches ? (
            <FormControl fullWidth>
              <InputLabel id="select-topic">Select</InputLabel>
              <Select id="select-topic" label="Select" value={activeTopic} onChange={onSelect}>
                {renderSelectItems}
              </Select>
            </FormControl>
          ) : (
            <Paper variant="outlined">
              <QuestionsTab
                orientation="vertical"
                aria-label="Questions tab"
                value={activeTopic}
                onChange={onSelectTab}
                TabIndicatorProps={{ sx: { backgroundColor: "primary.light" } }}
              >
                {renderTabItems}
              </QuestionsTab>
            </Paper>
          )}
          <Stack width="100%">{renderExplanations}</Stack>
        </ContentWrapper>
      </Box>
    </Container>
  );
};

export default Questions;
