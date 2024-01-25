import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 class="heading textCenter">
                    <span class="db fs36 ttu mb10 fw400">MISCELLANEOUS EXERCISE 4 <br /> [ Revision of Lessons 12-15]</span>
                    <span class="db fs24 fw700">Translate the following into English:</span>
                </h1>
                <br />
          <Exercise dataUrl="/api/lesson-12-15" />
        </div>
      </main>
    </div>
  )
}
