import { videosData } from "@/data/videos-data";

export default function sitemap() {
  const videos = videosData.map((video) => {
    return {
      url: `https://solodin.live/video/${video.id}`,
      lastModified: new Date(),
    };
  });

  const tickers = videosData.flatMap((video) => {
    return video.sections.flatMap((section) => {
      return section.tickers.map((ticker) => {
        return {
          url: `https://solodin.live/ticker/${ticker}`,
          lastModified: new Date(),
        };
      });
    });
  });

  return [
    {
      url: "https://solodin.live/",
      lastModified: new Date(),
    },
    ...videos,
    ...tickers,
  ];
}