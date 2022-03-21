import { CircularProgress, Container } from "@mui/material";
interface LoadingContainerProps {
  height?: string;
}
function LoadingContainer({ height = "90vh" }: LoadingContainerProps): JSX.Element {
  return (
    <Container sx={{ height: height, textAlign: "center" }}>
      <CircularProgress size="4em" />
    </Container>
  );
}

export default LoadingContainer;
