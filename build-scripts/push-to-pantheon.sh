#!/usr/bin/env bash
HOME="/home/shops"

PROJECT="SHOPS"


DATE=`date '+%Y-%m-%d %H:%M:%S'`

rsync -avz --delete-before --exclude-from $HOME/$PROJECT/".rsynkignore" $HOME/$PROJECT/* "$HOME/$PROJECT-pant/"
cd "$HOME/$PROJECT-pant"
git pull
git add --all .
git commit -m "Push to pantheon $DATE"
git push origin master -f

