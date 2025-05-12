import React, { useCallback, useState } from "react";
import {
  BlockStack,
  InlineStack,
  Box,
  Text,
  Divider,
  Button,
  Image,
  Card,
} from "@shopify/polaris";
import { ChevronLeftIcon, ChevronRightIcon } from "@shopify/polaris-icons";

import { SliderProps } from "./types";

export const Slider = ({
  slides,
  initialSlide = 0,
  onSlideChange,
}: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(initialSlide);

  const handlePrev = useCallback(() => {
    setActiveIndex((v) => {
      const next = Math.max(0, v - 1);
      if (onSlideChange) onSlideChange(next);
      return next;
    });
  }, [onSlideChange]);

  const handleNext = useCallback(() => {
    setActiveIndex((v) => {
      const next = Math.min(slides.length - 1, v + 1);
      if (onSlideChange) onSlideChange(next);
      return next;
    });
  }, [slides.length, onSlideChange]);

  const slide = slides[activeIndex];

  return (
    <Card>
      <Box width="100%">
        <Box width="100%">
          <div
            className={`flex flex-col md:flex-row items-center justify-center`}
          >
            <Image
              source={slide.image}
              width={250}
              height={250}
              className="w-[250px] h-[250px] min-w-[250px] object-contain"
              alt={slide.imageAlt ?? ""}
            />

            <Box
              paddingBlockStart="200"
              paddingBlockEnd="400"
              paddingInlineStart="400"
              paddingInlineEnd="400"
              width="100%"
            >
              <BlockStack gap="200">
                <Text as="h5" variant="headingMd" fontWeight="semibold">
                  {slide.heading}
                </Text>
                <Text as="p" variant="bodyMd">
                  {slide.description}
                </Text>
                {slide.subheading && (
                  <Text as="h5" variant="bodyMd" fontWeight="semibold">
                    <span style={{ fontWeight: "normal" }}>
                      {slide.subheading}
                    </span>
                  </Text>
                )}
              </BlockStack>
            </Box>
          </div>
        </Box>
      </Box>
      <div className="m-2" />
      <Divider borderColor="border-inverse-active" />
      <Box
        width="100%"
        paddingBlockStart="400"
        paddingBlockEnd="400"
        paddingInlineStart="400"
        paddingInlineEnd="400"
      >
        <InlineStack align="center" blockAlign="center" wrap gap="400">
          <nav aria-label="Pagination">
            <InlineStack gap="0">
              <Button
                variant="secondary"
                icon={ChevronLeftIcon}
                accessibilityLabel="Previous"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                size="medium"
              />

              <Box
                paddingBlockStart="0"
                paddingBlockEnd="0"
                paddingInlineStart="300"
                paddingInlineEnd="300"
              >
                <Text variant="bodyMd" tone="subdued" as="span">
                  {activeIndex + 1}/{slides.length}
                </Text>
              </Box>

              <Button
                variant="secondary"
                icon={ChevronRightIcon}
                accessibilityLabel="Next"
                onClick={handleNext}
                disabled={activeIndex === slides.length - 1}
                size="medium"
              />
            </InlineStack>
          </nav>
        </InlineStack>
      </Box>
    </Card>
  );
};
