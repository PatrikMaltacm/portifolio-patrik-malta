import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <header>
        <a href="https://wa.me/5569999062926?text=Gostaria+de+or%C3%A7ar+um+servi%C3%A7o+WEB" className='contact-button'>Contato</a>
      </header>
      <div className='primary-info'>
          <h1 className='about-me'>Olá, sou Patrik</h1>
          <h3>Desenvolvedor FrontEnd</h3>
          <img src="/Avatar.svg" alt=""/>
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
              <h3>Biografia com formulario</h3>
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
            <p>Projeto de estudo sobre a temperatura de sua cidade</p>
            <p>Tudo feito com ReactJs e tambem uso de API externa para envio de email</p>
            <div className='foot-project'>
              <a href="https://patrikmaltacm.github.io/climalta/">Olhar</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
