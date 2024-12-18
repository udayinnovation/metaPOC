import React, { useState } from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import "./PictureGallery.css";

const pictures = [
  {
    id: 1,
    title: "Beautiful Sunset",
    image: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Sunset",
  },
  {
    id: 2,
    title: "Majestic Mountains",
    image: "https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Mountains",
  },
  {
    id: 3,
    title: "Calm Beach",
    image: "https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Beach",
  },
];

const PictureGallery = () => {
  const [currentPicture, setCurrentPicture] = useState(pictures[0]);

  return (
    <div>
      <h2>{currentPicture.title}</h2>
      <img
        src={currentPicture.image}
        alt={currentPicture.title}
        style={{ width: "80%", maxWidth: "600px", marginBottom: "20px" }}
      />
      <div>
        <button
          onClick={() =>
            setCurrentPicture(
              pictures[(currentPicture.id % pictures.length)]
            )
          }
        >
          Next Picture
        </button>
      </div>
      <div className="share-buttons">
        <h3>Share this picture:</h3>
        <FacebookShareButton url={currentPicture.image} quote={currentPicture.title}>
          Share on Facebook
        </FacebookShareButton>
        <TwitterShareButton url={currentPicture.image} title={currentPicture.title}>
          Share on Twitter
        </TwitterShareButton>
        <WhatsappShareButton url={currentPicture.image} title={currentPicture.title}>
          Share on WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default PictureGallery;
