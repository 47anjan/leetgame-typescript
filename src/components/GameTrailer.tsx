import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls />;
};
export default GameTrailer;
