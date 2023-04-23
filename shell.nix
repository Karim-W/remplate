# simple.nix
with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    nodejs
    nodePackages_latest.pnpm
  ];
}

