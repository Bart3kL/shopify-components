import React, { useState } from "react";
import {
  Card,
  Box,
  InlineStack,
  BlockStack,
  Text,
  Button,
  Tooltip,
} from "@shopify/polaris";
import { XIcon, ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";

import { SetupGuideProps } from "./types";
import { SetupGuideTaskItem } from "./SetupGuideTaskItem";
import { circleProgress } from "./circleProgress";

export const SetupGuideAccordion = ({
  completedTasks,
  totalTasks,
  header,
  description,
  onDismiss,
  tasks,
}: SetupGuideProps) => {
  const firstActive = tasks.findIndex((t) => !t.complete);
  const [activeTask, setActiveTask] = useState(
    firstActive >= 0 ? firstActive : 0
  );
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Card padding={"200"}>
      <Box minHeight="100%">
        <Box padding={"200"}>
          <InlineStack align="space-between">
            <InlineStack gap="200">
              <Box>
                {circleProgress({ value: completedTasks, total: totalTasks })}
              </Box>
              <Text variant="bodySm" as="span" tone="subdued">
                {completedTasks} of {totalTasks} tasks complete
              </Text>
            </InlineStack>
            <InlineStack gap="0">
              <Tooltip content="Dismiss">
                <Button icon={XIcon} variant="plain" onClick={onDismiss} />
              </Tooltip>
              <Tooltip content={collapsed ? "Expand guide" : "Collapse guide"}>
                <Button
                  icon={collapsed ? ChevronDownIcon : ChevronUpIcon}
                  variant="plain"
                  onClick={() => setCollapsed(!collapsed)}
                  aria-expanded={!collapsed}
                />
              </Tooltip>
            </InlineStack>
          </InlineStack>

          <Box paddingBlockStart="200">
            <Text variant="headingMd" as="h2">
              {header}
            </Text>
          </Box>
          <Box paddingBlockStart="100" paddingBlockEnd="300">
            <Text as="p" tone="subdued">
              {description}
            </Text>
          </Box>
        </Box>

        {collapsed && (
          <BlockStack gap="0">
            {tasks.map((task, i) => (
              <SetupGuideTaskItem
                key={task.id}
                {...task}
                expanded={activeTask === i}
                onExpand={() => setActiveTask(i)}
              />
            ))}
          </BlockStack>
        )}
      </Box>
    </Card>
  );
};
