import Link from 'next/link'


export default function Home() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <ul>
            <li><Link href="/lesson-01"><span className="lesson-marker">Lesson 01</span> <span className="lesson-name">The Use of &#39;is, am, are&#39;</span></Link></li>
            <li><Link href="/lesson-02"><span className="lesson-marker">Lesson 02</span> <span className="lesson-name">The Verb &#39;to be&#39; - Past Tense</span></Link></li>
            <li><Link href="/lesson-03"><span className="lesson-marker">Lesson 03</span> <span className="lesson-name">The Use of &#39;Has, Have, Had&#39;</span></Link></li>
            <li><Link href="/lesson-04"><span className="lesson-marker">Lesson 04</span> <span className="lesson-name">Present Indefinite Tense</span></Link></li>
            <li><Link href="/lesson-05"><span className="lesson-marker">Lesson 05</span> <span className="lesson-name">Present Continuous Tense</span></Link></li>
            <li><Link href="/lesson-06"><span className="lesson-marker">Lesson 06</span> <span className="lesson-name">Present Perfect Tense</span></Link></li>
            <li><Link href="/lesson-07"><span className="lesson-marker">Lesson 07</span> <span className="lesson-name">Present Perfect Continuous Tense</span>
            </Link></li>
            <li><Link href="/lesson-01-07"><span className="lesson-name">Revision of Lessons 01-07</span></Link></li>
            <li><Link href="/lesson-08"><span className="lesson-marker">Lesson 08</span> <span className="lesson-name">Past Indefinite Tense</span></Link></li>
            <li><Link href="/lesson-09"><span className="lesson-marker">Lesson 09</span> <span className="lesson-name">Past Continuous Tense</span></Link></li>
            <li><Link href="/lesson-10"><span className="lesson-marker">Lesson 10</span> <span className="lesson-name">Past Perfect Tense</span></Link></li>
            <li><Link href="/lesson-11"><span className="lesson-marker">Lesson 11</span> <span className="lesson-name">Past Perfect Continuous Tense</span></Link></li>
            <li><Link href="/lesson-08-11"><span className="lesson-name">Revision of Lessons 8-11</span></Link></li>
            <li><Link href="/lesson-12"><span className="lesson-marker">Lesson 12</span> <span className="lesson-name">Future Indefinite Tense</span></Link></li>
            <li><Link href="/lesson-13"><span className="lesson-marker">Lesson 13</span> <span className="lesson-name">Future Continuous Tense</span></Link></li>
            <li><Link href="/lesson-14"><span className="lesson-marker">Lesson 14</span> <span className="lesson-name">Future Perfect Tense</span></Link></li>
            <li><Link href="/lesson-15"><span className="lesson-marker">Lesson 15</span> <span className="lesson-name">Future Perfect Continuous Tense</span></Link></li>
            <li><Link href="/lesson-12-15"><span className="lesson-name">Revision of Lessons 12-15</span></Link></li>
            <li><Link href="/lesson-test-tenses-active-voice"><span className="lesson-name">Test Paper I  - Active Voice</span></Link></li>
          </ul>
          <br /><hr /><p className='ffSeg'>Learn english listening and speaking by by English movie</p><hr /><br />
          <ul>
            <li><span className='season-name'>Reacher</span> - 
              <Link href="/english/season/reacher/s02e01">S01E01 </Link>
              <Link href="/english/season/reacher/s02e02">S01E02 </Link> 
              <Link href="/english/season/reacher/s02e03">S01E03 </Link> 
              <Link href="/english/season/reacher/s02e04">S01E04 </Link>
            </li>
            <li><span className='season-name'>Criminal Record</span> - 
              <Link href="/english/season/criminal-record/s01e01">S01E01 </Link>
              <Link href="/english/season/criminal-record/s01e02">S01E02 </Link>
            </li>
          </ul>
          <br /><hr /><p className='ffSeg'>Learn hindi to english writing by Hindi movie</p><hr /><br />          
          <ul>
            <li><Link href="/hindi/movie/starfish">Starfish 2023</Link></li>
          </ul>
        </div>
      </main>
    </div>
  )
}
