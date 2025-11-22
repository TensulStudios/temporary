export default function handler(req, res) {
  res.status(200).json({
    name: "com.temporarystudios.tmod",
    versions: {
      "1.0.1": {
        name: "com.temporarystudios.tmod",
        version: "1.0.1",
        displayName: "TMod",
        description: "T-Mod is a mod compiler for TABMM, where you can compile scripts and shaders to create mods!",
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
