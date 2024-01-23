import Image from 'next/image'
import ExerciseEng from "@/components/ExerciseEng";

export default function Page(parm) {
  return (
    <div className="site-wrapper">
    <main>
      <div className="content-wrapper">
        <ExerciseEng dataUrl="/api/english/season/reacher/s02e01" />        
      </div>
    </main>
  </div>
  )
}
