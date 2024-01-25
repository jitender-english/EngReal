import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <h1 class="heading textCenter">
            <span class="db fs36 ttu mb10 fw400">LESSON 9</span>
            <span class="db fs24 fw700">Past Continuous Tense</span>
          </h1>
          <br />
          <h4 class="textCenter">Points to Remember</h4>
          <ol>
            <li>Past Continuous Tense भूतकाल में किसी काम का जारी रहना प्रकट करता है और हिन्दी में यह Tense रहा था, रही थी, रहे थे, आदि में समाप्त होता है। इनका अनुवाद Present Participle form के पूर्व was या were लगाकर किया जाता है। याद रहे कि Verb की पहली form के बाद ‘ing&#39; लगाने से Present Participle बनता है ।</li>
            <li>He, she, it, I और Singular Nouns के साथ was तथा we, they, you और Plural Nouns के साथ were का प्रयोग होता है ।</li>
            <li>Interrogative वाक्यों में was या were का प्रयोग subject से पहले होता है | negative वाक्यों में &#39;was not&#39; या &#39; were not&#39; लगाये जाते हैं ।</li>
          </ol>
          <br />
          <h2 class="mb10 fs18 fw700 textCenter">Model Sentences</h2>
          <h3 class="fw700 textCenter">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li><p>मैं सैर कर रहा था ।</p><p>I was enjoying a stroll.</p></li>
            <li><p>वह अपने घर जा रहा था ।</p><p>He was going to his house.</p></li>
            <li><p>वह अपने इकलौते पुत्र की मृत्यु पर जोर-जोर से रो रही थी ।</p><p>She was weeping bitterly at the death of her only son.</p></li>
            <li><p>बूँदा बाँदी हो रही थी ।</p><p>It was drizzling.</p></li>
            <li><p>वे सर्दी से काँप रहे थे ।</p><p>They were shivering with cold.</p></li>
            <li><p>तुम शोर मचा रहे थे ।</p><p>You were making a noise. </p></li>


          </ol>
          <br />
          <h3 class="fw700 textCenter">(b) Negative Sentences</h3>
          <br />
          <ol><li><p>मैं तुम्हें गालियाँ नहीं दे रहा था।</p><p>I was not abusing you.</p></li>
            <li><p>डाक्टर साहब अपने मरीजों को दवाई नहीं दे रहे थे ।</p><p>The doctor was not giving medicine to his patients.</p></li>
            <li><p>दुकानदार सौदा नहीं बेच रहा था ।</p><p>The shopkeeper was not selling his goods.</p></li>
            <li><p>किसान खेतों में हल नहीं चला रहे थे।</p><p>The farmers were not ploughing their fields.</p></li>
            <li><p>हम फूल नहीं तोड़ रहे थे।</p><p>We were not plucking flowers.</p></li>
            <li><p>वे आपकी सहायता नहीं कर रहे थे ।</p><p>They were not helping you.</p></li>
          </ol>
          <br />
          <h3 class="fw700 textCenter">(c) Interrogative Sentences</h3>
          <br />
          <ol><li><p>क्या भिखारी दर-दर भीख माँग रहा था? </p><p>Was the beggar begging from door to door?</p></li>
            <li><p>क्या वह दर्द से कराह रहा था ?</p><p>Was he groaning with pain?</p></li>
            <li><p>क्या वह तुम्हें धोखा देने का प्रयत्न कर रहा था ?</p><p>Was he trying to deceive you?</p></li>
            <li><p>क्या वह तुम्हें आने से रोक रहा था ?</p><p>Was he detaining you?</p></li>
            <li><p>क्या वह आप पर हँस नहीं रहा था ?</p><p>Was he not laughing at you?</p></li>
            <li><p>क्या लड़के प्रार्थना बोल रहे थे ?</p><p>Were the students saying the prayer?</p></li>
            <li><p>क्या तुम झूठ नहीं बोल रहे थे ?</p><p>Were you not telling a lie?</p></li>
            <li><p>नहीं, मैं सच बोल रहा था ।</p><p>No, I was speaking the truth.</p></li>
          </ol>
          <br />

          <hr class="line-separator" />

          <br /><br />
          <h3 class="fw700 textCenter">EXERCISE</h3>
          <p class="textCenter">Translate the following into English:</p>
          <hr class="line-separator" />
          <br />
          <Exercise dataUrl="/api/lesson-09" />
        </div>
      </main>
    </div>
  )
}
