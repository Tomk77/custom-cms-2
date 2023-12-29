"use client";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [result, setResult] = useState("Not sent yet");
  const [inputValue, setInputValue] = useState<string>("");

  const pages = api.page.getAll.useQuery();

  const createPage = api.page.create.useMutation({
    onSuccess: () => {
      setResult("SUCCESS");
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>
        <Input
          value={inputValue}
          className="text-black"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      <div
        className="mt-3"
        onClick={() => {
          console.log("HOI");
        }}
      >
        <Button
          onClick={() => {
            createPage.mutate({ title: inputValue });
          }}
          className="bg-white text-black"
        >
          Create new page
        </Button>
      </div>

      <div className="mt-5">
        <h1>Result: {result}</h1>
      </div>

      <div className="mt-5">
        {pages.data?.map((page) => (
          <div className="border-t border-white">
            <div>{JSON.stringify(page)}</div>
            {Object.entries(page).map(([key, value]) => (
              <p>
                {key}: {typeof value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
