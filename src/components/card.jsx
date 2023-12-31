const Card = ({ crop, handleCropClick }) => {
  return (
    <div key={crop.id} className="card" onClick={() => handleCropClick(crop)}>
      <img
        src={crop.thumbnails[0].image}
        alt={crop.crop_name}
        className="card_img"
      />
      <div className="card_content">
        <p>{crop.crop_name}</p>
      </div>
    </div>
  );
};

export default Card;
