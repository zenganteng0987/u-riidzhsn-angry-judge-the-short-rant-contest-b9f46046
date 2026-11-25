import * as fs from "node:fs";
import * as path from "node:path";

const RANT =
  "I wrote you four paragraphs. Four. I proofread them. I chose every word like a diplomat defusing a bomb. You replied 'ok'. Not 'okay'. Not even a thumbs-up. Just 'ok', lowercase, like my feelings were a Terms of Service you scrolled past. I hope your Wi-Fi drops every time you press play.";

function main(): void {
  if (RANT.length < 1 || RANT.length > 400) {
    throw new Error(
      `Rant must be 1-400 characters, got ${RANT.length}.`,
    );
  }

  const outputDir = "/output";
  const outputPath = path.join(outputDir, "entry.txt");

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, RANT, "utf8");

  console.log(`Wrote ${RANT.length} characters to ${outputPath}`);
}

main();
