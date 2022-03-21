import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
interface NoDataContainerProps {
  height?: string;
}
function NoDataContainer({
  height = "90vh",
}: NoDataContainerProps): JSX.Element {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <Typography>No data.</Typography>
    </Container>
  );
}

export default NoDataContainer;
