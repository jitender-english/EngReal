import Exercise from "@/components/Exercise";
import ExerciseHeader from "@/components/ExerciseHeader";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC mb32">
            <p className="mb0">Miscellaneous Exercise 2</p>
            <p className="mb0">[ Revision of Lessons 01-07 ]</p>
            <p className="mb0">( Use of the Present Tense - All Forms )</p>            
          </header>               

          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-01-07" />
        </div>
      </main>
    </div>
  )
}
