import Image from "next/image";
import IntroductionScreen from "./components/IntroductionScreen";
import AboutSelfScreen from "./components/AboutSelfScreen";
import MusicSheetGeneration from "./components/MusicSheetGeneration";
import SamplePreview from "./components/SamplePreview";
import ExportSheet from "./components/ExportSheet";

export default function Home() {
  return (
    <div>
      <IntroductionScreen />
      <AboutSelfScreen />
      <MusicSheetGeneration />
      <SamplePreview />
      <ExportSheet />
    </div>
  );
}
