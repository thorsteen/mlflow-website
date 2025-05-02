import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  Button,
  SectionLabel,
  CopyCommand,
  LogosCarousel,
  Grid,
  GridRow,
  GridItem,
  VerticalTabs,
  VerticalTabsList,
  VerticalTabsTrigger,
  VerticalTabsContent,
  SocialWidget,
} from "../components";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="flex flex-col items-center justify-center bg-[#0E1416] gap-8 min-h-screen">
      <div className="w-full px-20 mb-10">
        <SocialWidget variant="red" />
      </div>
    </div>
  );
}
