import Exercise from "@/components/Exercise";
import ExerciseHeader from "@/components/ExerciseHeader";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <header className="tC mb32">
          <p className="mb0">TEST PAPER II</p>
          <p className="mb0">Based on all Forms of Tenses (Passive Voice)</p>
        </header>

        <ExerciseHeader />
        <Exercise dataUrl="/api/lesson-test-tenses-passive-voice" />
        </div>
      </main>
    </div>
  )
}
