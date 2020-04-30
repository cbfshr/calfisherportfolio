FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /usr/share/portfolio
COPY portfolio /usr/share/portfolio

EXPOSE 80
