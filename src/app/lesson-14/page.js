import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <h1 class="heading textCenter">
            <span class="db fs36 ttu mb10 fw400">LESSON 14</span>
            <span class="db fs24 fw700">Future Perfect Tense</span>
          </h1>
          <br />
          <h4 class="textCenter">Points to Remember</h4>
          <ol>
            <li>हिन्दी में यह Tense चुका होगा, चुका हूँगा, चुके होंगे, चुकी होगी आदि में समाप्त होता है ।
              अंग्रेजी में इसे Past Participle अर्थात् Verb की तीसरी form से पहले will have अथवा shall have
              लगाकर बनाया जाता है ।</li>
            <li>Negative Sentences Past participle shall have not या will have not लगाते हैं।</li>
            <li>Interrogative Sentences Subjects shall will फिर Subject और उसके बाद main verb लगाया जाता है।
            </li>
            <li>Will तथा Shall का प्रयोग पाठ अध्याय 12 में दिया गया है।</li>
            <li>Complex Sentences Principal Clause Future Tense का प्रयोग होता है, परन्तु Subordinate Clause में
              Present Indefinite Tense का ही प्रयोग होता है । उदाहरणतः &#39;Will he have not got up before the
              sun rises?&#39; (देखो वाक्य C– 2, 4 ) । ऐसे वाक्यों में सदा समय दर्शाने वाला कोई न कोई शब्द अवश्य
              होता है। जैसे- तब तक से पहले, 10 बजे तक, बरसात से पहले, उस समय तक इत्यादि ।</li>
          </ol>
          <br />
          <h2 class="mb10 fs18 fw700 textCenter">Model Sentences</h2>
          <h3 class="fw700 textCenter">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>इस समय तक वह पुस्तक समाप्त कर चुका होगा ।</p>
              <p>He will have finished the book by now.</p>
            </li>
            <li>
              <p>तब तक मैं नहा चुका हूँगा ।</p>
              <p>I shall have taken my bath by then.</p>
            </li>
            <li>
              <p>दस बजे तक उन्होंने सामान बाँध लिया होगा ।</p>
              <p>They will have packed their luggage by ten.</p>
            </li>
            <li>
              <p>हमे इस मकान में रहते हुए कल चार वर्ष हो जायेंगे।</p>
              <p>We shall have lived in this house for four years tomorrow.</p>
            </li>

          </ol>
          <br />
          <h3 class="fw700 textCenter">(b) Negative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>गाड़ी चलने से पहले मुसाफिर स्टेशन पर नहीं पहुँच चुका होगा ।</p>
              <p>The traveller will not have reached the station before the train starts.</p>
            </li>
            <li>
              <p>रात होने से पहले हम अपने निर्धारित स्थान तक नहीं पहुँच चुके होंगे।</p>
              <p>We shall not have reached our destination before the night falls.</p>
            </li>
            <li>
              <p>उसके आने तक सब गवाह गवाही नहीं दे चुके होंगे ।</p>
              <p>All the witnesses will not have given their evidence/testified before he arrives.</p>
            </li>
            <li>
              <p>मैं कुछ समय पश्चात् पहाड़ की चोटी पर नहीं पहुँच चुका हूँगा ।</p>
              <p>I shall not have reached the top of the hill after some time.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 textCenter">(c) Interrogative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>क्या तुम एक सप्ताह में सारे मकान की सफेदी कर चुके दोगे ? </p>
              <p>Will you have white-washed the whole house within a week ?</p>
            </li>
            <li>
              <p>क्या सूर्य निकलने से पहले वह उठ चुका होगा ?</p>
              <p>Will he have got out of bed before the sun rises?</p>
            </li>
            <li>
              <p>क्या तुम्हारे आने से पहले ही हम खाना खा चुके होंगे ?</p>
              <p>Shall we have taken our meals before you arrive?</p>
            </li>
            <li>
              <p>क्या वर्षा आरम्भ होने से पूर्व ही बच्चे स्कूल पहुँच चुके होंगे ?</p>
              <p>Will the children have reached the school before it rains?</p>
            </li>

          </ol>
          <br />

          <hr class="line-separator" />

          <br /><br />
          <h3 class="fw700 textCenter">EXERCISE</h3>
          <p class="textCenter">Translate the following into English:</p>
          <hr class="line-separator" />
          <br />
          <Exercise dataUrl="/api/lesson-14" />
        </div>
      </main>
    </div>
  )
}
