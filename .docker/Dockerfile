FROM php:7.1.8-apache
COPY config/php.ini /usr/local/etc/php/
RUN apt-get update -y; \
    apt-get upgrade -y;
RUN docker-php-ext-install mysqli