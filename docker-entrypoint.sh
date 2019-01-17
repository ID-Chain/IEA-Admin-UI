#!/usr/bin/env sh

set -ex

envsubst '$${API_HOST},$${API_PORT},$${NGINX_HOST},$${NGINX_PORT}' < /etc/nginx/conf.d/reverse.conf > /etc/nginx/conf.d/default.conf
rm /etc/nginx/conf.d/reverse.conf

# run docker CMD
exec "$@"