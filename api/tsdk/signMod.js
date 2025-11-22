import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};

function reverseBuffer(buffer) {
  const arr = Buffer.from(buffer);
  arr.reverse();
  return arr;
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("use POST");
    return;
  }

  const form = formidable({ multiples: false });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).send("parse error");

    const file = files.file;
    if (!file) return res.status(400).send("no file");

    const data = fs.readFileSync(file.filepath);
    const reversed = reverseBuffer(data);

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${file.originalFilename}"`
    );

    res.send(reversed);
  });
}
