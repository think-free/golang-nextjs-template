#!/bin/sh

export GOPATH=`pwd`
export GOBIN=`pwd`
go get -u github.com/GeertJohan/go.rice
go get -u github.com/GeertJohan/go.rice/rice

cd src/project
cd webserver
../../../rice embed-go
cd ..
go build
mv project ../../
cd ../..
