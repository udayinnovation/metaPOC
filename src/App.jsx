import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BannerSelector from './components/bannerselector'
import PostToMeta from './components/posttometa'
import PictureGallery from './components/picturegallery'

function App() {
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Share Your Favorite Pictures</h1>
      <PictureGallery />
    </div>
    {/* <BannerSelector/> */}
    {/* <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Post a Banner on Meta</h1>
      {!accessToken ? (
        <PostToMeta setAccessToken={setAccessToken} />
      ) : (
        <>
          <BannerSelector
            onSelect={(banner) => setSelectedBanner(banner)}
            selectedBanner={selectedBanner}
          />
          {selectedBanner && (
            <div>
              <h2>Selected Banner:</h2>
              <img
                src={selectedBanner.image}
                alt={selectedBanner.title}
                style={{ width: "80%", maxWidth: "600px", margin: "20px 0" }}
              />
              <button
                onClick={() =>
                  postToMeta(selectedBanner.image, accessToken)
                }
              >
                Post to Meta
              </button>
            </div>
          )}
        </>
      )}
    </div> */}
    </>
  )
}
const postToMeta = async (bannerUrl, token) => {
  const url = "https://graph.facebook.com/v17.0/me/photos";
  const params = {
    method: "POST",
    body: JSON.stringify({
      url: bannerUrl,
      access_token: token,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, params);
    const data = await response.json();
    if (data.id) {
      alert("Banner posted successfully!");
    } else {
      alert("Failed to post the banner.");
    }
  } catch (error) {
    console.error("Error posting to Meta:", error);
    alert("Error posting to Meta.");
  }
};
export default App


