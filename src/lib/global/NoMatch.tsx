import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

interface NoMatchProps {
  height?: string;
}
function NoMatch({ height = "100vh" }: NoMatchProps): JSX.Element {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <Typography>No Match the route.</Typography>
    </Container>
  );
}

export default NoMatch;
