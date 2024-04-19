import React from "https://esm.sh/react@18.2.0"
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client"

const appRootElement = document.getElementById("root")
const root = createRoot(appRootElement) 
const btn = React.createElement('button', {class:'boton rojo'},'mi boton con react') 

root.render(btn)

