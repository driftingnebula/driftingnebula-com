{
  pkgs ? import <nixpkgs> { },
}:
with pkgs;
mkShell {
  packages = [
    bun
    cargo-make
  ];
}
