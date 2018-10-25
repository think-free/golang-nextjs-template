#!/bin/bash

sudo docker build --rm -t arisnova.docker/irismanager . &&
sudo docker image prune -f --filter label=stage=intermediate &&
sudo docker push arisnova.docker/irismanager
