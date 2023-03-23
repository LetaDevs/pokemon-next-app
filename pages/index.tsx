import { Grid } from "@nextui-org/react";
import { GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { pokeApi } from "@/api";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({pokemons}: Props) {


  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(p => (
          <PokemonCard key={p.id} pokemon={p}/>
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons = res.data.results.map((r, i) => ({...r, id: i+1, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`}))

  return {
    props: {
      pokemons
    }
  }
}