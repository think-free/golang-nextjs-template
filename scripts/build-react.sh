#!/bin/sh

cd src/project/gui
npm install
npm run build
npm run export
cd ../../..
