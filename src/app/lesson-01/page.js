import Image from 'next/image'
import Exercise from "@/components/Exercise";
import data from "@/json/lesson-01.json"

export default function Page() {
  return (
    <div className="site-wrapper">
    <main>
      <div className="content-wrapper">
        <h1 className="heading textCenter">
          <span className="db fs30 ttu mb10 fw400">LESSON 1</span>
          <span className="db fs24 fw700">The Use of &#39;is, am, are&#39;</span>
        </h1>
        <br />
        <h4 className="textCenter">Points to Remember</h4>
        <ol className="list-sentences">
          <li>
            <p>
              Present Tense (वर्तमान काल ) में he, she, it तथा Singular Nouns
              के साथ &#39;is&#39; का प्रयोग होता है; परन्तु I के साथ &#39;am&#39; लगाया जाता
              है। &#39;You&#39; चाहे एकवचन में हो अथवा बहुवचन में और we, they तथा
              Plural Nouns के साथ &#39;are&#39; लगाया जाता है। जैसे-
            </p>
          </li>

          <li>
            हिन्दी में आदर प्रकट करने के लिए बहुवचन (Plural) का प्रयोग किया
            जाता है परन्तु अंग्रेजी में उसका अनुवाद एकवचन ( Singular) में ही
            किया जाता है। देखो वाक्य A- 8.
          </li>

          <li>
            यदि Verb के बाद केवल Adjective हो तो Adjective के पहले a या an का
            प्रयोग नहीं होता। यदि Verb या Adjective के बाद Singular Common Noun
            हो तो Adjective के पहले &#39;a&#39; या &#39;an&#39; का प्रयोग किया जाता है। स्मरण
            रहे कि Vowel sound से आरम्भ हुए Adjective के पहले &#39;an&#39; और
            Consonant sounds के Adjective के पहले &#39;a&#39; का प्रयोग होता है। (देखो
            वाक्य A-2, 4; B-3, 6; C-1).
          </li>

          <li>
            Interrogative sentences में Verb को sentence के आरम्भ में लगाया
            जाता हैं।  Interrogative sentences के अन्त में प्रश्नवाचक चिन्ह (?) अनिवार्य
            है।
          </li>
          <li>Verb के बाद &#39;not&#39; लगाने से sentence निषेधात्मक (negative)
            हो जाता है।</li>

          <li>भाग D में दिए गए sentences को कंठस्थ करो। </li>
        </ol>

        <h2 className="mb10 fs18 fw700 textCenter">Model Sentences</h2>
        <h3 className="fw700 textCenter">A-&#39;is&#39;</h3>
        <br />
        <ol></ol>

        <br /><br />
        <h3 className="fw700 textCenter">B-&#39;am&#39;</h3>
        <br />
        <ol>
          <li>
            <p>क्या मैं एक होशियार विद्यार्थ नहीं हूँ?</p>
            <p>Am I not an intelligent student?</p>
          </li>
        </ol>
        <br /><br />
        <h3 className="fw700 textCenter">C-&#39;are&#39;</h3>
        <p className="textCenter">
          Used with Second Person Pronoun &#39;You&#39; both Singular and Plural,
          &#39;We&#39;, &#39;They&#39; and all Plural Nouns in the Present Tense
        </p>
        <br />

        <ol>

          <li>
            <p>तुम ईमानदार लड़के हो। </p>
            <p>You are an honest boy.</p>
          </li>
          <li>
            <p>वे भूखे हैं। </p>
            <p>They are hungry.</p>
          </li>
          <li>
            <p>हमारे देशवासी परिश्रमी हैं। </p>
            <p>Our contrymen are hard-working.</p>
          </li>
          <li>
            <p>क्या ये फूल सुन्दर हैं?</p>
            <p>Are these flowers lovely?</p>
          </li>
          <li>
            <p>तुम स्वामिभक्त नौकर नहीं हो। </p>
            <p>You are not a faithful servant.</p>
          </li>
          <li>
            <p>क्या वे सब बालक चतुर हैं?</p>
            <p>Are all those boys clever?</p>
          </li>
          <li>
            <p>क्या वे धनवान हैं?</p>
            <p>Are they rich?</p>
          </li>
          <li>
            <p>क्या तुम सिपाही हो?</p>
            <p>Are you a soldier?</p>
          </li>
        </ol>
        <br /><br />
        <h3 className="fw700 textCenter">D-Idiomatic use of Is, Am, Are</h3>
        <br />

        <ol>
          <li>
            <p>गाड़ी चल रही है। </p>
            <p>The train is in motion.</p>
          </li>
          <li>
            <p>क्या घर जल रहा है?</p>
            <p>Is the house on fire?</p>
          </li>
          <li>
            <p>मुझे स्कूल के लिए देर हो गई है। </p>
            <p>I am late for school.</p>
          </li>
          <li>
            <p>मुझे नींद आ रही है। </p>
            <p>I am feeling sleepy.</p>
          </li>
          <li>
            <p>मैं ठीक समय पर पहुँचा हूँ। </p>
            <p>I am just on time.</p>
          </li>
          <li>
            <p>मेला पूरे जोरों पर है। </p>
            <p>The fair is in full swing.</p>
          </li>
          <li>
            <p>धूप बहुत तेज है। </p>
            <p>The sun very hot.</p>
          </li>
          <li>
            <p>लड़की खेल रही है। </p>
            <p>The girl is at play.</p>
          </li>
          <li>
            <p>पिताजी घर पर नहीं</p>
            <p>Father is not at home.</p>
          </li>
          <li>
            <p>आज हवा बन्द है। </p>
            <p>It is close today.</p>
          </li>
          <li>
            <p>वह मकान किराये के लिए खाली है। </p>
            <p>That house is to let.</p>
          </li>
          <li>
            <p>तुम गलती पर हो। </p>
            <p>You are in the wrong/at fault.</p>
          </li>
          <li>
            <p>मैं अपने वचन का पक्का हूँ। </p>
            <p>I am a man of word/true to my word.</p>
          </li>
          <li>
            <p>हवाई जहाज़ अभी नज़र आ रहा है। </p>
            <p>The aeroplane is yet in sight.</p>
          </li>
        </ol>

        <br /><br />
        <h3 className="fw700 textCenter">EXERCISE</h3>
        <p className="textCenter">Translate the following into English:</p>
        <hr className="line-separator" />
        <br />
        <Exercise data={data} />
      </div>
    </main>
  </div>
  )
}
