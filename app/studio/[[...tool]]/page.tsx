import StudioConfig from "./studio-config";


export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    { tool: [] }
  ];
}

export default function StudioPage() {
  return <StudioConfig />;
}
