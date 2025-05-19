import path from "path";

import React from "react";

import { LibraryComponent } from "@/src/components/LibraryComponent";
import { readFilesRecursive } from "@/src/lib/readFilesRecursive";
import { COMPONENTS } from "@/src/components/LibraryComponent/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ componentId: string }>;
}) {
  const { componentId } = await params;

  const lowerId = componentId.toLowerCase();
  const componentData = COMPONENTS[lowerId as keyof typeof COMPONENTS];

  const title = componentData
    ? `${componentData.componentTitle} | Shopify Polaris Components`
    : `${capitalizeWords(componentId)} | Shopify Polaris Components`;

  const description = componentData
    ? `Documentation and source code for ${componentData.componentTitle}, a Polaris-based UI component for Shopify apps.`
    : `Explore the ${capitalizeWords(
        componentId
      )} UI component for Shopify admin interfaces using Polaris and TypeScript.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://polaris.shopifycomponents.com/components/${componentId}`,
      type: "article",
    },
    authors: [
      {
        name: "Bartosz Lewandowski",
        url: "https://www.linkedin.com/in/bartosz-lewandowski-dev/",
      },
    ],
  };
}

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
  return str
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}
