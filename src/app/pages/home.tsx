import { HeroSection } from '../components/hero-section';
import { CoursesSection } from '../components/courses-section';
import { FeaturesSection } from '../components/features-section';
import { PhysicalTrainingSection } from '../components/physical-training-section';
import { SuccessSection } from '../components/success-section';
import { DailyRoutineSection } from '../components/daily-routine-section';
import { AdmissionCTASection } from '../components/admission-cta-section';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <FeaturesSection />
      <PhysicalTrainingSection />
      <SuccessSection />
      <DailyRoutineSection />
      <AdmissionCTASection />
    </>
  );
}
