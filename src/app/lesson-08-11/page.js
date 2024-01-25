import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 class="heading tC">
                    <span class="db fs36 ttu mb10 fw400">MISCELLANEOUS EXERCISE 3</span>
                    <span class="db fs24 fw700">[ Revision of Lessons 8-11 ] <br /> (Use of the Past Tense - All Forms)</span>
                </h1>
                

                <br />
                <p class="tC">Translate the following into English:</p>
                <hr class="line-separator" />
                <br />
          <Exercise dataUrl="/api/lesson-08-11" />
        </div>
      </main>
    </div>
  )
}
