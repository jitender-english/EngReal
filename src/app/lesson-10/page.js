import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">
            <p className="ffSeg mb0">LESSON 10</p>
            <h1 className="mb0">Past Perfect Tense</h1>
          </header>

          <br />
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list">
            <li>हिन्दी में यह Tense चुका था, चुके थे, आदि में समाप्त होता है । इनका अनुवाद करने के लिए Verb की तीसरी Form से पहले had लगता है ।</li>
            <li>इस Tense का प्रयोग प्रायः तभी किया जाता है, जब कि एक ही वाक्य में दो कार्यों के होने की सूचना मिले। इनमें से एक कार्य समाप्त हो चुका होता है तथा दूसरा आरम्भ हुआ होता है। जो कार्य समाप्त हो चुका हो, उसमें Past Perfect Tense का प्रयोग होता है तथा जो कार्य आरम्भ हुआ हो, उसमें सदा Past Indefinite लगाया जाता है। उदाहरण के लिए, वाक्य नं० A-3 लो। &#39;मेरे आने से पहले वह घर से जा चुका था ।&#39; इसमें &#39;घर से जा चुकने&#39; का कार्य समाप्त हो चुका है और &#39;मेरे आने&#39; का कार्य आरम्भ हुआ है। इसलिए &#39;जा चुकने&#39; का अनुवाद &#39;had left &#39; होगा और आने का &#39;came&#39;| इसी प्रकार वाक्य नं० 4 का अनुवाद होगा |</li>
            <li>Simple Sentences में Past Perfect का प्रयोग तब होता है, जब उनमें समय बताने वाले शब्द - before, till, already दिये गये हों, देखो वाक्य नं० A- 1, 2, 6; B-2, 3, 5 ; C-2 1</li>
            <li><p>साधारण वाक्यों में जहाँ already, before, till आदि शब्द न हों तो उनका अनुवाद Past Indefinite Tense में ही होगा, Past Perfect में नहीं । जैसे :</p>
              <p>वह कल शिमला गया था।</p><p>He went to Shimla yesterday.</p><p>He had gone to Shimla yesterday अशुद्ध है ।</p></li>
          </ol>
          
          <br />
          <br />
          <header className="tC mb32">
            <p className="ffSeg mb0">Model Sentences</p>
            <h2 className="mb0">(a) Affirmative Sentences</h2>
          </header>          
          <ol className="order-list translate-lines">
            <li><p>तब तक वह सैर करने के लिए जा चुका था ।</p><p>He had gone for a walk by then.</p></li>
            <li><p>मैं पहले ही नौकरी के लिए प्रार्थना-पत्र भेज चुका था ।</p><p>I had already applied for the job.</p></li>
            <li><p>मेरे आने से पहले वह घर से जा चुका था।</p><p>He had left his house before I came.</p></li>
            <li><p>जब मैं स्टेशन पर पहुँचा तो गाड़ी जा चुकी थी ।</p><p>The train had left when I reached the station.</p></li>
            <li><p>तुमने पहले भी ऐसी गलती की थी ।</p><p>You had made such a mistake before also.</p></li>
            <li><p>कल शाम तक मैं इस पुस्तक को पढ़ चुका था ।</p><p>I had read this book by yesterday evening.</p></li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(b) Negative Sentences</h2>
          </header>
          <ol className="order-list translate-lines">
            <li><p>मुझे कई दिनों से उसका पत्र नहीं मिला था ।</p><p>I had not received any letter from him for many days.</p></li>
            <li><p>उसने तब तक कुछ नहीं खाया था ।</p><p>He had not taken anything till then.</p></li>
            <li><p>तुमने इससे पहले ऐसा दुर्व्यवहार नहीं किया था ।</p><p>You had never misbehaved like this before.</p></li>
            <li><p>उसके पहुँचने से पहले लड़के हॉल में नहीं पहुँचे थे ।</p><p>The boys had not reached the hall before his arrival.</p></li>
            <li><p>उसने पहले कभी बम्बई नहीं देखा था ।</p><p>He had never seen to Bombay before.</p></li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(c) Interrogative Sentences</h2>
          </header>
          <ol className="order-list translate-lines">
            <li><p>क्या घंटी बजने से पहले आप अपना कार्य समाप्त कर चुके थे ?</p><p>Had you finished your work before the bell rang?</p></li>
            <li><p>क्या तुम तब तक कभी कश्मीर नहीं गये थे ?</p><p>Had you never seen to Kashmir till then?</p></li>
            <li><p>क्या जाने से पहले तुमने खाना खा लिया था ?</p><p>Had you taken your meal before you went?</p></li>
            <li><p>क्या वर्षा होने से पूर्व वह घर आ गया था ?</p><p>Had he come home before it rained?</p></li>
            <li><p>क्या मोहन के आने से पहले आप  नाश्ता कर चुके थे ?</p><p>Had you taken your breakfast before Mohan came?</p></li>
            <li><p>क्या आपके स्कूल पहुँचने से पहले घण्टी बज चुकी थी ?</p><p>Had the bell gone before you reached the school?</p></li>
          </ol>
          
          <br />
          <br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-10" />
        </div>
      </main>
    </div>
  )
}
