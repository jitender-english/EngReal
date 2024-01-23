import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 class="heading textCenter">
                    <span class="db fs30 ttu mb10 fw400">MISCELLANEOUS EXERCISE 2</span>
                    <span class="db fs24 fw700">[ Revision of Lessons 01-07 ] <br /> (Use of the Present Tense - All Forms)</span>
                </h1>
                

                <br />
                <p class="textCenter">Translate the following into English:</p>
                <hr class="line-separator" />
                <br />
          <Exercise dataUrl="/api/lesson-01-07" />
        </div>
      </main>
    </div>
  )
}
