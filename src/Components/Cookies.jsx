import React from "react";
import { TableStyled } from "../styles";

const Cookies = () => {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1>COOKIES POLICY</h1>
      <h2>INFORMATION ABOUT OUR USE OF COOKIES AND TRACKING TECHNOLOGIES</h2>
      <p>
        Our Site uses cookies and other similar technologies (as described
        below) to distinguish you from other users of our Site. This helps us to
        provide you with a good experience when you browse our Site, allows us
        to improve our Site and provide you with tailored content and
        advertising. A cookie is a small file of letters and numbers that we
        store on your browser or the hard drive of your computer if you agree.
        Cookies contain information that is transferred to your computer's hard
        drive. You can find more information about the types of cookies we use
        and the purposes for which we use them in the table below:{" "}
      </p>
      <TableStyled>
        <tr>
          <th>Type of Cookie</th>
          <th>Purpose of Cookie</th>
        </tr>
        <tr>
          <td>Strictly Necessary </td>
          <td>
            These cookies are essential in order to enable you to browse our
            Site and use its features. The information collected by these
            cookies relate to the operation of our Site, for example website
            scripting language and security tokens to maintain secure areas of
            our Site.{" "}
          </td>
        </tr>
        <tr>
          <td>Performance / Analytics </td>
          <td>
            These cookies collect anonymous information about how you use our
            Site, for example which pages you visit most often, whether you
            receive any error messages, and how you arrived at our Site.
            Information collected by these cookies is used only to improve your
            use of our Site and never to identify you. These cookies are
            sometimes placed by third-party providers of web traffic analysis
            services, such as Google Analytics.{" "}
          </td>
        </tr>
        <tr>
          <td>Functionality</td>
          <td>
            These cookies remember choices you make, for example the country you
            visit our Site from, your language and any changes you have made to
            text size or other parts of web pages that you can customise, in
            order to improve your experience of our Site and to make your visits
            more tailored and enjoyable. The information these cookies collect
            may be anonymised and cannot be used to track your browsing activity
            on other websites.
          </td>
        </tr>
        <tr>
          <td>Targeting or Advertising</td>
          <td>
            These cookies collect information about your browsing habits and
            inferred interests in order to make advertising more relevant to
            you. They are also used to limit the number of times you see an
            advert, as well as to measure the effectiveness of an advertising
            campaign. These cookies are usually placed by third-party
            advertising networks. They remember the other websites that you
            visit and this information is shared with third-party organisations,
            for example advertisers.
          </td>
        </tr>
        <tr>
          <td>Social Media</td>
          <td>
            These cookies allow you to share what you’ve been doing on our Site
            with social media organisations such as Facebook and Twitter. These
            cookies are not within our control. Please refer to the privacy
            policies of these organisations for how their cookies work.
          </td>
        </tr>
      </TableStyled>
      <p>
        Please note that third parties (including, for example, advertising
        networks and providers of external services like web traffic analysis
        services) may also use cookies, over which we have no control. These
        cookies are likely to be analytical/performance cookies or targeting
        cookies.{" "}
      </p>
      <p>We may use cookies: </p>
      <ul>
        <li>
          to collect anonymised data on users behaviour on the site. We may also
          capture what site a user has come from and what site they go to and
          also some demographic data (e.g. the user’s location) and we may use
          that data to analyse user behaviour across multiple sites;{" "}
        </li>
        <li>
          to categorise pools of users (on an anonymised basis) based on
          demographic and/or behavioural data and use this to, (1) target our
          advertising to cookie-ed users on third party websites and Universal
          Music websites, and (2) use that data to allow targeted third party
          advertising to categorised cookie-ed users either in respect of
          advertising placement UMG has bought/placed and targeted to users on
          behalf of third parties or in respect of advertising bought/placed by
          third parties and targeted to cookie pools UMG has "sold" to these
          third parties.{" "}
        </li>
      </ul>
      <p>
        Some of our Sites may use Google AdSense to publish advertisements,
        including information about your demographics and interests. When you
        view or click on an advertisement a cookie will be set to help better
        provide advertisements that may be of interest to you on this and other
        websites. You may opt-out of the use of this cookie by visiting Google’s
        Advertising and Privacy page: http://www.google.com/privacy_ads.html.{" "}
      </p>
      <p>
        Most internet browsers are automatically set up to accept cookies.
        However, if you want to refuse or delete any cookies (or similar
        technologies), please refer to the help and support area on your
        internet browser for instructions on how to block or delete cookies.
        Please note you may not be able to take advantage of all the features of
        our Site, including certain personalised features, if you delete or
        disable cookies.{" "}
      </p>
      <p>
        For more information on managing cookies, please go to
        www.allaboutcookies.org, or visit www.youronlinechoices.eu which has
        further information about behavioural advertising and online privacy.{" "}
      </p>
      <h2>Web Beacons</h2>
      <p>
        We, or our third party partners, may employ a software technology called
        web beacons (also known as web bugs, clear gifs or pixels) which helps
        us understand what content is effective, for example by counting the
        number of users who have visited these pages, and to understand usage
        patterns. Web beacons are tiny graphics with a unique identifier,
        similar in function to cookies, and are used to let us know when content
        is viewed. In contrast to cookies, which are stored on a user’s computer
        hard drive, web beacons are embedded on web pages, ads, and e-mail. We,
        or our third party partners, may tie the information gathered by web
        beacons to the other information we collect about you.{" "}
      </p>
      <p>
        In addition to disabling cookies and other tracking technologies as
        described above, you may opt-out of receiving targeted advertising from
        participating ad networks, audience segment providers, ad serving
        vendors, and other service providers by visiting websites operated by
        the Network Advertising Initiative, Digital Advertising Alliance, or
        European Interactive Digital Advertising Alliance.{" "}
      </p>
    </div>
  );
};

export default Cookies;
