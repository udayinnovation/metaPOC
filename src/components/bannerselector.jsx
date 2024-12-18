import React from "react";

const banners = [
  {
    id: 1,
    title: "Welcome Banner",
    image: "https://via.placeholder.com/1200x300/FF5733/FFFFFF?text=Welcome",
  },
  {
    id: 2,
    title: "Sale Banner",
    image: "https://via.placeholder.com/1200x300/33FF57/FFFFFF?text=Sale",
  },
  {
    id: 3,
    title: "New Arrival Banner",
    image: "https://via.placeholder.com/1200x300/3357FF/FFFFFF?text=New+Arrivals",
  },
];

const BannerSelector = ({ onSelect, selectedBanner }) => {
  return (
    <div>
      <h2>Select a Banner</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {banners.map((banner) => (
          <div
            key={banner.id}
            style={{
              border: selectedBanner?.id === banner.id ? "2px solid blue" : "1px solid gray",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => onSelect(banner)}
          >
            <img
              src={banner.image}
              alt={banner.title}
              style={{ width: "200px", height: "auto" }}
            />
            <p>{banner.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSelector;
