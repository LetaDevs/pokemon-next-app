import { Layout } from "@/components/layouts"
import { FavoritesList, NoFavorites } from "@/components/ui";
import { useState, useEffect } from 'react';
import { localFavorites } from '@/utils';


const Favorites = () => {

  const [currentFavorites, setCurrentFavorites] = useState<number[]>([]);

  useEffect(() => {
    setCurrentFavorites(localFavorites.favoritePokemons())
  }, []);

  return ( 
    <Layout title="Pokemon-Favorites">
      {currentFavorites.length > 0 ?
        <FavoritesList pokemons={currentFavorites}/>
        :
        <NoFavorites />
      }
    </Layout>
  );
}
 
export default Favorites;
