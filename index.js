import { App } from "./app.js";
import {Header} from "./components/header.js"
import {Service} from "./components/service.js";
import { Datos } from "./components/datos.js";
import { Dashboard } from "./components/dashboard.js";
import { RecursosEducativos } from "./components/recursosEducativos.js";



const content = document;

content.addEventListener("DOMContentLoaded", App);
content.addEventListener("DOMContentLoaded", Header);
content.addEventListener("DOMContentLoaded", Service);
content.addEventListener("DOMContentLoaded", Datos);
content.addEventListener("DOMContentLoaded", Dashboard);
content.addEventListener("DOMContentLoaded", RecursosEducativos);