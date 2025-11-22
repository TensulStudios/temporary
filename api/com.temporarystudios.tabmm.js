export default function handler(req, res) {
  res.status(200).json({
    name: "com.temporarystudios.tabmm",
    versions: {
      "1.0.1": {
        name: "com.temporarystudios.tabmm",
        version: "1.0.1",
        displayName: "TABMM",
        description: "TABMM is a mod manager that handles scripts, shaders and compilation.",
        unity: "2019.1",
        dist: {
          tarball: "https://github.com/TensulStudios/tabmm/archive/refs/tags/1.0.1.tar.gz"
        }
      }
    },
    "dist-tags": {
      latest: "1.0.1"
    }
  });
}
