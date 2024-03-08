import { useState } from 'react'
import './App.css'
import img from './assets/Avatar.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <header>
        {/* <a href="https://wa.me/5569999062926?text=Gostaria+de+or%C3%A7ar+um+servi%C3%A7o+WEB" className='contact-button'>Contato</a> */}
        <a href="https://github.com/PatrikMaltacm" className='contact-button'>GitHub</a>
        <a href="https://www.linkedin.com/in/patrik-malta-1160552b6/" className='contact-button'>Linkedin</a>
      </header>
      <div className='primary-info'>
          <h1 className='about-me'>Olá, sou Patrik</h1>
          <h3>Desenvolvedor FrontEnd</h3>
          <img src={img} alt=""/>
      </div>

      <div className='tecnolog-container'>
        <div className='container-tec'>
          <div className='header-tec'>
            <h2>Trabalho com as seguintes tecnologias</h2>
          </div>
          <p>React JS</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Git/Github</p>
          <p>Figma</p>
          <p>VScode</p>
        </div>
      </div>

      <div className='projects-container'>
        <div className='junior'>
          <h2>Estou começando agora atrás do meu primeiro freelancer, esses são os projetos que eu ja fiz até o momento</h2>
        </div>
        <div className='rows-container'>
          <div className='p-1'>
            <div className="head-project">
              <h3>Biografia com formulário</h3>
            </div>
            <p>Fiz esse projeto para uso no meu perfil sobre progamação</p>
            <p>Tudo feito com ReactJs e uso de API externa para envio de email</p>
            <div className='foot-project'>
              <a href="https://patrikmaltacm.github.io/biografia_usuario-progamador/">Olhar</a>
            </div>
          </div>
          <div className='p-1'>
          <div className="head-project">
              <h3>Clima e temperatura</h3>
            </div>
            <p>Projeto que fiz para estudo sobre a temperatura de sua cidade</p>
            <p>Tudo feito com ReactJs e tambem uso de API externa para envio de email</p>
            <div className='foot-project'>
              <a href="https://patrikmaltacm.github.io/climalta/">Olhar</a>
            </div>
          </div>
          <div className='p-1'>
          <div className="head-project">
              <h3>Miaw Facts</h3>
            </div>
            <p>Projeto que tambem fiz para estudo sobre curiosidades do mundo felino</p>
            <p>Feito com ReactJs e duas API`s externas <br /> <br /></p>
            <div className='foot-project'>
              <a href="https://patrikmaltacm.github.io/miaw-facts/">Olhar</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
