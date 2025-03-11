import Hero from "../../components/Hero/Hero";
import { roles } from "../../data/roles";
import MovingQueue from "../../components/Slider/MovingQueue";

export default function Home() {
  return (
    <div>
      <Hero/>
      <MovingQueue list={roles}/>

    </div>
    
  );
}
