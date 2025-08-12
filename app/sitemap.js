import { videosData } from "@/data/videos-data";

// Force static generation for static export
export const dynamic = 'force-static';

export default function sitemap() {
  const videos = Array.from(
    new Map(
      videosData.map((video) => [
        `https://solodin.live/video/${video.id}`,
        {
          url: `https://solodin.live/video/${video.id}`,
          lastModified: new Date(),
        },
      ])
    ).values()
  );

  const tickers = Array.from(
    new Map(
      videosData.flatMap((video) =>
        video.sections.flatMap((section) =>
          section.tickers.map((ticker) => [
            `https://solodin.live/ticker/${ticker}`,
            {
              url: `https://solodin.live/ticker/${ticker}`,
              lastModified: new Date(),
            },
          ])
        )
      )
    ).values()
  );

  return [
    {
      url: "https://solodin.live/",
      lastModified: new Date(),
    },
    ...videos,
    ...tickers,
  ];
}
