import { Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
  pokemons: number[]
}

export const FavoritesList = ({pokemons}: Props) => {

  const router = useRouter();

  const handleInspectPokemon = (id: number) => {
    router.push(`/pokemon/${id}`)
  }

  return ( 
    <Grid.Container gap={2} direction='row' justify="flex-start">
      {
        pokemons.map(id => (
          <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable css={{padding: 10}} onPress={() => handleInspectPokemon(id)}>
              <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt='pokemon' width={'100%'} height={140}/>
            </Card>
          </Grid>
        ))
      }
    </Grid.Container>
  );
}
 