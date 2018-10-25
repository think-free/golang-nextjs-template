#!/bin/sh

export GOPATH=`pwd`
export GOBIN=`pwd`
go get -u github.com/GeertJohan/go.rice
go get -u github.com/GeertJohan/go.rice/rice
go get -u github.com/golang/dep/cmd/dep

cd src/project
../../dep ensure
cd webserver
../../../rice embed-go
cd ..
go build
mv project ../../
cd ../..
