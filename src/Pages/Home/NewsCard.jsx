import { Link } from "react-router-dom";
import banner0 from '../../assets/banner0.png';


const NewsCard = ({news}) => {
    const {title, image_url, details, _id} = news;
    return (
        <div className="card bg-base-100  mb-16">
            <img className="mb-5" src={banner0} alt="" />
            <h2 className="card-title mb-5">{title}</h2>
  <figure>
  
    <img 
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    
    
    
        {
            details.length > 200 ? <p>{details.slice(0,200)} 
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold"> 
            Read More...</Link> </p>
            :
            <p>{details}</p>
        }


    
  </div>
  
</div>
    );
};

export default NewsCard;