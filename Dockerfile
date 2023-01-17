FROM nginx:alpine
COPY /dist/scpci-web /usr/share/nginx/html
EXPOSE 80
