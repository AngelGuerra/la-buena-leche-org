# Asociación La Buena Leche

[![Ruby](https://img.shields.io/badge/ruby-2.6.0-blue.svg?style=flat-square)](https://www.ruby-lang.org)
[![Jekyll](https://img.shields.io/badge/jekyll-3.8.5-blue.svg?style=flat-square)](https://www.ruby-lang.org)

Nueva versión de la página web de la asociación, anteriormente ésta estaba hecha con AngularJS y ahora se ha portado a Jekyll.

https://www.labuenaleche.org/

## Requisitos para el desarrollo

- [RVM](https://rvm.io/) (recomendado)
- [Jekyll](https://jekyllrb.com/)
- [Minimagick](https://github.com/minimagick/minimagick)

## Arrancar la versión de desarrollo

- Clonar el proyecto
- Entrar a la carpeta y ejecutar `bundle install`
- Arrancar la versión de desarrollo.

Con este comando habilitamos el servidor en nuestra red local, sólo necesitamos saber la IP:

`JEKYLL_ENV=development jekyll serve --host=0.0.0.0`

Ahora puedes acceder desde tu ordenador a `localhost:4000` o bien desde otro aparato en la misma red especificando la IP `192.168.X.XXX:4000`

## Docker

También podemos utilizar Docker para el desarrollo:

```bash
# Anfitrión
sudo docker run --rm --volume="$PWD:/srv/jekyll" --volume="$PWD/vendor/bundle:/usr/local/bundle" -p 4000:4000 -it jekyll/jekyll:3.8.5 bash
# Docker
bundle install
JEKYLL_ENV=development jekyll serve --host 0.0.0.0
# Ahora puedes ver en http://{DOCKERIP}:4000 o http://127.0.0.1:4000 la página

# Build
JEKYLL_ENV=production jekyll build --strict_front_matter
```

## Troubleshooting

```bash
# Liquid Exception: You must have ImageMagick or GraphicsMagick installed in /_layouts/default.html
apk add imagemagick
```

```bash
# Background images not shown
jekyll clean
rm -rf .jekyll-cache
```
