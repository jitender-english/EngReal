import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC mb32">
            <p className="mb0">Miscellaneous Exercise 4</p>
            <p className="mb0">[ Revision of Lessons 12-15 ]</p>
            <p className="mb0">Translate the following into English:</p>
          </header>
          
          <br />
          <Exercise dataUrl="/api/lesson-12-15" />
        </div>
      </main>
    </div>
  )
}
