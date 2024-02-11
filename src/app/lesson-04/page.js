import ExerciseHeader from "@/components/ExerciseHeader";
import Exercise from "@/components/Exercise";

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <header className="tC">
            <p className="ffSeg mb0">Lesson 4</p>
            <h1 className="mb0">Present Indefinite Tense</h1>
            <p className="ffSeg mb0">Present Tense ( Active Voice )</p>
          </header>
          
          <br />
          <h4 className="tC">Points to Remember</h4>
          <ol className="order-list">
            <li>यह Tense ता है, ती है, ते हैं आदि में समाप्त होता है।इसका अनुवाद सदा Verb की पहली form से किया
              जाता है।</li>
            <li>He, she, it तथा Singular Nouns के साथ Verb की पहली form के साथ &#39;s&#39; अथवा &#39;es&#39; लगता है।</li>
            <li>I, you, they, we और Plural Nouns के साथ Verb की पहली form के साथ &#39;s&#39; अथवा &#39;es&#39; नहीं लगाया जाता।
            </li>
            <li>
              <p>Interrogative sentences मे Singular Subject के साथ does तथा Plural Subject के साथ do का
                प्रयोग Subject से पहले किया जाता है।Subject के बाद सदा Verb की पहली form ही लगायी जाती है।
              </p>
              <p>यदि उत्तर स्वीकारात्मक हो तो yes लगाया जाता है और वाक्य में no या not का प्रयोग नहीं
                होता।नकारात्मक उत्तर का अनुवाद no से आरम्भ होता है तथा वाक्य में पुनः no या not लगाया जाता
                है (देखो वाक्य नं० B-3)</p>
            </li>
            <li>Negative Sentences में he, she, it और Singular Noun के साथ Verb की first form के पश्चात् does
              not का प्रयोग होता है।I, we, you और Plural Nouns के साथ Verb की पहली form के बाद do not लगता है।
            </li>
            <li>
              <p>कभी-कभी Present Indefinite Tense को Future Tense के लिए भी प्रयोग किया जाता है, but in most
                such cases the “ future action is considered as a part of a programme already fixed” जैसे :
              </p>
              <ul className="list-style-none">
                <li>
                  <p>हम कल चलेंगे।</p>
                  <p>We start tomorrow.</p>
                </li>
                <li>
                  <p>गाड़ी तीन बजकर बीस मिनट पर छूटेगी।</p>
                  <p>The train leaves at 3.20.</p>
                </li>
                <li>
                  <p>पढ़ाई शुक्रवार प्रातः से पहले आरम्भ न होगी।</p>
                  <p>Classes do not begin until Friday morning.</p>
                </li>
                <li>
                  <p>हमारा स्कूल गर्मियों की छुट्टियों के लिए कल बन्द होगा।</p>
                  <p>Our School closes for summer vacation tomorrow.</p>
                </li>
              </ul>
            </li>
            <li>किसी बात पर जोर देने के लिए भी does और do का प्रयोग होता है (देखो वाक्य D-2, 3)।</li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <p className="ffSeg mb0">Model Sentences</p>
            <h2 className="mb0">(a) Affirmative Sentences</h2>
          </header>
          
          <br />
          <ol className="order-list translate-lines">
            <li>
              <p>मोहन बहुत परिश्रम करता है।</p>
              <p>Mohan works very hard.</p>
            </li>
            <li>
              <p>सूर्य पूर्व से निकलता है।</p>
              <p>The sun rises in the east.</p>
            </li>
            <li>
              <p>तुम अपने माता-पिता का कहना मानते हो।</p>
              <p>You obey your parents.</p>
            </li>
            <li>
              <p>रात को तारे चमकते हैं।</p>
              <p>The stars shine at night.</p>
            </li>
            <li>
              <p>मैं प्रतिदिन स्कूल जाती हूँ।</p>
              <p>I go to school daily.</p>
            </li>
          </ol>

          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(b) Negative Sentences</h2>
          </header>          
          <ol className="order-list translate-lines">
            <li>
              <p>वह प्रतिदिन समाचार-पत्र नहीं पढ़ता है।</p>
              <p>He does not read the newspaper daily.</p>
            </li>
            <li>
              <p>वह लड़की इस स्कूल में नहीं पढ़ती है।</p>
              <p>That girl does not read in this school.</p>
            </li>
            <li>
              <p>वे शोर नहीं करते हैं </p>
              <p>They do not make a noise.</p>
            </li>
            <li>
              <p>तुम प्रतिदिन अपना पाठ याद नहीं करते हो।</p>
              <p>You do not learn your lesson everyday.</p>
            </li>
            <li>
              <p>अच्छे बालक गाली नहीं देते हैं।</p>
              <p>Good boys do not call others names.</p>
            </li>
          </ol>
          
          <br />
          <br />
          <header className="tC mb32">
            <h2 className="mb0">(c) Interrogative Sentences</h2>
          </header>          
          <ol className="order-list translate-lines">
            <li>
              <p>क्या मोहन बहुत परिश्रम करता है?</p>
              <p>Does Mohan work very hard?</p>
            </li>
            <li>
              <p>क्या मैं बहुत तेज दौड़ता हूँ?</p>
              <p>Do I run very fast?</p>
            </li>
            <li>
              <p>क्या आप तैरना जानते हैं?हाँ, मैं जानता हूँ।नहीं, मैं नहीं जानता।</p>
              <p>Do your know how to swim? Yes, I know. No, I do not know.</p>
            </li>
            <li>
              <p>क्या वे झूठ बोलते हैं?नहीं, वे झूठ नहीं बोलते।</p>
              <p>Do they tell a lie? No, they do not tell a lie.</p>
            </li>
            <li>
              <p>क्या पक्षी प्रातः ही चहचहाने लगते हैं?</p>
              <p>Do the birds start chirping early in the morning?</p>
            </li>
          </ol>

          
          <br />
          <br />
          <header className="tC mb32">
            <h3 className="mb0">(D)-Miscellaneous Uses</h3>        
          </header>            
          <ol className="order-list translate-lines">
            <li>
              <p>गाड़ी दिन के साढ़े दस बजे जाती है।</p>
              <p>The train leaves at 10.30 A.M.</p>
            </li>
            <li>
              <p>वह मुझे प्रतिदिन मिलने के लिए &#39;अवश्य आता है।</p>
              <p>He does come to see me daily.</p>
            </li>
            <li>
              <p>वह प्रतिदिन चार बजे अवश्य उठता है |</p>
              <p>He does get up at four everyday.</p>
            </li>
          </ol>
          
          <br />
          <br />
          <ExerciseHeader />
          <Exercise dataUrl="/api/lesson-04" />
        </div>
      </main>
    </div>
  )
}
