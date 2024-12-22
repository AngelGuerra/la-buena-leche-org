# Asociación La Buena Leche

[![Ruby](https://img.shields.io/badge/ruby-2.6.0-blue.svg?style=flat-square)](https://www.ruby-lang.org)
[![Jekyll](https://img.shields.io/badge/jekyll-3.8.5-blue.svg?style=flat-square)](https://www.ruby-lang.org)

Nueva versión de la página web de la asociación, anteriormente desarrollada con AngularJS y posteriormente migrada a Jekyll.

👉 **Sitio web oficial**: [https://www.labuenaleche.org/](https://www.labuenaleche.org/)

## Requisitos para el desarrollo

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Minimagick](https://github.com/minimagick/minimagick)

## Arrancar la versión de desarrollo

1. Clona el repositorio:

   ```bash
   gh repo clone AngelGuerra/la-buena-leche-org
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd la-buena-leche-org
   ```

3. Instala las dependencias con Bundler:

   ```bash
   bundle install
   ```

4. Inicia el servidor en modo desarrollo:

   ```bash
   JEKYLL_ENV=development jekyll serve --host=0.0.0.0
   ```

Esto habilita el servidor en tu red local. Puedes acceder al sitio desde tu ordenador en `http://localhost:4000` o desde otro dispositivo en la misma red ingresando la dirección IP del servidor, por ejemplo, `http://192.168.X.XXX:4000`.

## Desarrollo con Docker

Si prefieres usar Docker para el desarrollo, sigue estos pasos:

1. Ejecuta el siguiente comando desde tu máquina anfitrión:

   ```bash
   docker run --rm \
   -e JEKYLL_ENV=development \
   --platform="linux/amd64" \
   --volume="$PWD:/srv/jekyll" \
   --volume="$PWD/vendor/bundle:/usr/local/bundle" \
   -p 4000:4000 -it jekyll/jekyll:3.8.5 bash
   ```

2. Dentro del contenedor Docker:

   - Instala las dependencias:

     ```bash
     bundle install
     ```

   - Inicia el servidor en modo desarrollo:

     ```bash
     JEKYLL_ENV=development jekyll serve --host 0.0.0.0
     ```

   Ahora puedes acceder al sitio web en `http://127.0.0.1:4000` o en la dirección IP asignada a Docker (por ejemplo, `http://{DOCKERIP}:4000`).

3. Para construir la versión de producción:

   ```bash
   JEKYLL_ENV=production jekyll build --strict_front_matter
   ```

### Docker compose

```bash
docker compose up
# docker compose run jekyll bundle install
# docker compose run jekyll rake test
docker compose run jekyll jekyll build --strict_front_matter
```

## Troubleshooting

### Error: `Liquid Exception: You must have ImageMagick or GraphicsMagick installed in /_layouts/default.html`

Este error indica que falta ImageMagick o GraphicsMagick. Solución:

```bash
apk add imagemagick
```

### Las imágenes de fondo no se muestran

Si las imágenes de fondo no aparecen correctamente, limpia la caché de Jekyll:

```bash
jekyll clean
rm -rf .jekyll-cache
```

Este proyecto ahora está listo para ejecutarse y desarrollarse en tu máquina o usando Docker. Si encuentras algún problema adicional, revisa las dependencias o verifica la configuración del entorno.
