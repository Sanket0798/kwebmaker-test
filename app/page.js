import HomePage from "./components/Home/Home";
import { getHomepageData } from "./lib/api";

export default async function Home() {
  const homepageData = await getHomepageData();
  // console.log({homepageData});
  return <HomePage homepageData={homepageData.homepageData} />;
}
