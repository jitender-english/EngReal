import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
        <h1 className="heading tC">
                    <span className="db fs36 ttu fw400">TEST PAPER I <br /> Based on all Forms of Tenses (Active Voice)</span>
                    <span className="db fs24">Translate the following into English:</span>
                </h1>
                <br />
          <Exercise dataUrl="/api/lesson-test-tenses-active-voice" />
        </div>
      </main>
    </div>
  )
}
