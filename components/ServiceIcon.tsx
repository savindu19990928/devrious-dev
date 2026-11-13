import { Bot, Cpu, Globe, Layers, Plug } from "lucide-react";
import type { ServiceItem } from "@/data/devrious";

export function ServiceIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceItem["iconName"];
  className?: string;
}) {
  switch (name) {
    case "globe":
      return <Globe className={className} />;
    case "layers":
      return <Layers className={className} />;
    case "plug":
      return <Plug className={className} />;
    case "bot":
      return <Bot className={className} />;
    case "cpu":
      return <Cpu className={className} />;
  }
}

