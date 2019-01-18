#!/usr/bin/env bash

HOME="/home/shops"
PROJECT="SHOPS"

echo "Git pull..."
cd $HOME/$PROJECT
git pull

echo "Building JS/CSS..."
cd $HOME/$PROJECT/docroot/themes/custom/shops
npm install
node_modules/gulp/bin/gulp.js build
echo "DONE: Building JS/CSS"

# Build the the composer
cd $HOME/$PROJECT
echo "Build the the composer dependencies..."
composer install
echo "DONE: Build the the composer dependencies..."

#Probably we are done ).
echo "All done!"
exit 0
