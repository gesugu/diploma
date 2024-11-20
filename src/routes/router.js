import MainPage from "../components/MainPage";
import KorzinaPage from "../components/KorzinaPage";
import KatalogPage from "../components/KatalogPage";
import FavoritesPage from "../components/FavoritesPage";
import ComparePage from "../components/ComparePage";
import Smartphones from "../components/Smartphones"
import ItemOneScreen from "../components/ItemOneScreen";

export const routes = [
    {path: '/', element: <MainPage/>},
    {path: '/korzina', element: <KorzinaPage/>},
    {path: '/katalog', element: <KatalogPage/>},
    {path: '/favorites', element: <FavoritesPage/>},
    {path: '/compare', element: <ComparePage/>},
    {path: '/smartphones', element: <Smartphones/>},
    {path: '/item/:id', element: <ItemOneScreen/>},
]