// import landingImage from './../../images/LandingImages/80809.jpg';
import './LandingPage.css';
export default function LandingPage() {
  return (
    <div id='landing-wrapper'>
      <div id='left'>
        <div id='landing-header'>Header</div>
        <div className='slogan'>
          <div id='landing-chat'>Chat</div>
          <div id='landing-connect'>Connect</div>
          <div id='landing-learn'>Learn</div>
        </div>
        <img id='landing-image' src='/80809.jpg'></img>
      </div>
      <div id='form'></div>
    </div>
    // <a href='http://www.freepik.com'>Designed by rawpixel.com / Freepik</a>
  );
}
