import Link from 'next/link'


export default function Home() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <ul>
            <li><Link href="/lesson-01"><span className="lesson-marker">Lesson 01</span> The Use of 'is, am, are'</Link></li>
            <li><Link href="/lesson-02"><span className="lesson-marker">Lesson 02</span> The Verb 'to be' - Past Tense</Link></li>
            <li><Link href="/lesson-03"><span className="lesson-marker">Lesson 03</span> The Use of 'Has, Have, Had'</Link></li>
            <li><Link href="/lesson-04"><span className="lesson-marker">Lesson 04</span> Present Indefinite Tense</Link></li>
            <li><Link href="/lesson-05"><span className="lesson-marker">Lesson 05</span> Present Continuous Tense</Link></li>
            <li><Link href="/lesson-06"><span className="lesson-marker">Lesson 06</span> Present Perfect Tense</Link></li>
            <li><Link href="/lesson-07"><span className="lesson-marker">Lesson 07</span> Present Perfect Continuous Tense
            </Link></li>
            <li><Link href="/lesson-01-07">Revision of Lessons 01-07</Link></li>
            <li><Link href="/lesson-08"><span className="lesson-marker">Lesson 08</span> Past Indefinite Tense</Link></li>
            <li><Link href="/lesson-09"><span className="lesson-marker">Lesson 09</span> Past Continuous Tense</Link></li>
            <li><Link href="/lesson-10"><span className="lesson-marker">Lesson 10</span> Past Perfect Tense</Link></li>
            <li><Link href="/lesson-11"><span className="lesson-marker">Lesson 11</span> Past Perfect Continuous Tense</Link></li>
            <li><Link href="/lesson-08-11">Revision of Lessons 8-11</Link></li>
            <li><Link href="/lesson-12"><span className="lesson-marker">Lesson 12</span> Future Indefinite Tense</Link></li>
            <li><Link href="/lesson-13"><span className="lesson-marker">Lesson 13</span> Future Continuous Tense</Link></li>
            <li><Link href="/lesson-14"><span className="lesson-marker">Lesson 14</span> Future Perfect Tense</Link></li>
            <li><Link href="/lesson-15"><span className="lesson-marker">Lesson 15</span> Future Perfect Continuous Tense</Link></li>
            <li><Link href="/lesson-12-15">Revision of Lessons 12-15</Link></li>
            <li><Link href="/lesson-test-tenses-active-voice">Test Paper I  - Active Voice</Link></li>
          </ul>
          <br /><hr /><br />
          <ul>
            <li>Reacher - 
              <Link href="/english/season/reacher/s02e01"> <span className='color-dark-secondary'>S01E01 </span></Link>, 
              <Link href="/english/season/reacher/s02e02"><span className='color-dark-secondary'>S01E02 </span></Link> 
              <Link href="/english/season/reacher/s02e03"><span className='color-dark-secondary'>S01E03 </span></Link> 
              <Link href="/english/season/reacher/s02e04"><span className='color-dark-secondary'>S01E04 </span></Link></li>
            <li>Criminal Record - <Link href="/english/season/criminal-record/s01e01"> <span className='color-dark-secondary'>S01E01 </span></Link><Link href="/english/season/criminal-record/s01e02"><span className='color-dark-secondary'>S01E02 </span></Link></li>
          </ul>
        </div>
      </main>
    </div>
  )
}
