import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { GetStartedWithMLflow } from "../components";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="flex flex-col items-center justify-center bg-[#0E1416] p-10">
      <GetStartedWithMLflow />
    </div>
  );
}
