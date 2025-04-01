{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages_latest.pnpm
  ];
  idx.extensions = [
    
  ];
}