import Image from 'next/image'
import Exercise from "@/components/Exercise";

export default function Page(parm) {
  return (
    <div className="site-wrapper">
    <main>
      <div className="content-wrapper">
        <h1 className="heading textCenter">
          <span className="db fs30 ttu mb10 fw400">LESSON 1</span>
          <span className="db fs24 fw700">The Use of &apos;is, am, are&apos;</span>
        </h1>
        <h3 className="fw700 textCenter">EXERCISE</h3>
        <p className="textCenter">Translate the following into English:</p>
        <hr className="line-separator" />
        <br />
        <Exercise dataUrl="/api/english/season/reacher/s02e01" />
        
      </div>
    </main>
  </div>
  )
}
