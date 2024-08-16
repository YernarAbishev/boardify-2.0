import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import BoardDetailPage from "../pages/BoardDetailPage";
import CategoryPage from "../pages/CategoryPage";
import AddBoardPage from "../pages/AddBoardPage";
import EditBoardPage from "../pages/EditBoardPage";
import DeleteBoardPage from "../pages/DeleteBoardPage";
import {
    HOME_PAGE,
    SEARCH_PAGE,
    CATEGORY_PAGE,
    BOARD_DETAIL_PAGE,
    ADD_BOARD_PAGE,
    EDIT_BOARD_PAGE,
    DELETE_BOARD_PAGE,
} from "./consts";


export const routes = [
    {
        path: HOME_PAGE,
        element: HomePage
    }, 
    {
        path: SEARCH_PAGE,
        element: SearchPage
    },
    {
        path: CATEGORY_PAGE,
        element: CategoryPage
    },
    {
        path: BOARD_DETAIL_PAGE,
        element: BoardDetailPage
    },
    {
        path: ADD_BOARD_PAGE,
        element: AddBoardPage
    },
    {
        path: EDIT_BOARD_PAGE,
        element: EditBoardPage
    },
    {
        path: DELETE_BOARD_PAGE,
        element: DeleteBoardPage
    },
];