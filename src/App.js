import './App.css';
import MainBanner from './components/MainBanner';
import ProfilePic from './components/ProfilePic';
import bannerImage from './img/project-lofi-banner.png';
import profilePicLink from './img/eu.jpg';

function App() {
  return (
    <div>
      <MainBanner url={bannerImage} imgAlt={"Banner principal"}/>
      <ProfilePic profilePicLink={profilePicLink} />
    </div>
  );
}

export default App;
