const API_URL = "https://temporary-lemon.vercel.app/api/game_files/ptr";
const WEBHOOK_URL = "https://discord.com/api/webhooks/1391110064508506334/OPSF-8NXMHh395M7XF-zOek-NRX0rherXiG8H5uZ36FjJIqqRdg3Lj8mNcz1BRpDLHwM";
const KV_KEY = "last_ptr_version";

Deno.cron("check-ptr-release", "*/1 * * * *", async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const latestVersion = data.version?.trim();
    const downloadUrl = data.url?.trim();
    const notes = data.notes?.trim() || "No update notes provided.";

    if (!latestVersion || !downloadUrl) return;

    const kv = await Deno.openKv();
    const stored = await kv.get<string>([KV_KEY]);

    if (stored.value !== latestVersion) {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📢 **New PTR Release Detected!** <@&1391112513520799876>\n\n🆕 **Version:** ${latestVersion}\n🔗 [Download](${downloadUrl})\n\n📝 **Notes:**\n${notes}`
        })
      });

      await kv.set([KV_KEY], latestVersion);
    }
  } catch (err) {
    console.error("Error checking PTR release:", err);
  }
});
