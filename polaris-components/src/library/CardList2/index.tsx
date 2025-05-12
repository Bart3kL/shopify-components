import {
  Box,
  BlockStack,
  InlineGrid,
  Text,
  Link,
  Icon,
  Button,
  Card,
} from "@shopify/polaris";

import type { CardList2Props } from "./types";

export const CardList2 = ({ title, items }: CardList2Props) => {
  return (
    <Card>
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          {title}
        </Text>
        <InlineGrid columns={{ xs: 1, sm: 2, lg: 4 }} gap="300">
          {items.map((item) => (
            <Box
              key={item.id}
              background="bg-surface"
              borderColor="border"
              borderRadius="200"
              borderStyle="solid"
              borderWidth="025"
              padding="300"
            >
              <BlockStack gap="300" align="start">
                <BlockStack align="start" gap="200">
                  <Box width="20px">
                    <Icon source={item.icon} tone="base" />
                  </Box>
                  <Text as="h3" variant="bodyMd" fontWeight="semibold">
                    {item.heading}
                  </Text>
                  <Text as="p" variant="bodyMd">
                    {item.description}
                  </Text>
                </BlockStack>

                {"onClick" in item.action && item.action.onClick ? (
                  <Button onClick={item.action.onClick}>
                    {item.action.label}
                  </Button>
                ) : (
                  <Link
                    url={item.action.url ?? "#"}
                    external={item.action.external}
                    removeUnderline
                  >
                    <Text fontWeight="bold" as="p">
                      {item.action.label}
                    </Text>
                  </Link>
                )}
              </BlockStack>
            </Box>
          ))}
        </InlineGrid>
      </BlockStack>
    </Card>
  );
};
