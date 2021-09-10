develop: clean build
	gatsby develop

clean:
	rm -rf .cache/
	rm -rf public/

build: clean
	gatsby build

