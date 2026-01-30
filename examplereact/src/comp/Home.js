import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Banner images
// import img1 from "../Image/baner-1.png";
import img2 from "../Image/baner-2.png";
import img3 from "../Image/baner-3.png";

// Women images
import dress1 from "../Image/WOMEN DRESS1.jpg";
import dress2 from "../Image/dres1.jpg";
import dress3 from "../Image/W DRESS 2.jpg";
import dress4 from "../Image/W DRESS5.jpg";
import dress5 from "../Image/W DRESS6.jpg";

// Men images
import men1 from "../Image/men-drs-1.jpg";
import men2 from "../Image/men-drs-2.jpg";
import men3 from "../Image/men-drs-3.jpg";
import men4 from "../Image/men-drs-4.jpg";
import men5 from "../Image/men-drs-5.jpg";
import men6 from "../Image/men-drs-6.jpg";
import men7 from "../Image/men-drs-7.jpg";


/* ================= DATA ================= */

const womenswearData = [
  { id: 1, img: dress1, title: "Gown" },
  { id: 2, img: dress2, title: "Gown" },
  { id: 3, img: dress3, title: "Party Gown" },
  { id: 4, img: dress4, title: "Kurtha" },
  { id: 5, img: dress5, title: "Crop Top" },
  { id: 6, img: dress3, title: "Party Gown" },
  { id: 7, img: dress4, title: "Kurtha" },
  { id: 8, img: dress5, title: "Crop Top" },
  { id: 9, img: dress1, title: "Gown" },

];

const menswearData = [
  { id: 1, img: men1, title: "Casual Shirt" },
  { id: 2, img: men2, title: "T-Shirt" },
  { id: 3, img: men3, title: "Denim Jacket" },
  { id: 4, img: men4, title: "T-Shirt" },
  { id: 5, img: men5, title: "Hoodie" },
  { id: 6, img: men4, title: "T-Shirt" },
  { id: 7, img: men5, title: "Hoodie" },
  { id: 8, img: men6, title: "Hoodie" },
  { id: 9, img: men7, title: "Denim Jacket" },
];


/* ================= WEAR SECTION COMPONENT ================= */

const WearSection =
  ({ mainTitle, title, data, sectionId, bgColor = "", mainTitleColor = "", titleColor = "" }) => {
    const navigate = useNavigate();
    // const [message, setMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [cartItem, setCartItem] = useState(null);
    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (product) => {

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const exists = wishlist.find(item => item.id === product.id);

      let updatedWishlist;
      if (exists) {
        // Remove from wishlist if already liked
        updatedWishlist = wishlist.filter(item => item.id !== product.id);
      } else {
        // Add to wishlist
        updatedWishlist = [...wishlist, product];
      }     

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      setLikedItems((prev) => ({
        ...prev,
        [product.id]: !prev[product.id],
      }));
    };


    const addItems = (product) => {
      
      const addtocard = JSON.parse(localStorage.getItem("addtocard")) || [];

      const exists = addtocard.find(item => item.id === product.id);

      let updatedAddtocard;
      if (exists) {
      
        updatedAddtocard = addtocard
      } else {
      
        updatedAddtocard = [...addtocard, product];
      }     

      localStorage.setItem("addtocard", JSON.stringify(updatedAddtocard));
        
        setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 12500);
   
        // Remove from wishlist if already liked
        updatedAddtocard = addtocard.filter(item => item.id !== product.id);
      }    
     
    return (
      <section id={sectionId} className={`py-4 ${bgColor}`}>
        <div className="container text-center py-2">

          {showToast && (
            <div
              className="toast show position-fixed top-0 end-0 me-0 mt-3"
              style={{ width: "320px", height: "auto", zIndex: 9999 }}>

              <div className="toast-header bg-white text-dark py-2 ">
                <strong className="me-auto">Your Item Added to Cart</strong>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowToast(false)}
                ></button>
                {/* <p></p> */}
                <button
                  className="btn btn-link p-0 "
                  style={{ color: "green" }}
                  onClick={() => {
                    setShowToast(false);
                    navigate("/Addtocard"); // or /cart
                  }}
                >
                  View Cart
                </button>

              </div>
            </div>
          )}

          {mainTitle && <h1 className={`text-center mb-3 ${mainTitleColor}`}>{mainTitle}</h1>}
          <h2 className={`text-center mb-3 ${titleColor}`}>{title}</h2>

          <div className="row row-cols-5 g-4 ">
            {data.map((item) => (
              <div key={item.id} className="col d-flex">
                <div className="card western-card text-center flex-fill h-100">
                  {/* ==== */}
                  <div type="button"
                    className={`bi ${likedItems[item.id] ? "bi-heart-fill text-danger" : "bi-heart"}
                      } ms-auto me-2`}
                    role="button"
                    onClick={() => toggleLike(item)}
                    style={{ fontSize: "20px", cursor: "pointer" }}>
                  </div>
                   {/* ===== */}
                  <img
                    src={item.img}
                    className="card-img-top western-img"
                    alt={item.title}
                  />
                  <div className="card-body flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <button className="btn btn-warning mt-auto" onClick={() => addItems(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

/* ================= HOME ================= */

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">AR Fashon</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#womens">Women's Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mens">Men's Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mens">Kid's Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mens">Party Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mens">Cosmetics</a>
              </li>
            </ul>
            <button
              className="btn btn-outline-light ms-3"
              onClick={() => navigate("/wishlist")}
            >
              Wishlist ❤️
            </button>
            <button
              className="btn btn-success ms-3"
              onClick={() => navigate("/Registration")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <section>
        {/* CAROUSEL */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="banner" />
            </div> */}
            <div className="carousel-item active">
              <img src={img2} className="d-block w-100" alt="banner" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="banner" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </section>
      {/* WOMEN'S WEAR SECTION */}
      <WearSection
        mainTitle="OUR COLLECTIONS"
        title="Women's Wear"
        data={womenswearData}
        sectionId="womens"
        bgColor="bg-black"
        mainTitleColor="text-white"
        titleColor="text-white"
      />

      {/* MEN'S WEAR SECTION */}
      <WearSection
        title="Men's Wear"
        data={menswearData}
        sectionId="mens"
        bgColor="bg-black"
        mainTitleColor="text-white"
        titleColor="text-white"
      />
      {/* KID'S WEAR SECTION
      <WearSection
        title="Kid's Wear"
        data={kidswearData}
        sectionId="kids"
        bgColor="bg-black"
      /> */}
      {/* PARTY WEAR SECTION */}
      {/* <WearSection
        title="Party Wear"
        data={partywearData}
        sectionId="partywear"
        bgColor="bg-black"
      /> */}
      {/* COSMETICS SECTION */}
      {/* <WearSection
        title="Cosmetics"
        data={cosmeticsData}
        sectionId="cosmetics"
        bgColor="bg-black"
      /> */}
    </>
  );
}

// function Wishlist(){
//   return <h1>Wishlist Page</h1>;

// }


export default Home;
