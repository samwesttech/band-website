import React from "react";
import { bandInfo } from "../assets/bandInfo";
import { SocialStyled } from "../styles";

const Social = () => {
  return (
    <SocialStyled>
      <a href={bandInfo.social.facebook} class="fa fa-facebook"></a>
      <a href={bandInfo.social.instagram} class="fa fa-instagram"></a>
      <a href={bandInfo.social.twitter} class="fa fa-twitter"></a>
      <a href={bandInfo.social.youtube} class="fa fa-youtube"></a>
      <a href={bandInfo.social.spotify} class="fa fa-spotify"></a>
      <a href={bandInfo.social.appleMusic} class="fa fa-apple"></a>
      <a href={bandInfo.social.soundcloud} class="fa fa-soundcloud"></a>
      <a href={bandInfo.social.email} class="fa fa-envelope"></a>
    </SocialStyled>
  );
};

export default Social;
