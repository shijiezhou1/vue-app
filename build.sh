#!/bin/bash

branch=$(git symbolic-ref --short HEAD)

set -a # automatically export all variables

# Check env with branch
if [ "$branch" != "master" ]; then
  source .env.local
  echo
  echo Branch is not master
  echo
else
  source .env.production

  echo
  echo Branch is ${branch}
  echo
fi

set +a

# Run Build

exit 0
