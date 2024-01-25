import Image from 'next/image'
import Exercise from "@/components/Exercise";
import data from "@/json/lesson-01.json"

export default function Page() {
  return (
    <div className="site-wrapper">
      <main>
        <div className="content-wrapper">
          <h1 class="heading tC">
            <span class="db fs36 ttu mb10 fw400">LESSON 3</span>
            <span class="db fs24 fw700">The Use of &#39;Has, Have, Had&#39;</span>
          </h1>
          <p>In the present tense &#39;Has&#39; is used with the Third Person Singular Nouns and Pronouns and &#39;Have&#39; with
            Plural Pronouns of the Second and Third Persons and Plural Nouns</p>
          <br />
          <h4 class="tC">Points to Remember</h4>
          <ol>
            <li>
              <p>Present Tense (वर्तमान काल ) में he, she, it तथा Singular Nouns के साथ &#39;has&#39; तथा I, you, we,
                they और Plural Nouns के साथ &#39;have&#39; का प्रयोग किया जाता है। </p>

              <p>Past Tense (भूतकाल ) में Subject चाहे Singular हो या Plural, &#39;had&#39; को ही प्रयुक्त किया जाता
                है। उदाहरणतया-</p>

              <p>Singular Nouns-Rama, boy, friend, flower और teacher के साथ Present Tense में has लगाया जाता
                है तथा इनके Plurals के साथ &#39;have&#39; परन्तु इन्हीं शब्दों के साथ Past Tense में &#39;had&#39; लगाया
                जाता है इसी प्रकार I, we के साथ Present Tense में have, you, singular और plural के साथ have;
                he, she, it के साथ has तथा इनके plural, they के साथ have लगाया जाता है। Past Tense में इन
                सबके साथ &#39;had&#39; ही लगाया जायेगा |</p>
            </li>
            <li>Interrogative sentences has, have, had Subject पहले और प्रश्न चिन्ह (?) को अन्त में लगाया जाता
              है। </li>
            <li>Negative तथा Interrogative-negative sentences में &#39;no&#39; का प्रयोग प्रायः परिमाण (मात्रा) को प्रकट
              करता है। जैसे- He had no money. उसके पास पैसे न थे। He had not money इसलिए अशुद्ध है। </li>
          </ol>
          <br />
          <h2 class="mb10 fs18 fw700 tC">Model Sentences &#39;Has, Have&#39; </h2>
          <h3 class="fw700 tC">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>रमेश के पास बहुत पुस्तकें हैं। </p>
              <p>Ramesh has many books.</p>
            </li>

            <li>
              <p>उस (लड़के) के पास एक अच्छी पुस्तक है। </p>
              <p>He has a nice book.</p>
            </li>

            <li>
              <p>उस (लड़की) के पास एक सुन्दर गुड़िया है। </p>
              <p>She has a beautiful doll.</p>
            </li>

            <li>
              <p>हमारे देश में बहुत से बड़े नगर हैं। </p>
              <p>Our country has many big cities.</p>
            </li>

            <li>
              <p>मेरे पास एक बहुमूल्य कलम है। </p>
              <p>I have a costly pen.</p>
            </li>

            <li>
              <p>हमारे पास चार गायें तथा पाँच भैंसें हैं। </p>
              <p>We have four cows and five buffaloes.</p>
            </li>

            <li>
              <p>तुम्हें कल छुट्टी है। </p>
              <p>You have a holiday tomorrow.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(b) Negative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>मेरे बड़े भाई के पास अधिक धन नहीं है। </p>
              <p>My elder brother has not much money.</p>
            </li>

            <li>
              <p>उस निर्धन बालक के पास कोई ऊनी कपड़ा नहीं है। </p>
              <p>That poor boy has no woollen clothes.</p>
            </li>

            <li>
              <p>मेरे पास कोई घड़ी नहीं है। </p>
              <p>I have no watch.</p>
            </li>

            <li>
              <p>मेरे पास फालतू समय नहीं है। </p>
              <p>I have no spare time.</p>
            </li>

            <li>
              <p>तुम्हारे पास आज कोई पुस्तक नहीं है। </p>
              <p>You have no book today.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(c) Interrogative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>क्या कल तुम्हें छुट्टी है?</p>
              <p>Have you a holiday tomorrow?</p>
            </li>

            <li>
              <p>क्या उनके पास दो नौकर हैं?</p>
              <p>Have they two servants? </p>
            </li>

            <li>
              <p>क्या तुम्हें आज भूख नहीं है?</p>
              <p>Have you no appetite today?</p>
            </li>

            <li>
              <p>क्या उसके पास कोई पैन है?</p>
              <p>Has he any pen?</p>
            </li>

            <li>
              <p>क्या उस यात्री के पास कोई छाता है?</p>
              <p>Has that traveller an umbrella?</p>
            </li>

            <li>
              <p>क्या उस नगर की गलियाँ तंग हैं?</p>
              <p>Has that city narrow streets?</p>
            </li>
          </ol><hr class="line-separator" />
          <br /><br />

          <h3 class="fw700 tC">B-&#39;Had&#39;</h3>
          <p class="tC">Used in the Past Tense with both Singular and Plural Nouns and Pronouns</p>

          <h2 class="mb10 fs18 fw700 tC">Model Sentences</h2>
          <h3 class="fw700 tC">(a) Affirmative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>सुभाष बोस को स्वतन्त्रता से बहुत प्यार था। </p>
              <p>Subhash Bose had great love for freedom.</p>
            </li>
            <li>
              <p>मुझे आप पर पूरा विश्वास था। </p>
              <p>I had full faith in you.</p>
            </li>
            <li>
              <p>मुझे कल एक आवश्यक कार्य था। </p>
              <p>I had an urgent piece of work yesterday.</p>
            </li>
            <li>
              <p>उसके पड़ोसी के पास एक रेडियो सैट था। </p>
              <p>His neighbour had a radio set.</p>
            </li>
            <li>
              <p>उस (लड़की) को कल तेज ज्वर था। </p>
              <p>She had a high fever yesterday.</p>
            </li>
            <li>
              <p>मैंने प्रातः ही भोजन कर लिया था। </p>
              <p>I had my meals in the morning.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(b) Negative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>मेरे पास कोई किताब न थी। </p>
              <p>I had no book.</p>
            </li>
            <li>
              <p>मेरा उसके साथ कोई लेन-देन नहीं था। </p>
              <p>I had no dealings with him.</p>
            </li>
            <li>
              <p>हमें उसकी सफलता की कोई आशा न थी। </p>
              <p>We had no hope of his success.</p>
            </li>
            <li>
              <p>उनके पास कोई सन्दूक न था। </p>
              <p>They had no trunk.</p>
            </li>
            <li>
              <p>उस लड़के के पास कोई पैन न था। </p>
              <p>That boy had no pen.</p>
            </li>
            <li>
              <p>उस (लड़की) के कोई भाई-बहन न थे। </p>
              <p>She had no brother or sister.</p>
            </li>
          </ol>
          <br />
          <h3 class="fw700 tC">(c) Interrogative Sentences</h3>
          <br />
          <ol>
            <li>
              <p>क्या उनके पास नौकर न थे?</p>
              <p>Had they no servants?</p>
            </li>
            <li>
              <p>क्या उसके पास कोई पैसे न थे?</p>
              <p>Had he no money?</p>
            </li>
            <li>
              <p>क्या उस (स्त्री) के घुँघराले बाल थे?</p>
              <p>Had she curly hair?</p>
            </li>
            <li>
              <p>क्या यात्री के पास कोई टिकट न था?</p>
              <p>Had the traveller no ticket?</p>
            </li>
            <li>
              <p>क्या उसे अपने भाई की कोई सूचना न थी?</p>
              <p>Had he no news of his brother?</p>
            </li>
            <li>
              <p>क्या मुझे उसके आने की कोई खबर थी?</p>
              <p>Had I any news of his arrival?</p>
            </li>
          </ol>

          <br /><br />
          <h3 class="fw700 tC">EXERCISE</h3>
          <p class="tC">Translate the following into English:</p>
          <hr class="line-separator" />
          <br />
          <Exercise dataUrl="/api/lesson-03" />
        </div>
      </main>
    </div>
  )
}
