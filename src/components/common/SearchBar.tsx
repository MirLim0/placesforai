"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchSchema = z.object({
  query: z.string().min(1, "검색어를 입력하세요."),
});

type SearchValues = z.infer<typeof searchSchema>;

export function SearchBar() {
  const router = useRouter();
  const form = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: "" },
  });

  function handleSearch(values: SearchValues) {
    if (values.query.trim()) {
      router.push(`/search?q=${encodeURIComponent(values.query)}`);
    }
  }

  function handleRandom() {
    router.push("/random");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="flex items-center w-full mx-0 md:mx-auto"
      >
        {/* <Button onClick={handleRandom} variant="outline" className="mr-2">
          <Shuffle className="w-4 h-4 text-neutral-500" />
        </Button> */}
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="text"
                  className="text-neutral-900 px-4 py-2 placeholder:text-neutral-400"
                  placeholder="여기에서 검색"
                  {...field}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") form.handleSubmit(handleSearch)();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="ml-2">
          <Search className="w-4 h-4 text-neutral-500" />
        </Button>
        <Button type="submit" variant="outline" className="ml-2">
          <ArrowRight className="w-4 h-4 text-neutral-500" />
        </Button>
      </form>
    </Form>
  );
}
