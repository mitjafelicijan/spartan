SHELL := /bin/bash

provision:
	sudo apt install -y yui-compressor

dev:
	browser-sync -w --no-notify

build:
	cd src; \
	cat dependencies.css reset.css grid.css typography.css components.css > spartan.css; \
	yui-compressor --line-break 80 spartan.css -o ../dist/spartan.min.css; \
	yui-compressor --line-break 80 spartan.js -o ../dist/spartan.min.js; \
	rm spartan.css
