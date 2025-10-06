const Card = ({ image, name, description, country, yieldValue }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img src={image} alt={name} className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h2 className="text-xxl font-semibold mb-2">{name}</h2>
        <p className="text-xs text-gray-400">Country: {country}</p>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <p className="text-xs text-gray-400">Yield: {yieldValue}</p>
      </div>
    </div>
  );
};

export default Card;
