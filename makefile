SHELL := /bin/bash

provision:
	sudo apt install -y yui-compressor

local:
	python -m SimpleHTTPServer 7777

livereload:
	livereloadx --exclude "*.min.js" --exclude "*.min.css" --exclude "*.py" --exclude "*.pyc"

build:
	cd src; \
	cat reset.css grid.css typography.css components.css responsive.css > spartan.css; \
	yui-compressor spartan.css > ../dist/spartan.min.css; \
	rm spartan.css
