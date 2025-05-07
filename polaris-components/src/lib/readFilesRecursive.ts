import fs from "fs/promises";
import path from "path";

export async function readFilesRecursive(
  dirPath: string,
  prefix = ""
): Promise<{ filename: string; content: string }[]> {
  const result: { filename: string; content: string }[] = [];
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      result.push(
        ...(await readFilesRecursive(
          path.join(dirPath, entry.name),
          path.join(prefix, entry.name)
        ))
      );
    } else {
      result.push({
        filename: path.join(prefix, entry.name).replaceAll("\\", "/"), // dla Windows
        content: await fs.readFile(path.join(dirPath, entry.name), "utf8"),
      });
    }
  }
  return result;
}
