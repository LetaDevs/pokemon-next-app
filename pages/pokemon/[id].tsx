import { useRouter } from "next/router"
import { Layout } from "@/components/layouts"
import { GetStaticPaths, GetStaticProps } from "next";
import { Pokemon } from '../../interfaces';
import { pokeApi } from "@/api";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({pokemon}: Props) => {

  const router = useRouter();

  console.log({pokemon})

  return (
    <Layout title='algún pokemon'>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || ''} alt={pokemon.name} width='100%' height={200}/>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1>{pokemon.name}</Text>
              <Button color='gradient' ghost> 
                Guardar en favoritos
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row" gap={0}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = [...Array(151)].map((_, i) => ({params: {id: JSON.stringify(i+1)}}));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await pokeApi.get<Pokemon>(`/pokemon/${ctx.params?.id}`);

  return {
    props: {
      pokemon: res.data
    }
  }
}

export default PokemonPage;