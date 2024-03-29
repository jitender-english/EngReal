import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">
            <p className="ffSeg mb0">Lesson 9</p>
            <h1 className="mb0">Past Continuous Tense</h1>
          </header>
          
          <br />
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list">
            <li>Past Continuous Tense भूतकाल में किसी काम का जारी रहना प्रकट करता है और हिन्दी में यह Tense रहा था, रही थी, रहे थे, आदि में समाप्त होता है। इनका अनुवाद Present Participle form के पूर्व was या were लगाकर किया जाता है। याद रहे कि Verb की पहली form के बाद ‘ing&#39; लगाने से Present Participle बनता है ।</li>
            <li>He, she, it, I और Singular Nouns के साथ was तथा we, they, you और Plural Nouns के साथ were का प्रयोग होता है ।</li>
            <li>Interrogative वाक्यों में was या were का प्रयोग subject से पहले होता है | negative वाक्यों में &#39;was not&#39; या &#39; were not&#39; लगाये जाते हैं ।</li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <p className="ffSeg mb0">Model Sentences</p>
            <h2 className="mb0">(a) Affirmative Sentences</h2>
          </header>          
          <ol className="order-list translate-lines">
            <li><p>मैं सैर कर रहा था ।</p><p>I was enjoying a stroll.</p></li>
            <li><p>वह अपने घर जा रहा था ।</p><p>He was going to his house.</p></li>
            <li><p>वह अपने इकलौते पुत्र की मृत्यु पर जोर-जोर से रो रही थी ।</p><p>She was weeping bitterly at the death of her only son.</p></li>
            <li><p>बूँदा बाँदी हो रही थी ।</p><p>It was drizzling.</p></li>
            <li><p>वे सर्दी से काँप रहे थे ।</p><p>They were shivering with cold.</p></li>
            <li><p>तुम शोर मचा रहे थे ।</p><p>You were making a noise. </p></li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(b) Negative Sentences</h2>
          </header>
          <ol className="order-list translate-lines"><li><p>मैं तुम्हें गालियाँ नहीं दे रहा था।</p><p>I was not abusing you.</p></li>
            <li><p>डाक्टर साहब अपने मरीजों को दवाई नहीं दे रहे थे ।</p><p>The doctor was not giving medicine to his patients.</p></li>
            <li><p>दुकानदार सौदा नहीं बेच रहा था ।</p><p>The shopkeeper was not selling his goods.</p></li>
            <li><p>किसान खेतों में हल नहीं चला रहे थे।</p><p>The farmers were not ploughing their fields.</p></li>
            <li><p>हम फूल नहीं तोड़ रहे थे।</p><p>We were not plucking flowers.</p></li>
            <li><p>वे आपकी सहायता नहीं कर रहे थे ।</p><p>They were not helping you.</p></li>
          </ol>
          
          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(c) Interrogative Sentences</h2>
          </header>
          <ol className="order-list translate-lines"><li><p>क्या भिखारी दर-दर भीख माँग रहा था? </p><p>Was the beggar begging from door to door?</p></li>
            <li><p>क्या वह दर्द से कराह रहा था ?</p><p>Was he groaning with pain?</p></li>
            <li><p>क्या वह तुम्हें धोखा देने का प्रयत्न कर रहा था ?</p><p>Was he trying to deceive you?</p></li>
            <li><p>क्या वह तुम्हें आने से रोक रहा था ?</p><p>Was he detaining you?</p></li>
            <li><p>क्या वह आप पर हँस नहीं रहा था ?</p><p>Was he not laughing at you?</p></li>
            <li><p>क्या लड़के प्रार्थना बोल रहे थे ?</p><p>Were the students saying the prayer?</p></li>
            <li><p>क्या तुम झूठ नहीं बोल रहे थे ?</p><p>Were you not telling a lie?</p></li>
            <li><p>नहीं, मैं सच बोल रहा था ।</p><p>No, I was speaking the truth.</p></li>
          </ol>
          
          <br />
          <br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-09" />
        </div>
      </main>
    </div>
  )
}
