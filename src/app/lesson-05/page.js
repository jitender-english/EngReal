import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="page-heading tC"><p className="ffSeg">LESSON 5</p>
            <h1>Present Continuous Tense</h1></header>
          <h4 className="tC">Points to Remember</h4>
          <ol>
            <li>यह Tense हिन्दी में प्रायः रहा है, रहे हैं, रही है आदि में समाप्त होता है।अंग्रेजी में इसका अनुवाद Verb की पहली form से पहले is, am, are तथा Verb की पहली form के बाद &#39;ing&#39; लगाकर किया जाता है, जैसे is/am/are walking, is/am/are reading.</li>
            <li>Is, am, are का प्रयोग इस tense में भी उसी विधि से किया जाता है, जो कि पिछले अध्याय के Note 1 में बताई गई है अर्थात् He, she, it नथा Singular Noun के साथ &#39;is&#39;; you, we, they तथा Plural Nouns के साथ &#39;are&#39; तथा &#39;I&#39; के साथ &#39;am&#39; का प्रयोग होता है।</li>
            <li>Interrogative sentences Helping Verb (is, am, are) आता है, उसके पश्चात् Subject और फिर Main Verb (देखो C के वाक्य )।</li>
            <li>Negative sentences Main Verb 3 Helping Verb बीच not लगाया जाता है (देखो B के वाक्य )</li>
            <li>कभी-कभी ऐसा भी होता है कि हिन्दी का वाक्य रहा, रही, रहे आदि में समाप्त नहीं होता, परन्तु फिर भी उसका अनुवाद Present Continuous Tense में होता है (देखो वाक्य A - 4, B-2)।</li>
          </ol>
          <br /><br />
          <p class="ffSeg tC">Model Sentences</p>
          <h2 class="tC">(a) Affirmative Sentences</h2>

          <ol className="order-list translate-lines">
            <li>
              <p className="hi">मैं कलकत्ता जा रहा हूँ।</p>
              <p className="eng">I am going to Calcutta.</p>
            </li>
            <li>
              <p className="hi">मैं अपना पाठ याद कर रहा हूँ।</p>
              <p className="eng">I am learning my lesson.</p>
            </li>
            <li>
              <p className="hi">हम नदी में नहा रहे हैं।</p>
              <p className="eng">We are bathing in the river.</p>
            </li>
            <li>
              <p className="hi">शरारती बालक बैंचों पर खड़े हैं।</p>
              <p className="eng">Naughty boys are standing on the benches.</p>
            </li>
            <li>
              <p className="hi">लड़के तालाब में तैर रहे हैं।</p>
              <p className="eng">The boys are swimming in the tank.</p>
            </li>
            <li>
              <p className="hi">डाकिया पत्र बाँट रहा है।</p>
              <p className="eng">The postman is delivering letters/the mail.</p>
            </li>
            <li>
              <p className="hi">वह गाना गा रही है।</p>
              <p className="eng">She is singing a song. </p>
            </li>
            <li>
              <p className="hi">वह पुस्तक पढ़ रहा है।</p>
              <p className="eng">He is reading a book.</p>
            </li>
          </ol>
          <br /><br />
          <h2 class="tC">(b) Negative Sentences</h2>
          <ol className="order-list translate-lines">
            <li>
              <p className="hi">वह पत्र नहीं लिख रहा है।</p>
              <p className="eng">He is not writing a letter.</p>
            </li>
            <li>
              <p className="hi">वह अपने घर की छत पर नहीं खड़ा है।</p>
              <p className="eng">He is not standing on the roof of his house.</p>
            </li>
            <li>
              <p className="hi">वर्षा नहीं हो रही है।</p>
              <p className="eng">It is not raining.</p>
            </li>
            <li>
              <p className="hi">वे गाना नहीं गा रहे हैं।</p>
              <p className="eng">They are not singing a song.</p>
            </li>
            <li>
              <p className="hi">मजदूर वृक्षों को काट-काट कर नहीं गिरा रहे हैं।</p>
              <p className="eng">The labourers are not felling the trees.</p>
            </li>
            <li>
              <p className="hi">तुम अपना समय व्यर्थ नहीं गँवा रहे हो</p>
              <p className="eng">You are not wasting your time.</p>
            </li>
            <li>
              <p className="hi">हम किसी की हँसी नहीं उड़ा रहे हैं।</p>
              <p className="eng">We are not making fun of anybody.</p>
            </li>
          </ol>
          <br /><br />
          <h2 class="tC">(c) Interrogative Sentences</h2>

          <ol className="order-list translate-lines">
            <li>
              <p className="hi">क्या वह कपड़े धो रही है?</p>
              <p className="eng">Is she washing her clothes? </p>
            </li>
            <li>
              <p className="hi">क्या बाहर बूँदा बाँदी हो रही है।</p>
              <p className="eng">Is it drizzling outside?</p>
            </li>
            <li>
              <p className="hi">क्या माली पौधों को पानी दे रहा है?</p>
              <p className="eng">Is the gardener watering the plants?</p>
            </li>
            <li>
              <p className="hi">क्या आपको नींद आ रही है?</p>
              <p className="eng">Are you feeling sleepy? </p>
            </li>
            <li>
              <p className="hi">क्या आप मेरी प्रतीक्षा कर रहे हैं?</p>
              <p className="eng">Are you waiting for me?</p>
            </li>
            <li>
              <p className="hi">क्या वह आपसे मिलने नहीं आ रहा है?</p>
              <p className="eng">Is he not coming to see you?</p>
            </li>
            <li>
              <p className="hi">क्या हम आज पिकनिक पर नहीं जा रहे हैं?</p>
              <p className="eng">Are we not going on a picnic today?</p>
            </li>
            <li>
              <p className="hi">क्या वे उसकी हँसी नहीं उड़ा रहे हैं?</p>
              <p className="eng">Are they not making fun of him?</p>
            </li>
            <li>
              <p className="hi">क्या मैं आपकी सहायता नहीं कर रहा हूँ?</p>
              <p className="eng">Am I not helping you?</p>
            </li>
          </ol>
          <br /><br />
          <h2 class="tC mb0">Exercise</h2>
          <p class="ffSeg tC mb23">Translate the following into English:</p>

          <br />
          <Exercise dataUrl="/api/lesson-05" />
        </div>
      </main>
    </div>
  )
}
