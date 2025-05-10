import React from "react";
import {
  Card,
  Box,
  InlineStack,
  Text,
  Button,
  Icon,
  Divider,
  Tooltip,
} from "@shopify/polaris";
import { InfoIcon } from "@shopify/polaris-icons";

import { Shortcut } from "./Shortcut";

import { ShortcutsSectionProps } from "./types";

export const ShortcutsSection = ({
  title,
  infoUrl,
  shortcuts,
}: ShortcutsSectionProps) => (
  <Card>
    <InlineStack gap="100">
      <Text as="h2" variant="headingSm">
        {title}
      </Text>
      <Tooltip content="Learn more">
        <Button
          icon={<Icon source={InfoIcon} />}
          variant="plain"
          accessibilityLabel="Learn more"
          url={infoUrl}
        />
      </Tooltip>
    </InlineStack>

    <Box paddingBlockStart={"200"}>
      <div className="border-[.0625rem] b-[#e3e3e3] rounded-[.5rem]">
        {shortcuts.map((shortcut, idx) => (
          <React.Fragment key={shortcut.title}>
            {idx > 0 && (
              <Box paddingInlineEnd={"300"} paddingInlineStart="300">
                <Divider />
              </Box>
            )}
            <Shortcut {...shortcut} />
          </React.Fragment>
        ))}
      </div>
    </Box>
  </Card>
);
