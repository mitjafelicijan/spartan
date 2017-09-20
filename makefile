SHELL := /bin/bash

provision:
	sudo apt install -y yui-compressor

run:
	http-server -c-1 -p 7777
	#python -m SimpleHTTPServer 7777

livereload:
	livereloadx --exclude "*.min.js" --exclude "*.min.css" --exclude "*.py" --exclude "*.pyc"

build:
	cd src; \
	cat dependencies.css reset.css grid.css typography.css components.css responsive.css > spartan.css; \
	yui-compressor --line-break 80 spartan.css -o ../dist/spartan.min.css; \
	rm spartan.css
