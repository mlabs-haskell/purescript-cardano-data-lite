.PHONY: build test run watch serve format check-format code-gen copy node2nix

nix-sources := $(shell fd --no-ignore-parent -enix --exclude='spago*')
js-sources := $(shell fd --no-ignore-parent -ejs -ecjs)

build:
	spago build

test:
	spago test

format:
	@purs-tidy format-in-place "src/**/*.purs"
	@purs-tidy format-in-place "test/**/*.purs"
	@nixpkgs-fmt ${nix-sources}
	@prettier -w ${js-sources}
	@make check-format

check-format:
	@purs-tidy check "src/**/*.purs"
	@purs-tidy check "test/**/*.purs"
	@nixpkgs-fmt --check ${nix-sources}
	@prettier --log-level warn -c ${js-sources}
	@eslint --quiet ${js-sources} --parser-options 'sourceType: module'

ci-actions:
	nix build -L .#checks.x86_64-linux.formatting-check
	nix build -L .#checks.x86_64-linux.tests

node2nix:
	cd nix/ && nix run nixpkgs#node2nix -- --development --lock ../package-lock.json -i ../package.json
	rm nix/default.nix
