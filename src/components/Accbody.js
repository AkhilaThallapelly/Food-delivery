const Accbody = ({ accdata }) => {
  console.log(accdata);
  return (
    <div className="flex items-start bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      {/* Image */}
      {accdata.imageId && (
        <img
          className="w-24 h-24 object-cover rounded-lg mr-4"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${accdata.imageId}`}
          
        />
      )}

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-1">{accdata.name}</h3>
        <p className="text-gray-800 font-medium">
          ₹{(accdata.price || accdata.defaultPrice) / 100}
        </p>
        <p className="text-gray-600 mb-2 text-sm">{accdata.description}</p>
        
      </div>
    </div>
  );
};

export default Accbody;
