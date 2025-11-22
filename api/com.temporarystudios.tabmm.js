export default function handler(req, res) {
  res.status(200).json({
    name: "com.temporarystudios.tabmm",
    versions: {
      "1.0.1": {
        name: "com.temporarystudios.tabmm",
        version: "1.0.1",
        displayName: "TABMM",
        description: "TABMM is a mod manager that handles scripts, shaders and compilation.\n\nYou can allow users to create mods for your game, and use loaded mods however you want!\n\nFor now, players can only use shaders in your game.",
        unity: "2019.1",
        dist: {
          tarball: "https://www.temporarystudios.org/packages/com.temporarystudios.tabmm-1.0.1.tgz"
        }
      }
    },
    "dist-tags": {
      latest: "1.0.1"
    }
  });
}
