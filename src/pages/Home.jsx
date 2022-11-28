import Hero from "../components/Hero";
import NewReleases from "../components/NewReleases";
import YourArea from "../components/YourArea";

export default function Home() {
  return (
    <main className={`md:pt-20 md:pl-20 md:pr-12`}>
      <Hero />
      <NewReleases />
      <YourArea />
    </main>
  );
}
