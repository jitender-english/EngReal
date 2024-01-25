import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <h1 class="heading tC">
            <span class="db fs36 ttu mb10 fw400">LESSON 13</span>
            <span class="db fs24 fw700">Future Continuous Tense</span>
          </h1>
          <br />
          <h4 class="tC">Points to Remember</h4>
          <ol>
            <li>हिन्दी में यह Tense रहा होगा, रही होगी, रहे होंगे आदि में समाप्त होता है। इसका अनुवाद Present
              Participle से पहले will be अथवा shall be लगाकर किया जाता है ।</li>
            <li>Shall और will के प्रयोग के अन्तर का इस अध्याय में भी ध्यानं रखो (देखो अध्याय 12 ) । </li>
            <li>Negative Sentences में Present Participle से पहले &#39;Shall not be&#39; या &#39;Will not be&#39; लगाया जाता है।
            </li>
            <li>Interrogative Sentences में &#39;Shall &#39; या &#39; Will&#39; Subject के पहले लगाते हैं और ‘be&#39; subject के बाद
              । उसके उपरान्त present participle.</li>
          </ol>
          <br />
          <h2 class="mb10 fs18 fw700 tC">Model Sentences</h2>
          <h3 class="fw700 tC">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>परसों हम वार्षिक परीक्षा दे रहे होंगे।</p>
              <p>We shall be taking the Annual Examination day after tomorrow.</p>
            </li>
            <li>
              <p>मैं समय-समय पर आपको इस विषय की याद दिलाता रहूँगा।</p>
              <p>I shall be reminding you about this matter off and on.</p>
            </li>
            <li>
              <p>उस समय बढ़ई काम कर रहे होंगे।</p>
              <p>The carpenters will be working at that time.</p>
            </li>
            <li>
              <p>वह कई दिन अपने पति की मृत्यु का शोक मनाती रहेगी। </p>
              <p>She will be mourning the death of her husband for many days.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(b) Negative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>मैं कल इस समय घर पर नहीं रहा हूँगा।</p>
              <p>I shall not be going home at this time tomorrow.</p>
            </li>
            <li>
              <p>प्रधानमन्त्री इस समय भाषण नहीं दे रहे होंगे।</p>
              <p>The Prime Minister will not be delivering a lecture at this time.</p>
            </li>
            <li>
              <p>क्या वह समय-समय पर आपको मिलता नहीं रहेगा ?</p>
              <p>Will he not be seeing you off and on?</p>
            </li>
            <li>
              <p>वह इन दिनों अपने पिता की सहायता नहीं कर रहा होगा ।</p>
              <p>He will not be helping his father these days.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(c) Interrogative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>क्या वह कल शाम को मैच खेल रहा होगा ? </p>
              <p>Will he be playing the match the next evening?</p>
            </li>
            <li>
              <p>क्या तुम उसे बार-बार मिलते रहोगे ?</p>
              <p>Will you be seeing him time and again?</p>
            </li>
            <li>
              <p>क्या वह सदा के लिए विदेश जा रहा होगा ?</p>
              <p>Will he be going abroad/leaving india for good?</p>
            </li>
            <li>
              <p>जब हम स्टेशन पर पहुँचेंगे तो क्या गाड़ी जा रही होगी ?</p>
              <p>Will the train be moving when we reach the station?</p>
            </li>
          </ol>
          <br />

          <hr class="line-separator" />

          <br /><br />
          <h3 class="fw700 tC">EXERCISE</h3>
          <p class="tC">Translate the following into English:</p>
          <hr class="line-separator" />
          <br />
          <Exercise dataUrl="/api/lesson-13" />
        </div>
      </main>
    </div>
  )
}
