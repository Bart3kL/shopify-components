import {
  Card,
  Box,
  InlineStack,
  BlockStack,
  Text,
  Button,
  Icon,
  Grid,
} from "@shopify/polaris";
import { ThemeIcon, ExternalIcon } from "@shopify/polaris-icons";
import { SingleCard } from "./SingleCard";
import type { CardListProps } from "./types";

export function CardList({
  cardTitle,
  cardDesc,
  exploreTitle,
  exploreDesc,
  exploreBtnText,
  exploreBtnUrl,
  cards,
}: CardListProps) {
  return (
    <Card>
      <Box>
        <BlockStack gap="0">
          {(cardDesc || cardTitle) && (
            <Box paddingBlockEnd="600">
              <InlineStack gap="400" align="start" wrap={false}>
                <Box
                  background="bg-fill-info-secondary"
                  borderRadius="200"
                  padding="300"
                >
                  <Icon source={ThemeIcon} tone="info" />
                </Box>
                <Box>
                  {cardTitle && (
                    <Text variant="headingMd" as="h2">
                      {cardTitle}
                    </Text>
                  )}
                  {cardDesc && <Text as="p">{cardDesc}</Text>}
                </Box>
              </InlineStack>
            </Box>
          )}
          <Grid
            columns={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
            }}
          >
            {cards.map((cards) => (
              <SingleCard
                key={cards.name}
                {...cards}
                buttonText="Add"
                onAdd={() => {}}
              />
            ))}

            <div className="[&>div>div]:flex [&>div]:h-full">
              <Card background="bg-surface-secondary">
                <div className="flex flex-col justify-center">
                  <BlockStack gap="500" align="start">
                    <BlockStack gap="300">
                      <Text variant="headingMd" as="h3">
                        {exploreTitle}
                      </Text>
                      <Text as="p" variant="bodyMd">
                        {exploreDesc}
                      </Text>
                    </BlockStack>
                    <Box>
                      <Button
                        variant="secondary"
                        size="medium"
                        icon={ExternalIcon}
                        url={exploreBtnUrl}
                        external
                      >
                        {exploreBtnText}
                      </Button>
                    </Box>
                  </BlockStack>
                </div>
              </Card>
            </div>
          </Grid>
        </BlockStack>
      </Box>
    </Card>
  );
}
