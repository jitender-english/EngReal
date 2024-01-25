import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 className="heading tC">
                    <span className="db fs36 ttufw400">MISCELLANEOUS EXERCISE 3</span>
                    <span className="db fs24">[ Revision of Lessons 8-11 ] <br /> (Use of the Past Tense - All Forms)</span>
                </h1>
                

                <br />
                <p className="tC">Translate the following into English:</p>
                <hr className="line-separator" />
                <br />
          <Exercise dataUrl="/api/lesson-08-11" />
        </div>
      </main>
    </div>
  )
}
