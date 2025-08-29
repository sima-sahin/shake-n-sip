import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";

const HeartButton = ({ cocktail, size }) => {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites.favorites);
    
    // Check if the current cocktail is in favorites
    const isFavorite = favorites.some(item => item.slug === cocktail.slug);

    // HANDLE FAVORITE TOGGLE
    const handleFavoriteToggle = (e) => {
        e.stopPropagation(); // for not triggering the parent element
        if (isFavorite) {
            dispatch(removeFavorite(cocktail));
        } else {
            dispatch(addFavorite(cocktail));
        }
    };

    return (

        <button onClick={e => handleFavoriteToggle(e)} className="p-1 cursor-pointer">
            {isFavorite ? (
                <FaHeart
                    size={size}
                    className="text-[#3da7af] transition-transform duration-300 active:scale-90 hover:scale-110"
                />
            ) : (
                <FaRegHeart
                    size={size}
                    className="text-[#3da7af] transition-transform duration-300 active:scale-90 hover:scale-110"
                />
            )}
        </button>

    );
};

export default HeartButton;
