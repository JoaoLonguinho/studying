import './App.css';
import MainBanner from './components/MainBanner';
import ProfilePic from './components/ProfilePic';
import bannerImage from './img/project-lofi-banner.png';
import profilePicLink from './img/eu.jpg';
import MainText from './components/MainText';
import MainTittle from './components/MainTittle';
import Skills from "./components/Skills";
import DownloadArea from './components/DownloadArea';
// import SecondMainTittle from './components/SecondMainTittle';
// import HookTest from './components/HookTest';
// import GeradorDeProjetosIA from './components/GeradorDeProjetosIA';

function App() {
  return (
    <div>
      <MainBanner url={bannerImage} imgAlt={"Banner principal"}/>
      <div className="main-container-organize">
        <div>
          {/* <SecondMainTittle title={"Habilidades"}/> */}
          <Skills title={"JavaScript"} expEarned={70}/>
          <Skills title={"React"} expEarned={40}/>
          <Skills title={"CSS"} expEarned={90}/>
          <Skills title={"PHP"} expEarned={80}/> 
        </div>
        {/* Adicionar campo de download do CV */}
        {/* Link linkedin e github */}
        {/* Descrição de atividades */}
        <div>
          <ProfilePic profilePicLink={profilePicLink} />
          <MainTittle title={"Sou o João Longuinho"}/>
          <MainText description={"Trabalho com programação a mais de 3 anos, utilizando HTML, CSS, JS, PHP, React e Wordpress"}/>
          {/* <GeradorDeProjetosIA /> */}
        </div>
        <div>
          <DownloadArea tituloAba={"Area de downloads"}/> 
          {/* <DownloadArea tituloAba={"Quer conhecer mais do meu trabalho? Segue o link de um projeto meu"}/> Verificar ajuste como Rael informou*/} 
        </div>
      </div>
    </div>
  );
}

export default App;
