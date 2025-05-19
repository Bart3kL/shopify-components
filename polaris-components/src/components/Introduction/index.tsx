"use client";

import {
  Page,
  Layout,
  Card,
  Text,
  Badge,
  List,
  Link,
  InlineStack,
  BlockStack,
  Divider,
  Box,
} from "@shopify/polaris";

export default function Introduction() {
  return (
    <Page title="Shopify Polaris Components – Open Source UI Library for Shopify Apps">
      <Layout>
        <Layout.Section>
          <Card padding="600">
            <BlockStack gap="600">
              {/* Hero Section */}
              <BlockStack gap="400">
                <Text as="h1" variant="heading2xl">
                  Build Better and Faster Shopify Apps
                </Text>
                <Text as="p" variant="bodyMd">
                  <strong>Shopify Polaris Components</strong> is a free and
                  open-source UI library for Shopify developers. Built with{" "}
                  <strong>React</strong>, <strong>TypeScript</strong> and{" "}
                  <strong>Shopify Polaris</strong>, this library helps you ship
                  production-ready admin dashboards, embedded apps, analytics
                  panels, and onboarding flows-fast.
                </Text>
                <Text as="p" variant="bodyMd">
                  {`Whether you're building with <strong>Remix</strong> or{" "}`}
                  <strong>Next.js</strong>, our modular components are optimized
                  for seamless integration and match the native Shopify admin
                  experience. Built by developers for developers, this library
                  is designed to save you time, reduce boilerplate, and keep
                  your UI consistent.
                </Text>
                <InlineStack gap="200" wrap>
                  <Badge>React + TypeScript</Badge>
                  <Badge tone="success">Remix & Next.js Ready</Badge>
                  <Badge tone="attention">MIT License</Badge>
                  <Badge tone="critical">Open Source</Badge>
                  <Badge tone="info">Built with Polaris</Badge>
                </InlineStack>
              </BlockStack>

              <Divider />

              {/* Benefits */}
              <BlockStack gap="200">
                <Text as="h2" variant="headingLg">
                  Why use Polaris Components?
                </Text>
                <List>
                  <List.Item>
                    Enterprise-grade UI components based on{" "}
                    <strong>Shopify Polaris</strong>
                  </List.Item>
                  <List.Item>
                    Written in <strong>TypeScript</strong> for full editor
                    autocompletion and type safety
                  </List.Item>
                  <List.Item>
                    UX that looks and feels like native Shopify admin
                  </List.Item>
                  <List.Item>
                    Easy to customize and reuse across projects
                  </List.Item>
                  <List.Item>
                    Compatible with <strong>Remix</strong> and
                    <strong>Next.js</strong>,
                  </List.Item>
                  <List.Item>
                    Continuously expanded with new components and sections
                  </List.Item>
                  <List.Item>
                    Free to use in commercial apps under the permissive{" "}
                    <strong>MIT license</strong>
                  </List.Item>
                </List>
              </BlockStack>

              <Divider />

              {/* Quickstart */}
              <BlockStack gap="200">
                <Text as="h2" variant="headingLg">
                  Quickstart
                </Text>
                <Text as="p">
                  Clone the monorepo and install dependencies in seconds:
                </Text>
                <Box background="bg-surface-secondary" padding="400">
                  <Text as="p" variant="bodySm">
                    git clone https://github.com/your-org/shopify-components.git
                  </Text>
                  <Text as="p" variant="bodySm">
                    cd shopify-components
                  </Text>
                  <Text as="p" variant="bodySm">
                    pnpm install
                  </Text>
                </Box>
                <Text as="p">
                  The codebase is modular. You can import only the Polaris
                  components or explore future support for Hydrogen and Liquid.
                </Text>
              </BlockStack>

              <Divider />

              {/* Docs & Domains */}
              <BlockStack gap="200">
                <Text as="h2" variant="headingLg">
                  Explore the Components
                </Text>
                <Text as="p">
                  Access documentation for each supported stack. Examples,
                  previews, and full code snippets are included.
                </Text>
                <List>
                  <List.Item>
                    <Link url="https://polaris.shopifycomponents.com">
                      polaris.shopifycomponents.com
                    </Link>{" "}
                    – React UI components built with Polaris
                  </List.Item>
                  <List.Item>
                    <div className="flex gap-2">
                      <Text as="p">
                        hydrogen.shopifycomponents.com – Components for Shopify
                        Hydrogen
                      </Text>
                      <Badge tone="info">COMING SOON</Badge>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className="flex gap-2">
                      <Text as="p">
                        liquid.shopifycomponents.com – Theme sections & snippets
                        in Liquid
                      </Text>
                      <Badge tone="info">COMING SOON</Badge>
                    </div>
                  </List.Item>
                </List>
              </BlockStack>

              <Divider />

              {/* Contributions */}
              <BlockStack gap="200">
                <Text as="h2" variant="headingLg">
                  Contributions Welcome
                </Text>
                <Text as="p">
                  We’re building this library for the Shopify developer
                  community. If you want to suggest a new section, improve a
                  component, or help extend support to Hydrogen or Liquid - get
                  involved!
                </Text>
                <Text as="p">
                  Visit our{" "}
                  <Link
                    url="https://github.com/Bart3kL/shopify-components"
                    external
                  >
                    GitHub repo
                  </Link>{" "}
                  to open an issue or pull request.
                </Text>
              </BlockStack>

              <Divider />

              {/* Footer */}
              <Box paddingBlockStart="400">
                <Text variant="bodySm" as="p" alignment="center">
                  MIT Open Source · {new Date().getFullYear()} ·{" "}
                  <Link
                    url="https://github.com/Bart3kL/shopify-components"
                    external
                  >
                    github.com/Bart3kL/shopify-components
                  </Link>
                </Text>
              </Box>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
