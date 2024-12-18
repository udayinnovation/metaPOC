import React from "react";
import FacebookLogin from "react-facebook-login";

const PostToMeta = ({ setAccessToken }) => {
  const responseFacebook = (response) => {
    if (response.accessToken) {
      setAccessToken(response.accessToken);
    } else {
      alert("Failed to log in to Facebook.");
    }
  };

  return (
    <div>
      <h2>Login to Facebook</h2>
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default PostToMeta;
