import Exercise from "@/components/Exercise";
import ExerciseHeader from "@/components/ExerciseHeader";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <header className="tC mb32">
            <p className="mb0">Miscellaneous Exercise 3</p>
            <p className="mb0">[ Revision of Lessons 08-11 ]</p>
            <p className="mb0">( Use of the Past Tense - All Forms )</p>
        </header>

          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-08-11" />
        </div>
      </main>
    </div>
  )
}
