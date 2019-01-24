#!/usr/bin/env sh

set -ex

envsubst '$${IDC_API_DOMAIN_PROTOCOL},$${IDC_API_DOMAIN_HOST},$${IDC_API_DOMAIN_PORT},$${NGINX_HOST},$${NGINX_PORT}' < /etc/nginx/conf.d/reverse.conf > /etc/nginx/conf.d/default.conf
rm /etc/nginx/conf.d/reverse.conf

# run docker CMD
exec "$@"