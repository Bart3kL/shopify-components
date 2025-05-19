"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text } from "@shopify/polaris";

import React from "react";

import { COMPONENTS } from "@/src/components/LibraryComponent/components";
import { DEMO_PROPS } from "@/src/components/LibraryComponent/placeholders";

export default function AllComponents() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Text as="h1" variant="headingXl" alignment="center">
        All Components
      </Text>

      <div className="my-10" />

      <ul>
        {Object.entries(COMPONENTS).map(
          ([name, { componentTitle, component: Component }]) => (
            <li key={name} style={{ marginBottom: 32 }}>
              <Text as="h2" variant="headingLg">
                {componentTitle}
              </Text>

              <div className="mt-4">
                <Component
                  {...((DEMO_PROPS[name as keyof typeof DEMO_PROPS] as any) ||
                    {})}
                />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
