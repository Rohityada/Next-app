import Hero from '../components/hero';
import homeImg from '../../public/home.jpg';

export default function Home() {
  return (
    <Hero
    imgData={homeImg}  // Use the direct URL path for images in the public folder
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}

