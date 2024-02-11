import Exercise from "@/components/Exercise";
import ExerciseHeader from "@/components/ExerciseHeader";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <header className="tC mb32">
          <p className="mb0">TEST PAPER I</p>
          <p className="mb0">Based on all Forms of Tenses (Active Voice)</p>
        </header>

        <ExerciseHeader />
        <Exercise dataUrl="/api/lesson-test-tenses-active-voice" />
        </div>
      </main>
    </div>
  )
}
