type FileData = { filename: string; content: string };

export function sortComponentFiles(files: FileData[]): FileData[] {
  const mainDirFiles = files.filter((f) => !f.filename.includes("/"));

  const subDirFiles = files.filter((f) => f.filename.includes("/"));

  mainDirFiles.sort((a, b) => {
    if (a.filename.startsWith("index.")) return -1;
    if (b.filename.startsWith("index.")) return 1;
    return a.filename.localeCompare(b.filename);
  });

  subDirFiles.sort((a, b) => {
    const aFolder = a.filename.split("/")[0];
    const bFolder = b.filename.split("/")[0];
    if (aFolder === bFolder) {
      return a.filename.localeCompare(b.filename);
    }
    return aFolder.localeCompare(bFolder);
  });

  return [...mainDirFiles, ...subDirFiles];
}
