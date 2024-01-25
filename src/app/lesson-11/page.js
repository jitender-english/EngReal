import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">
            <p className="ffSeg mb0">LESSON 11</p>
            <h1 className="mb0">Past Perfect Continuous Tense</h1>
          </header>
          
          <br />
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list">
            <li>यह Tense हिन्दी में रहा था, रही थी, रहे थे आदि में समाप्त होता है तथा ऐसे कार्य प्रकट करता है जो Past में आरम्भ होकर जारी रहा हो तथा समाप्त हुआ हो। इसलिये इन वाक्यों में समय की अवधि बताने वाले शब्द अवश्य होते हैं, जैसे- एक घण्टे से, 1960 से मंगलवार से, कई सप्ताह से इत्यादि ।</li>
            <li>इस Tense को बनाने के लिये Present Participle से पहले had been लगाया जाता है। स्मरण रहे कि Present Participle verb की पहली form के साथ &#39;ing&#39; लगाकर बनाया जाता है ।</li>
            <li>समय को प्रकट करने के लिए &#39;since &#39; तथा &#39;for&#39; का प्रयोग किया जाता है। Period of time अर्थात् समय की अवधि बताने वाले शब्द - दो दिन से, चार सप्ताह से, कई वर्ष से इत्यादि - के साथ &#39;for&#39; का प्रयोग होता है और Point of time अर्थात् नियत समय को प्रकट करने वाले शब्द - सुबह से, 1960 से, मंगलवार से इत्यादि के साथ &#39;since&#39; का प्रयोग होता है ।</li>
            <li>Negative Sentences present Participle 3 had been बीच में &#39;not&#39; लगाया जाता है । Interrogative sentences में had को पहले लगा दिया जाता है और फिर Subject और उसके उपरान्त been तथा Participle (देखो भाग B )!</li>
            <li><p>ऐसे वाक्यों में जिनके दो भाग होते हैं पहले भाग में Present Perfect - Continuous और दूसरे भाग में Past Indefinite का प्रयोग होता है (देखो A-4; B-3, 4; C-3, 5)।</p><p>Note करो कि इस Tense का Passive Voice नहीं होता है ।</p></li>
          </ol>
          <br />
          <h2 className="tC">Model Sentences</h2>
          <h3 className="tC">(a) Affirmative Sentences</h3>
          <br />
          <ol className="order-list translate-lines">
            <li>
              <p>वह प्रातःकाल सात बजे से सो रहा था।</p>
              <p>He had been sleeping since seven in the morning.</p>
            </li>
            <li>
              <p>गाड़ी दो घंटे से चल रही थी ।</p>
              <p>The train had been running for two hours.</p>
            </li>
            <li>
              <p>मैं इस दुकान को चार साल से चला रहा था ।</p>
              <p>I had been running this shop for the last four years.</p>
            </li>
            <li>
              <p>जब से वह आया, वह हमसे बातें कर रहा था ।</p>
              <p>He had been talking to us since he came.</p>
            </li>
            <li>
              <p>यह लड़का पिछले तीन दिन से देर से आ रहा था ।</p>
              <p>This boy had been coming late for the last three days.</p>
            </li>
          </ol>
          <br />
          <h3 className="tC">(b) Negative Sentences</h3>
          <br />
          <ol className="order-list translate-lines">
            <li>
              <p>वह कई दिनों से मुझे चिट्ठी नहीं लिख रहा था ।</p>
              <p>He had not been writing to me for many days.</p>
            </li>
            <li>
              <p>मैं प्रातः से अपनी पुस्तकें नहीं दोहरा रहा था ।</p>
              <p>I had not been revising my books since morning.</p>
            </li>
            <li>
              <p>तुम्हारा पत्र प्राप्त होने से पहले मैं कई दिनों से तुम्हें पत्र डालने का विचार नहीं कर रहा
                था।</p>
              <p>I had not been thinking of posting a letter to you before I got your letter.</p>
            </li>
            <li>
              <p>पुलिस के पहुँचने से पहले चोर 5 बजे सुबह से घर में सेंध लगाने की चेष्टा नहीं कर रहे थे ।</p>
              <p>The thieves had not been trying to break into the house since 5 o&#39;clock in the morning before
                the police reached there.</p>
            </li>
            <li>
              <p>वह तीन सितम्बर से अपने कालिज नहीं जा रही थी । </p>
              <p>She had not been attending the college since 3rd September.</p>
            </li>
          </ol>
          <br />
          <h3 className="tC">(c) Interrogative Sentences</h3>
          <br />
          <ol className="order-list translate-lines">
            <li>
              <p>क्या वह दो दिन से यह लेख लिख रहा था ?</p>
              <p>Had he been writing this article for two days?</p>
            </li>
            <li>
              <p>क्या वह तीन बजे से मेरी प्रतीक्षा कर रहा था ?</p>
              <p>Had he been wainting for me since 3 o&#39;clock?</p>
            </li>
            <li>
              <p>क्या उसके यहाँ आने से पहले हम पत्र पढ़ रहे थे ?</p>
              <p>Had we been reading the letter before he came here?</p>
            </li>
            <li>
              <p>तुम इतने दिन से वहाँ क्या कर रहे थे ?</p>
              <p>What had you been doing there for so many days?</p>
            </li>
            <li>
              <p>क्या मालगाड़ी से टकराने से पहले हमारी गाड़ी दो घण्टे से पूरी गति पर चल रही थी ?</p>
              <p>Had our train been running at full speed for two hours before it collided with the goods
                train?</p>
            </li>
            <li>
              <p>क्या दो घण्टे से वर्षा नहीं हो रही थी ?</p>
              <p>Had it not been raining for two hours ?</p>
            </li>
          </ol>
          <br /><br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-11" />
        </div>
      </main>
    </div>
  )
}
