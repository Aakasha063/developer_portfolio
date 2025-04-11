import { personalData } from "@/utils/data/personal-data";
import HomeContent from "./components/homepage/home-content";
import ClientWrapper from "./components/client-wrapper";

// Skip SSG for the homepage
export const dynamic = 'force-dynamic';

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}&per_page=100`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <ClientWrapper>
      <HomeContent blogs={blogs} />
    </ClientWrapper>
  )
};