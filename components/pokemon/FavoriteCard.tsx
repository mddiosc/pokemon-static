import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface FavoriteCardProps {
  id: number;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ id }) => {
  const { push } = useRouter();

  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
        onClick={() => push(`/pokemon/${id}`)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
