import { NextPage } from "next";
import { Layout } from "../../components/layouts";
interface FavoritesPageProps {}

const FavoritesPage: NextPage<FavoritesPageProps> = () => {
  return (
    <Layout title="Pokémons - Favoritos">
      <h1>Favortios</h1>
    </Layout>
  );
};

export default FavoritesPage;
