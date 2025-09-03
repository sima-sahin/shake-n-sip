import { useNavigate } from "react-router-dom";
import HeartButton from "../HeartButton";

const Container = ({ value }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cocktail/${value.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-amber-50 rounded-lg w-[200px] md:w-[250px] lg:w-[300px] h-[450px] overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 text-left shadow-md"
    >
      <img
        src={value.image}
        alt={value.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold ">{value.name}</h2>
          {/* FAVORITES BUTTON */}
          <HeartButton cocktail={value} size={20}/>
        </div>

        <p className="text-sm mt-1">{value.category}</p>
        {value.tasteProfile && (
          <p className="text-xs md:text-sm mt-2 text-[#E37C55]">
            {value.tasteProfile
              .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
              .join(", ")}
          </p>
        )}

        {/* INTRODUCTION MAX 3 LINES LONG */}
        <p className="text-[#E37C55] text-sm mt-2 line-clamp-3">
          {value.introduction}
        </p>
      </div>
    </div>
  );
};

export default Container;
