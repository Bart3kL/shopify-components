"use client";

import { Text } from "@shopify/polaris";

import CodeTabs from "@/src/components/CodeTabs";

import { COMPONENTS } from "./components";
import { DEMO_PROPS } from "./placeholders";
import { sortComponentFiles } from "@/src/lib/sortComponentFiles";

export function LibraryComponent({
  componentId,
  filesRaw,
}: {
  componentId: string;
  filesRaw: { filename: string; content: string }[];
}) {
  const LowerId = componentId.toLowerCase();
  const DemoComponent =
    COMPONENTS[LowerId as keyof typeof COMPONENTS].component;

  const demoProps = DEMO_PROPS[LowerId as keyof typeof DEMO_PROPS];
  const files = sortComponentFiles(filesRaw);

  if (!DemoComponent) return <div>Component not found.</div>;

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Text as="h1" variant="headingXl">
        {COMPONENTS[LowerId as keyof typeof COMPONENTS].componentTitle}
      </Text>
      <div className="my-8" />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <DemoComponent {...(demoProps as any)} />
      <hr className="my-8" />

      <CodeTabs files={files} componentId={componentId} />
    </div>
  );
}
