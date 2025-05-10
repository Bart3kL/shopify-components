import React, { useState } from "react";
import {
  Card,
  BlockStack,
  Box,
  Divider,
  Text,
  Button,
  FormLayout,
  TextField,
} from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import { SearchEngineListingProps } from "./types";

export function SearchEngineListing({
  title,
  description,
  url,
  shopName,
  handle,
  metaTitle,
  urlPrefix,
  price,
}: SearchEngineListingProps) {
  const [open, setOpen] = useState(false);

  const [seoTitle, setSeoTitle] = useState(metaTitle);
  const [seoDescription, setSeoDescription] = useState(description);
  const [seoHandle, setSeoHandle] = useState(handle);

  return (
    <Card roundedAbove="sm" background="bg-surface" padding={"0"}>
      <Box padding="0">
        <Box padding={"400"}>
          <BlockStack gap="200">
            <div className="flex justify-between items-center">
              <Text variant="headingSm" as="h2" fontWeight="semibold">
                Search engine listing
              </Text>
              {!open && (
                <Button
                  icon={EditIcon}
                  accessibilityLabel="Edit"
                  variant="tertiary"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>

            <Box paddingBlockStart="100">
              <BlockStack gap="200">
                <BlockStack>
                  <Text as="p" variant="bodyLg">
                    {shopName}
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    {url}
                  </Text>
                </BlockStack>

                <BlockStack gap="150">
                  <div className="text-[#005bd3] text-[18px]">
                    <Text as="p">{title}</Text>
                  </div>
                  <div className="line-clamp-2">
                    <Text as="p" variant="bodyMd" tone="subdued">
                      {seoDescription}
                    </Text>
                  </div>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    {price}
                  </Text>
                </BlockStack>
              </BlockStack>
            </Box>
          </BlockStack>
        </Box>

        {open && (
          <div className="[textarea]:text-[13px]">
            <Divider />

            <Box padding={"400"}>
              <BlockStack gap="400">
                <FormLayout>
                  <FormLayout.Group>
                    <TextField
                      label="Page title"
                      value={seoTitle}
                      onChange={setSeoTitle}
                      autoComplete="off"
                      helpText={`${seoTitle.length} of 70 characters used`}
                      placeholder={title}
                    />
                  </FormLayout.Group>
                  <FormLayout.Group>
                    <TextField
                      label="Meta description"
                      value={seoDescription}
                      onChange={setSeoDescription}
                      autoComplete="off"
                      helpText={`${seoDescription.length} of 160 characters used`}
                      multiline={4}
                    />
                  </FormLayout.Group>
                  <FormLayout.Group>
                    <TextField
                      label="URL handle"
                      value={seoHandle}
                      onChange={setSeoHandle}
                      prefix={urlPrefix}
                      autoComplete="off"
                      helpText={`https://xxxx.myshopify.com/${urlPrefix}${handle}`}
                    />
                  </FormLayout.Group>
                </FormLayout>
              </BlockStack>
            </Box>
          </div>
        )}
      </Box>
    </Card>
  );
}
