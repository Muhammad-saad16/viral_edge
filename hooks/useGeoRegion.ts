import { useState, useEffect } from "react";

export type Region = "UAE" | "PAK";

export function useGeoRegion(): Region {
  const [region, setRegion] = useState<Region>("UAE");

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      const apis = [
        {
          url: "https://api.country.is/",
          parse: (d: Record<string, string>) => d.country,
        },
        {
          url: "https://ipwho.is/",
          parse: (d: Record<string, string>) => d.country_code,
        },
        {
          url: "https://ipapi.co/json/",
          parse: (d: Record<string, string>) => d.country_code,
        },
      ];

      for (const api of apis) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 4000);
          const res = await fetch(api.url, { signal: controller.signal });
          clearTimeout(timer);
          const data = await res.json();
          const code = api.parse(data);
          if (typeof code === "string" && !cancelled) {
            setRegion(code === "PK" ? "PAK" : "UAE");
            return;
          }
        } catch {
          continue;
        }
      }
    };

    detect();
    return () => { cancelled = true; };
  }, []);

  return region;
}
