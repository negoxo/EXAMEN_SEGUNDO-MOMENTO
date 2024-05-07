import { App } from "./app.js";
import {Header} from "./components/header.js"
import {Service} from "./components/service.js";
import { Datos } from "./components/datos.js";
import { Dashboard } from "./components/dashboard.js";
import {Footer} from "./components/footer.js";
import { Testimonios } from "./components/testimonios.js";
import { Noticias } from "./components/noticias.js";



const content = document;

content.addEventListener("DOMContentLoaded", App);
content.addEventListener("DOMContentLoaded", Header);
content.addEventListener("DOMContentLoaded", Service);
content.addEventListener("DOMContentLoaded", Datos);
content.addEventListener("DOMContentLoaded", Dashboard);
content.addEventListener("DOMContentLoaded",Footer);
content.addEventListener("DOMContentLoaded",Testimonios);
content.addEventListener("DOMContentLoaded",Noticias);