import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="car"
          className="rounded-xl h-52"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center text-[#FF3811] font-semibold">
        <p className="text-xl">Price: ${price}</p>
        <Link to={`/checkout/${_id}`}>
          <BsArrowRightShort className="text-4xl"></BsArrowRightShort>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
