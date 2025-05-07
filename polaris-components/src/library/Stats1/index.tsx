import {
  Card,
  BlockStack,
  InlineStack,
  Text,
  Box,
  InlineGrid,
  Bleed,
  Link,
  useBreakpoints,
} from "@shopify/polaris";
import type { Metric, Stats1Props } from "./types";

export default function Stats1({
  title,
  metrics,
  footerText,
  footerLinkText,
  footerLinkUrl,
}: Stats1Props) {
  const breakpoints = useBreakpoints();
  function getColumnBorder(index: number, array: Metric[]): string {
    if (breakpoints.mdUp) {
      return index === array.length - 1 ? "" : "border-r border-gray-300";
    }

    return index % 2 === 0 && index !== array.length - 1
      ? "border-r border-gray-300"
      : "";
  }
  const gridColumns = {
    xs: `repeat(${metrics.length > 2 ? 2 : metrics.length}, minmax(0, 1fr))`,
    md: `repeat(${metrics.length}, minmax(0, 1fr))`,
  };
  return (
    <Card>
      <Box>
        <BlockStack gap="300">
          <InlineStack align="space-between" blockAlign="center" wrap>
            <BlockStack gap="050">
              <InlineStack align="start" blockAlign="center" wrap>
                <Text as="h2" variant="headingMd">
                  {title}
                </Text>
              </InlineStack>
            </BlockStack>
          </InlineStack>

          <Box
            borderColor="border-inverse-active"
            borderStyle="solid"
            borderRadius="200"
            borderWidth="025"
            paddingBlockStart={"200"}
            paddingBlockEnd="200"
          >
            <InlineGrid columns={gridColumns} gap="0">
              {metrics.map((metric, index, array) => (
                <div
                  key={metric.label + index}
                  className={`py-2 px-4 ${getColumnBorder(index, array)}`}
                >
                  <BlockStack gap="100">
                    <Text variant="bodySm" as="span">
                      {metric.label}
                    </Text>
                    <Text variant="headingMd" as="p" fontWeight="bold">
                      {metric.value}
                    </Text>
                  </BlockStack>
                </div>
              ))}
            </InlineGrid>
          </Box>

          <Box>
            <Bleed marginInline="400" marginBlockEnd="400">
              <Box background="bg-surface-secondary" padding="400">
                {footerText}
                <Link url={footerLinkUrl} target="_blank">
                  {footerLinkText}
                </Link>
              </Box>
            </Bleed>
          </Box>
        </BlockStack>
      </Box>
    </Card>
  );
}
