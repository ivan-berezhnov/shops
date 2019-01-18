#!/bin/bash

URL="$1"
PR="$2"

SSH_CMD="ssh -i ssh/id_dsa -o 'StrictHostKeyChecking no'"

GITHUB_TOKEN="xxxxxxx"
COMMENT1="## Link for testing: \n **$URL** \n ## CodeSniffer report: \n - [ ] **$URL/codesniffer.txt**"
REPO_SLUG="Door3Dev/AndrewDavidson"
PULL_REQUEST=${PR##*/}

curl -H "Authorization: token $GITHUB_TOKEN" -X POST -d "{\"body\": \"$COMMENT1\"}" "https://api.github.com/repos/${REPO_SLUG}/issues/${PULL_REQUEST}/comments"