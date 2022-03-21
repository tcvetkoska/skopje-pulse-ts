import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useMemo, useState } from "react";
import LoadingContainer from "../../../lib/shared/LoadingContainer";
import ErrorContainer from "../../../lib/shared/ErrorContainer";
import { getResponseState } from "../../../foundation/response/responseUtils";
import { useParams } from "react-router-dom";
import { calculateAverageByPM } from "../core/utils";
import SensorDetailsView from "./SensorDetailsView";
import { get24hSensorsByPmAndId } from "../core/api";
import { AppResponse } from "../../../foundation/response/domains";

function SensorDetailsContainer(): JSX.Element {
  const [response, setResponse] = useState<AppResponse>(getResponseState);
  const { isLoading, isError, error, data } = response;
  const { id } = useParams<string>();
  const averageData = useMemo(() => calculateAverageByPM(data), [data]);

  useEffect(() => {
    async function fetch24HSensors() {
      const response = await get24hSensorsByPmAndId(id as string);
      setResponse(response);
    }
    fetch24HSensors();
  }, [setResponse, id]);

  const shouldRenderSensors = !isLoading && !isError;
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4">Sensors: </Typography>
      {isLoading && <LoadingContainer />}
      {isError && <ErrorContainer errorMessage={error} />}
      {shouldRenderSensors && <SensorDetailsView data={averageData} />}
    </Container>
  );
}

export default SensorDetailsContainer;
