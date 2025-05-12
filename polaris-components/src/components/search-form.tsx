import { useState, useEffect, useMemo } from "react";

import { Search } from "lucide-react";

import { Label } from "@/src/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/src/components/ui/sidebar";
import { debounce } from "../lib/debounce";

export function SearchForm({
  searchValue,
  setSearchValue,
  ...props
}: React.ComponentProps<"form"> & {
  searchValue: string;
  setSearchValue: (value: string) => void;
}) {
  const [value, setValue] = useState(searchValue);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const debouncedSetSearchValue = useMemo(
    () => debounce(setSearchValue, 300),
    [setSearchValue]
  );

  useEffect(() => {
    debouncedSetSearchValue(value);
  }, [value, debouncedSetSearchValue]);

  useEffect(() => {
    return () => {
      debouncedSetSearchValue.cancel();
    };
  }, [debouncedSetSearchValue]);

  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search components..."
            className="pl-8"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
