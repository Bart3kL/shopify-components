import path from "path";

import { LibraryComponent } from "@/src/components/LibraryComponent";

import { readFilesRecursive } from "@/src/lib/readFilesRecursive";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ componentId: string }>;
}) {
  const { componentId } = await params;

  const filesRaw = await readFilesRecursive(
    path.join(process.cwd(), "src/library", capitalizeWords(componentId))
  );

  return <LibraryComponent componentId={componentId} filesRaw={filesRaw} />;
}

function capitalizeWords(str: string) {
  // Remove hyphen and uppercase the following letter
  str = str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

  // Capitalize first letter of the string and each letter following a space
  return str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}
