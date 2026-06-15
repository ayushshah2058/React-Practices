import './header.css'
export default function Header(){
    return(
        <>
      <header class="header">
      <a href="#home" class="logo" >AYUSH <span>SHAH</span></a>
      <i class="bx bx-menu" id="menu-icon"></i>
      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="btn" href="#contact">Contact Me</a>
    </header>

        </>
    )
}