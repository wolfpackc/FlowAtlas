# FlowAtlas

Laboratorio visual para ver qué hace Windows por dentro cuando lanzas un comando SMB o IPC: smbclient, rpcclient, nxc, net use, psexec y parecidos. Escribes o eliges un comando en una terminal estilo Kali y la aplicación dibuja el recorrido paso a paso: la negociación del dialecto, la autenticación, la conexión a IPC$, la apertura de la pipe y la llamada que llega al servicio.

Todo es simulación. La aplicación no abre conexiones, no toca tu red ni ejecuta nada en tu equipo, y funciona sin conexión a internet.

## Qué puedes hacer con ella

- Elegir la versión de Windows, desde sistemas antiguos como Server 2003 o Windows 7 hasta Windows 11 24H2 y Server 2025, y ver cómo cambia el resultado según el dialecto de SMB que se negocia y las políticas que tenga activadas.
- Preparar el servidor: recursos compartidos con su permiso de recurso y, debajo, el permiso NTFS de cada archivo. La aplicación enseña cuál de los dos manda en cada caso.
- Recorrer cada comando con los botones Anterior y Siguiente, repetir el último o ajustar el mapa para verlo entero.
- Lanzar simulaciones didácticas de fallos conocidos (MS08-067, EternalBlue, SMBGhost, PrintNightmare y ZeroLogon) para entender por qué una versión de Windows es vulnerable y otra no. Ninguna ejecuta código real.

## Cómo abrirla

Es una aplicación web estática. Descarga el repositorio y abre `index.html` en el navegador.

Si prefieres una ventana de escritorio, `main.js` la abre con Electron:

```bash
npm install --save-dev electron
npx electron .
```

## Qué hay en el repositorio

- `index.html`, `bundle.js` y `bundle.css`: la aplicación, ya compilada. Todo el código de la interfaz está en `bundle.js`.
- `main.js`: la ventana de Electron.
- `package.json`: nombre y versión (2.0.0).

## Aviso

Es material de estudio. Los comandos y las respuestas que ves son simulados y pueden no coincidir al detalle con lo que devuelve un equipo real.
