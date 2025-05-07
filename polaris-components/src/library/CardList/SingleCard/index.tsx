import {
  Card,
  Box,
  BlockStack,
  Text,
  Button,
  Link,
  Image,
} from "@shopify/polaris";

import type { SingleCardProps } from "./types";

export function SingleCard({
  name,
  author,
  img,
  url,
  buttonText = "Add",
  onAdd,
}: SingleCardProps) {
  return (
    <Card background="bg-surface" padding="0">
      <div className="w-full max-h-[246px] overflow-hidden flex">
        <Link url={url} removeUnderline>
          <Image source={img} alt={`Screenshot of the ${name} theme`} />
        </Link>
      </div>

      <Box padding="400">
        <div className="flex justify-between items-start">
          <BlockStack gap="100">
            <Text as="p" variant="bodyMd" fontWeight="bold">
              <Link url={url} removeUnderline>
                {name}
              </Link>
            </Text>
            <Text as="span" variant="bodyMd">
              by {author}
            </Text>
          </BlockStack>
          <Button variant="secondary" size="medium" onClick={onAdd}>
            {buttonText}
          </Button>
        </div>
      </Box>
    </Card>
  );
}
