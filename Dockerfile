FROM php:8.5-fpm-bookworm AS app

WORKDIR /var/www/app

# install system dependencies
RUN apt update && apt install -y vim git curl libxml2-dev zip unzip libssl-dev pkg-config libzip-dev libonig-dev

# install php extensions
RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo mbstring mysqli pdo_mysql bcmath intl zip sockets
RUN pecl install redis && docker-php-ext-enable redis

# copy composer from a composer image
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer global require laravel/installer

RUN composer install \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --no-dev \
    --prefer-dist

COPY ./ ./
