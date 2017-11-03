#!/bin/bash
# first, you need to install `doxdox` globally
# @see https://github.com/neogeek/doxdox
doxdox ../*.js --layout ../docs/templates/readme.hbs  --output ../README.md --package ../package.json