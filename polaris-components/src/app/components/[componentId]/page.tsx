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
  return str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}
