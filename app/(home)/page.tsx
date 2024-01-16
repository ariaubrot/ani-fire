"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetAllAnime } from "@/lib/query-api";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const { data, isLoading } = useGetAllAnime();
  const [query, setQuery] = useState<string>("");

  if (isLoading) return null;

  return (
    <div className="w-full h-auto max-w-[1220px] my-4 mx-auto xl:px-0 px-4">
      <div className="flex gap-x-0 items-end">
        <img src="/assets/shigure-ui-dance.gif" alt="logo" width={80} height={72} />
        <p className="text-6xl font-bold leading-none">
          Ani
          <span className="text-[#FF003D]">Fire</span>
        </p>
      </div>

      <div className="flex w-full items-center gap-x-6">
        <div className="w-full">
          <div className="w-full gap-5 h-auto my-8 flex sm:flex-row flex-col">
            <Input
              className="rounded-full h-14 text-lg pl-6 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="One piece"
            />
            <Button
              asChild
              className="rounded-full h-14 w-full sm:w-14 shrink-0"
            >
              <a href={`/search?keyword=${query}`} className={cn(!query && "pointer-events-none opacity-70")}>
                <SearchIcon className="h-6 w-6" />
              </a>
            </Button>
          </div>
          <div className="flex w-full">
            <p>
              <span className="font-medium mr-2 text-primary-foreground">Top search:</span>
              {isLoading
                ? "loading..."
                : data?.trendingAnimes.map((anime) => (
                    <a
                      href={`/search?keyword=${anime.name}&page=1`}
                      key={anime.id}
                      className="hover:text-[#FF003D] duration-150"
                    >
                      {anime.name}
                      {", "}
                    </a>
                  ))}
            </p>
          </div>

      <Button asChild className="w-full rounded-none mt-3">
        <Link href="/home">
          Visit full site
        </Link>
      </Button>
        </div>

        <div className="relative hidden lg:block h-[30vw] max-h-72 max-w-[34rem] min-w-[26rem] w-[60vw]">
          <img
            src="/assets/shigure-ui-dance.gif"
            alt="hinata shoyo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl text-pretty text-primary-foreground font-semibold">AniFire: A site which is made just for educational purpose and have no intentions to get any revenew and others.</h2>
        <p className="text-muted-foreground text-sm">This website is free of ads and made my a solo developer which have no intention to make this public if anyone get to know this website from any people please exit this site. This is made to showcase on my developer portfolio! ❤️</p>
      </div>
    </div>
  );
};
export default Home;
