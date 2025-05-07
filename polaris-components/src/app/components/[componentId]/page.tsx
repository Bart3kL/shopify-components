import path from "path";

import { LibraryComponent } from "@/src/components/LibraryComponent";

import { readFilesRecursive } from "@/src/lib/readFilesRecursive";

export default async function ComponentPage({
  params,
}: {
  params: { componentId: string };
}) {
  const { componentId } = params;

  const filesRaw = await readFilesRecursive(
    path.join(process.cwd(), "src/library", capitalize(componentId))
  );

  return <LibraryComponent componentId={componentId} filesRaw={filesRaw} />;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
