import Image from 'next/image'
import ExerciseEng from "@/components/ExerciseEng";

export default function Page({params}) {
  return (
    <div className="site-wrapper">
    <main>
      <div className="content-wrapper">
        <ExerciseEng dataUrl={'/api/english/season/dark-matter/'+ params.episode} />        
      </div>
    </main>
  </div>
  )
}
