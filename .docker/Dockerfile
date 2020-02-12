FROM php:7.1.8-apache
COPY config/php.ini /usr/local/etc/php/
RUN apk update; \
    apk upgrade;
RUN docker-php-ext-install mysqli
RUN chmod 755 ./src/uploads