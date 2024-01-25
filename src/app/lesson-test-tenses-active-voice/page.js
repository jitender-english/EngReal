import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 class="heading textCenter">
                    <span class="db fs36 ttu mb10 fw400">TEST PAPER I <br /> Based on all Forms of Tenses (Active Voice)</span>
                    <span class="db fs24 fw700">Translate the following into English:</span>
                </h1>
                <br />
          <Exercise dataUrl="/api/lesson-test-tenses-active-voice" />
        </div>
      </main>
    </div>
  )
}
