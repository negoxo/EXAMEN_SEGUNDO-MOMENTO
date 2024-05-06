export function Header(){    
    document.getElementById("navbar").innerHTML = 
    `
  <nav>
   <ul class="menu-horizontal">
    <li>
        <a href="#">Menú</a>
        <ul class="menu-vertical">
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Acerca de</a></li>
        </ul>
    </li>
    <li>
        <a href="#">Servicios</a>
        <ul class="menu-vertical">
            <li><a href="#service">Informes de análisis</a></li>
            <li><a href="#service">Herramientas predictivas</a></li>            
        </ul>
    </li>
    <li>
        <a href="#">Datos</a>
        <ul class="menu-vertical">
            <li><a href="#">Origen</a></li>
            <li><a href="#">Importancia</a></li>
            <li><a href="#">Actualizaciones</a></li>
        </ul>
    </li>
    <li>
        <a href="#">Adicionales</a>
        <ul class="menu-vertical">
            <li><a href="#">Testimonio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Recursos educativos</a></li>
        </ul>
    </li>
   </ul>
    
     
  </nav>           
               
    `
}
    


