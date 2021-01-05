#!/bin/bash

sudo docker build --rm -t project . &&
sudo docker image prune -f --filter label=stage=intermediate
