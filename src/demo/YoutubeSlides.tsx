import * as React from "react";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  AARAV_YT,
  ABIGAIL_YT,
  SAMAIRA_YT,
  YOUSEF_YT,
} from "@/constants/videos";

export function YoutubeSlides() {
  const Videos = [
    { src: SAMAIRA_YT, title: "LEGO® SPIKE™ Prime" },
    { src: AARAV_YT, title: "LEGO® SPIKE™ Prime" },
    { src: ABIGAIL_YT, title: "LEGO® WeDo2.0 Alien" },
    { src: YOUSEF_YT, title: "LEGO® WeDo2.0 Moto" },
  ];

  return (
    <div className="flex flex-row gap-4">
      {Videos.map((video) => (
        <Card className="w-[300px] h-auto space-x-2" key={video.title}>
          <CardContent className="p-4">
            <div className="custom-youtube bg-white rounded-lg shadow-md p-4-youtube">
              <iframe
                src={video.src}
                allowFullScreen
                width={266.53}
                height={149.92}
                sandbox="allow-popups allow-scripts allow-same-origin"
                loading="lazy"
                className="w-full h-36 rounded"

              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xl font-bold">{video.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
