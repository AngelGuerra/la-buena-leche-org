FROM jekyll/jekyll:3.8.5

RUN apk update && apk add --no-cache imagemagick \
  && rm -rf /var/cache/apk/*

ENV JEKYLL_ENV=development

WORKDIR /srv/jekyll

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0"]
