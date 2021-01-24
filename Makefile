SHELL := /bin/bash

provision:
	sudo apt install -y yui-compressor
	npm install -g browser-sync

dev:
	browser-sync ./ -w --no-notify --directory

build:
	cd src; \
	cat dependencies.css reset.css grid.css typography.css components.css > spartan.css; \
	yui-compressor --line-break 80 spartan.css -o ../dist/spartan.min.css; \
	yui-compressor --line-break 80 spartan.js -o ../dist/spartan.min.js; \
	rm spartan.css

deploy:
	cd kitchensink && scp -r * root@165.22.87.180:/var/www/html/spartan-ui.com/
