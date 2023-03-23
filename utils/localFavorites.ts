
const toggleFavorite = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if(favorites.includes(id)){
    favorites = favorites.filter(f => f !== id);
  }else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const exitsInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
}

const favoritePokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
  toggleFavorite,
  exitsInFavorites,
  favoritePokemons
}