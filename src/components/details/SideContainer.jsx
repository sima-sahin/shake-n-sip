import { useNavigate } from "react-router-dom";
import HeartButton from "../HeartButton";
import { useTranslation } from "react-i18next";

const Container = ({ value }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    navigate(`/cocktail/${value.slug}`); // routing
  };

  return (
    <div
      onClick={handleClick}
      className="bg-amber-50 rounded-lg w-[80%] h-[500px] mx-auto md:w-[250px] lg:w-[300px] md:h-[350px] overflow-hidden cursor-pointer hover:scale-102 active:scale-95 transition-transform duration-300 text-left shadow-md"
    >
      <img
        src={value.image}
        alt={value.name}
        className="w-full h-80 md:h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold ">{value.name}</h2>
          {/* FAVORITES BUTTON */}
          <HeartButton cocktail={value} size={20} />
        </div>

        <p className="text-sm mt-1">{t(`categories.${value.category}`)}</p>
        {value.tasteProfile && (
          <p className="text-xs md:text-sm mt-2 text-[#E37C55]">
            {value.tasteProfile.map((item) => t(`tasteProfiles.${item}`)).join(", ")}
          </p>
        )}

        {/* INTRODUCTION MAX 3 LINES LONG */}
        <p className="text-[#E37C55] text-sm mt-2 line-clamp-3">
          {value.introduction[i18n.language]}
        </p>
      </div>
    </div>
  );
};

export default Container;
