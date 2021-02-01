import React from "react";
import { bandInfo } from "../assets/bandInfo";
import { SocialStyled } from "../styles";

const Social = () => {
  return (
    <SocialStyled>
      <a href={bandInfo.social.facebook} className="fa fa-facebook"></a>
      <a href={bandInfo.social.instagram} className="fa fa-instagram"></a>
      <a href={bandInfo.social.twitter} className="fa fa-twitter"></a>
      <a href={bandInfo.social.youtube} className="fa fa-youtube"></a>
      <a href={bandInfo.social.spotify} className="fa fa-spotify"></a>
      <a href={bandInfo.social.appleMusic} className="fa fa-apple"></a>
      <a href={bandInfo.social.soundcloud} className="fa fa-soundcloud"></a>
      <a href={bandInfo.social.email} className="fa fa-envelope"></a>
    </SocialStyled>
  );
};

export default Social;
