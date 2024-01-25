import Exercise from "@/components/Exercise";
import ExerciseHeader from "@/components/ExerciseHeader";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 className="heading tC">
                    <span className="db fs36 ttu mb10 fw400">MISCELLANEOUS EXERCISE 2</span>
                    <span className="db fs24 fw700">[ Revision of Lessons 01-07 ] <br /> (Use of the Present Tense - All Forms)</span>
                </h1>
                

          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-01-07" />
        </div>
      </main>
    </div>
  )
}
