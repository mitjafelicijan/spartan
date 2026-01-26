VERSION=2.1.0

build:
	npx -y sass --no-source-map src/scss/base.scss spartan.css
	cat src/javascript/*.js > spartan.js
	npx -y minify spartan.js > dist/spartan.${VERSION}.min.js
	npx -y minify spartan.css > dist/spartan.${VERSION}.min.css
	cp spartan.css spartan.js kitchensink/
	rm spartan.css spartan.js

dev:
	npx -y browser-sync start --watch --server --directory
