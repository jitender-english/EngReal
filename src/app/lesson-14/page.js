import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">
            <p className="ffSeg mb0">LESSON 14</p>
            <h1 className="mb0">Future Perfect Tense</h1>
          </header>

          <br />
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list translate-lines">
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
          <br />
          <header className="tC mb32">
            <p className="ffSeg mb0">Model Sentences</p>
            <h2 className="mb0">(a) Affirmative Sentences</h2>
          </header>
          <ol className="order-list translate-lines">
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
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(b) Negative Sentences</h2>
          </header>
          <ol className="order-list translate-lines">
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
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(c) Interrogative Sentences</h2>
          </header>
          <ol className="order-list translate-lines">
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
          <br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-14" />
        </div>
      </main>
    </div>
  )
}
