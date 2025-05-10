import {
  InlineGrid,
  BlockStack,
  Tooltip,
  Text,
  Badge,
  Button,
  Card,
  Divider,
} from "@shopify/polaris";

import { PricingPlansProps } from "./types";

export function PricingPlans({ plans }: PricingPlansProps) {
  return (
    <InlineGrid columns={{ xs: 1, md: 3 }} gap="200">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="[&>div]:h-full [&>div>div]:flex [&>div>div]:flex-col [&>div>div]:justify-between"
        >
          <Card background="bg-surface">
            <BlockStack gap="400">
              <BlockStack gap="100">
                <div className="flex justify-between items-center">
                  <Text as="h2" variant="bodyLg">
                    {plan.name}
                  </Text>

                  {plan.badge && (
                    <Badge size="small" tone={"info"}>
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <Text as="p" variant="bodySm" tone="subdued">
                  {plan.description}
                </Text>
              </BlockStack>

              <BlockStack gap="400">
                <div className="flex gap-1 items-center">
                  <Text as="p" variant="headingXl">
                    {plan.priceLabel}
                  </Text>
                  <Text as="p" variant="bodyMd">
                    / month
                  </Text>
                </div>

                <Divider />

                <ul className="text-left">
                  {plan.features.map((feat) => (
                    <li key={feat.label}>
                      {feat.info ? (
                        <>
                          <Tooltip content={feat.info}>
                            <div className="border-b border-dashed border-border-subdued pb-[2px] w-fit">
                              <Text variant="bodySm" as="span" tone="subdued">
                                {feat.label}
                              </Text>
                            </div>
                          </Tooltip>
                        </>
                      ) : (
                        <Text variant="bodySm" as="span" tone="subdued">
                          {feat.label}
                        </Text>
                      )}
                    </li>
                  ))}
                </ul>
              </BlockStack>
            </BlockStack>
            <div className=" w-full mt-4 ">
              <Button
                fullWidth
                download
                variant="primary"
                size="medium"
                disabled={plan.buttonDisabled}
                url={plan.buttonLink}
                accessibilityLabel={plan.buttonLabel}
                external={plan.buttonLink ? true : false}
              >
                {plan!.buttonLabel}
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </InlineGrid>
  );
}
