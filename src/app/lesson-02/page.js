import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">            
            <p className="ffSeg mb0">Lesson 2</p>
            <h1 className="mb0">PAST TENSE</h1>
            <p className="ffSeg fw700 mb0">The Verb &#39;to be&#39;</p>
            <p className="ffSeg fsi mb0">&#39;Was, Were&#39;</p>
          </header>

          <br />          
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list">
            <li>
              <p>Past Tense (भूतकाल ) में he, she, it तथा Singular Nouns के साथ &#39;was&#39; और you, we, they तथा Plural Nouns के साथ &#39;were&#39; का प्रयोग होता है। जैसे-</p>
              <p>Singular Nouns : Rama, Mohan, boy, girl, friend, flower और teacher के साथ was लगाया जायेगा तथा इनके Plurals के साथ &#39;were&#39; लगाया जायेगा, इसी प्रकार I के साथ &#39;was&#39;, we के साथ &#39;were&#39;, &#39;you&#39;, Singular तथा Plural के साथ were, he&#39;, &#39;she&#39;, &#39;it&#39; के साथ was तथा इनके Plural &#39;they&#39; के साथ were ही लगाया जाता है। </p>
            </li>
            <li>Interrogative वाक्यों में was या were को वाक्य के आरम्भ में Subject के पहले लगाया जाता है। </li>
            <li>Negative-Interrogative वाक्यों में was, were Subject पहले तथा not को Subject के बाद में। अन्त में प्रश्न चिन्ह (?) लगाना अनिवार्य है !</li>
            <li>वाक्य में &#39;not&#39; का प्रयोग करने से वाक्य Negative बन जाता है। Not को Subject के बाद में ही लगाया जाता है। </li>
          </ol>

          <br />
          <br />
          <h2 className="mb10  tC">Model Sentences</h2>
          <h3 className="tC">A-&#39;Was&#39;</h3>
          <p className="tC">Used with Pronouns of the Third Person - he, she, it, Singular Nouns and &#39;I&#39;</p>          
          <ol className="order-list translate-lines">
            <li>
              <p>वह हमारा नौकर था। </p>
              <p>He was our servant.</p>
            </li>
            <li>
              <p>महात्मा गाँधी हमारे देश के महान नेता थे। </p>
              <p>Mahatma Gandhi was a great leader of our country.</p>
            </li>
            <li>
              <p>तुम्हारे पिताजी एक दयालु व्यक्ति थे। </p>
              <p>Your father was a kind hearted man.</p>
            </li>
            <li>
              <p>वह एक कुख्यात डाकू था। </p>
              <p>He was a notorious dacoit.</p>
            </li>
            <li>
              <p>वह नर्स बड़ी कुशल थी। </p>
              <p>She was an efficient nurse.</p>
            </li>
            <li>
              <p>वह गुस्से में नहीं था। </p>
              <p>He was not angry.</p>
            </li>
            <li>
              <p>सोहन मेरा हितैषी न था। </p>
              <p>Sohan was not my well-wisher.</p>
            </li>
            <li>
              <p>क्या मैं परिश्रमी न था?</p>
              <p>Was I not hard-working?</p>
            </li>
            <li>
              <p>क्या गाड़ी विलम्ब से नहीं आई थी। </p>
              <p>Was the train not late?</p>
            </li>
            <li>
              <p>क्या उस सड़क की मरम्मत नहीं हो रही थी। </p>
              <p>Was not that road under repairs?</p>
            </li>
          </ol>

          <br /><br />
          <h3 className="tC">B-&#39;Were&#39;</h3>
          <p className="ffSeg tC mb0">Used with the Plural Pronouns &#39;They, We, You&#39; and all Plural Nouns</p>
          <ol className="order-list translate-lines">
            <li>
              <p>हम पक्के मित्र थे। </p>
              <p>We were chums ( fast friends ).</p>
            </li>
            <li>
              <p>तुम गप्पों में व्यस्त थे। </p>
              <p>You were busy in gossips.</p>
            </li>
            <li>
              <p>सब लड़के स्कूल में उपस्थित नहीं थे। </p>
              <p>All the boys were not present in the school.</p>
            </li>
            <li>
              <p>सब प्रश्न बिल्कुल आसान थे। </p>
              <p>All the questions were quite easy.</p>
            </li>
            <li>
              <p>हम कल सभा में उपस्थित न थे। </p>
              <p>We were not present in the meeting yesterday.</p>
            </li>
            <li>
              <p>हमारे सब अध्यापक अनुभवी नहीं थे। </p>
              <p>All our teachers were not experienced.</p>
            </li>
            <li>
              <p>क्या मजदूर काम कर रहे थे?</p>
              <p>Were the labourers at work?</p>
            </li>
            <li>
              <p>क्या खिलाड़ी खेल के मैदान में थे?</p>
              <p>Were the players in the play ground?</p>
            </li>
            <li>
              <p>क्या वे सब सन्तरे खट्टे न थे?</p>
              <p>Were all those oranges not sour?</p>
            </li>
            <li>
              <p>क्या हमारे पूर्वज शिक्षित न थे?</p>
              <p>Were not our ancestors (fore- fathers) educated?</p>
            </li>
          </ol>

          <br /><br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-02" />
        </div>
      </main>
    </div>
  )
}
