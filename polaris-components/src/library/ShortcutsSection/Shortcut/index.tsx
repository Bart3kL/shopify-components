import {
  InlineGrid,
  InlineStack,
  BlockStack,
  Text,
  Box,
  Icon,
  Link,
} from "@shopify/polaris";
import { ChevronRightIcon } from "@shopify/polaris-icons";

import { ShortcutProps } from "./types";

export const Shortcut = ({ href, icon, subtitle, title }: ShortcutProps) => (
  <div className="[&_>a]:no-underline! hover:bg-[#F7F7F7]">
    <Link url={href}>
      <Box padding={"300"}>
        <InlineGrid columns={{ xs: "auto 1fr auto" }} gap="300">
          <Icon source={icon} tone="base" />

          <InlineGrid columns={{ xs: "1fr" }} gap="400">
            <BlockStack align="center">
              <InlineStack gap="200" wrap={false}>
                <Text tone="subdued" variant="bodyMd" as="span">
                  {title}
                </Text>
              </InlineStack>
              <Text tone="subdued" as="span" variant="bodySm">
                {subtitle}
              </Text>
            </BlockStack>
          </InlineGrid>

          <InlineStack align="center">
            <Icon source={ChevronRightIcon} tone="base" />
          </InlineStack>
        </InlineGrid>
      </Box>
    </Link>
  </div>
);
