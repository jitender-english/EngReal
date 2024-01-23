import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <h1 class="heading textCenter">
            <span class="db fs30 ttu mb10 fw400">LESSON 15</span>
            <span class="db fs24 fw700">Future Perfect Continuous Tense</span>
          </h1>
          <br />
          <h4 class="textCenter">Points to Remember</h4>
          <ol>
            <li><p>हिन्दी में यह Tense रहा होगा, रही होगी, रहे होंगे इत्यादि में समाप्त होता है। प्रत्येक वाक्य में कार्य के जारी रहने की सूचना मिलती है और उसके कुछ हो चुकने की भी । ऐसे वाक्यों का अनुवाद Present Participle से पहले shall have been या will have been लगाकर किया जाता है। First Person अर्थात् I या we के साथ shall, बाकी सबके साथ will लगाया जाता है।</p>
              <p>Negative Sentences will have been shall have been बीच में not लगाया जाता है। Interrogative Sentences में shall या will को Subject से पहले लगाया जाता है ।</p>
              <p>ध्यान रहे कि प्राय: Future Continuous और Future Perfect Continuous का प्रयोग कम ही किया जाता है। दैनिक व्यवहार में अधिकतर Future Indefinite और Future Perfect ही प्रयोग किये जाते हैं ।</p></li>
          </ol>
          <br />
          <h2 class="mb10 fs18 fw700 textCenter">Model Sentences</h2>
          <h3 class="fw700 textCenter">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li><p>वह आपसे कई दिनों से मिलने आ रहा होगा ।</p><p>He will have been coming to see you for many days. </p></li>
            <li><p>मजदूर एक घण्टे से इस मकान पर काम कर रहे होंगे।</p><p>The labourers will have been working on this house for one hour.</p></li>
            <li><p>कल रात से वर्षा हो रही होगी ।</p><p>It will have been raining since last night.</p></li>
            <li><p>वह सुबह से इस पुस्तक को पढ़ रहा होगा ।</p><p>He will have been reading this book since morning.</p></li>
            <li><p>मोहन दो घण्टे से अपना पाठ याद कर रहा होगा ।</p><p>Mohan will have been learning his lesson for two hours.</p></li>
          </ol>
          <br />
          <h3 class="fw700 textCenter">(b) Negative Sentences</h3>
          <br />
          <ol>
            <li><p>वह दो घण्टे से काम नहीं कर रहा होगा।</p><p>He will not have been working for two hours.</p></li>
            <li><p>सीता दोपहर से स्वैटर नहीं बुन रही होगी।</p><p>Sita will not have been knitting the sweater since noon.</p></li>
            <li><p>माली सुबह से पौधों को पानी नहीं दे रहा होगा।</p><p>The gardener will not have been watering the plants since morning.</p></li>
            <li><p>कई वर्षों से इस मकान में कोई  नहीं रह रहा होगा।</p><p>Nobody will have been living in this house for many years.</p></li>
            <li><p>मोहन दो दिन से स्कूल नहीं जा रहा होगा।</p><p>Mohan will not have been going to school for two days.</p></li>
          </ol>
          <br />
          <h3 class="fw700 textCenter">(c) Interrogative Sentences</h3>
          <br />
          <ol>
            <li><p>क्या वह प्रातः से खाना पका रही होगी ?</p><p>Will she have been cooking food since morning?</p></li>
            <li><p>क्या हम दो घण्टे से बातचीत कर रहे होंगे ?</p><p>Shall we have been talking for two hours?</p></li>
            <li><p>क्या लड़के सुबह से गप्पें लगा रहे होंगे ?</p><p>Will the boys have been gossip- ing since morning?</p></li>
            <li><p>क्या वह सोमवार से परीक्षा नहीं दे रहा होगा ?</p><p>Will he not have been taking the examination since Monday? </p></li>
            <li><p>क्या दिवाकर सुबह से कोई काम नहीं कर रहा होगा ?</p><p>Will Diwakar not have been doing any work since morning?</p></li>
          </ol>
          <br />

          <hr class="line-separator" />

          <br /><br />
          <h3 class="fw700 textCenter">EXERCISE</h3>
          <p class="textCenter">Translate the following into English:</p>
          <hr class="line-separator" />
          <br />
          <div id="section-exercise" data-json="lesson-15"></div>
          <Exercise dataUrl="/api/lesson-15" />
        </div>
      </main>
    </div>
  )
}
