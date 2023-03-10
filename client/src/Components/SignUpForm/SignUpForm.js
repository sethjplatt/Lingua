import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingContext } from '../../Context/LandingContext';
import { signUpService } from '../../Utils/UserService';

export default function SignUpForm() {
  const { setSignUpOrLogin } = useContext(LandingContext);
  const [valid, setValid] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (
      !data.get('firstName') ||
      !data.get('lastName') ||
      !data.get('username') ||
      !data.get('password') ||
      !data.get('nativeLanguage') ||
      !data.get('learnLanguage')
    ) {
      setValid(false);
      return;
    } else {
      setValid(true);
    }

    let user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      userName: data.get('username'),
      password: data.get('password'),
      nativeLanguage: data.get('nativeLanguage'),
      learnLanguage: data.get('learnLanguage'),
    };
    const response = await signUpService(user);
    if (response) {
      navigate('/dashboard');
    }
  }

  function handleOtherClick() {
    setSignUpOrLogin('logIn');
  }

  return (
    <div>
      <div className='form-wrapper'>
        <div className='form-title'>Create a Free Account</div>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className='form-input'
            type='text'
            name='firstName'
            placeholder='First Name'
          />
          <input
            className='form-input'
            type='text'
            name='lastName'
            placeholder='Last Name'
          />
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='User Name'
          />
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Password'
          />
          <div className='form-label'>Select your native language</div>
          <select className='languages' name='nativeLanguage'>
            <option>Select Language</option>
            <option value='af'>Afrikaans</option>
            <option value='sq'>Albanian - shqip</option>
            <option value='am'>Amharic - ????????????</option>
            <option value='ar'>Arabic - ??????????????</option>
            <option value='an'>Aragonese - aragon??s</option>
            <option value='hy'>Armenian - ??????????????</option>
            <option value='ast'>Asturian - asturianu</option>
            <option value='az'>Azerbaijani - az??rbaycan dili</option>
            <option value='eu'>Basque - euskara</option>
            <option value='be'>Belarusian - ????????????????????</option>
            <option value='bn'>Bengali - ???????????????</option>
            <option value='bs'>Bosnian - bosanski</option>
            <option value='br'>Breton - brezhoneg</option>
            <option value='bg'>Bulgarian - ??????????????????</option>
            <option value='ca'>Catalan - catal??</option>
            <option value='ckb'>
              Central Kurdish - ?????????? (???????????????? ????????????)
            </option>
            <option value='zh'>Chinese - ??????</option>
            <option value='co'>Corsican</option>
            <option value='hr'>Croatian - hrvatski</option>
            <option value='cs'>Czech - ??e??tina</option>
            <option value='da'>Danish - dansk</option>
            <option value='nl'>Dutch - Nederlands</option>
            <option value='en'>English</option>
            <option value='eo'>Esperanto - esperanto</option>
            <option value='et'>Estonian - eesti</option>
            <option value='fo'>Faroese - f??royskt</option>
            <option value='fil'>Filipino</option>
            <option value='fi'>Finnish - suomi</option>
            <option value='fr'>French - fran??ais</option>
            <option value='gl'>Galician - galego</option>
            <option value='ka'>Georgian - ?????????????????????</option>
            <option value='de'>German - Deutsch</option>
            <option value='el'>Greek - ????????????????</option>
            <option value='gn'>Guarani</option>
            <option value='gu'>Gujarati - ?????????????????????</option>
            <option value='ha'>Hausa</option>
            <option value='haw'>Hawaiian - ????lelo Hawai??i</option>
            <option value='he'>Hebrew - ??????????</option>
            <option value='hi'>Hindi - ??????????????????</option>
            <option value='hu'>Hungarian - magyar</option>
            <option value='is'>Icelandic - ??slenska</option>
            <option value='id'>Indonesian - Indonesia</option>
            <option value='ia'>Interlingua</option>
            <option value='ga'>Irish - Gaeilge</option>
            <option value='it'>Italian - italiano</option>
            <option value='ja'>Japanese - ?????????</option>
            <option value='kn'>Kannada - ???????????????</option>
            <option value='kk'>Kazakh - ?????????? ????????</option>
            <option value='km'>Khmer - ???????????????</option>
            <option value='ko'>Korean - ?????????</option>
            <option value='ku'>Kurdish - Kurd??</option>
            <option value='ky'>Kyrgyz - ????????????????</option>
            <option value='lo'>Lao - ?????????</option>
            <option value='la'>Latin</option>
            <option value='lv'>Latvian - latvie??u</option>
            <option value='ln'>Lingala - ling??la</option>
            <option value='lt'>Lithuanian - lietuvi??</option>
            <option value='mk'>Macedonian - ????????????????????</option>
            <option value='ms'>Malay - Bahasa Melayu</option>
            <option value='ml'>Malayalam - ??????????????????</option>
            <option value='mt'>Maltese - Malti</option>
            <option value='mr'>Marathi - ???????????????</option>
            <option value='mn'>Mongolian - ????????????</option>
            <option value='ne'>Nepali - ??????????????????</option>
            <option value='no'>Norwegian - norsk</option>
            <option value='nb'>Norwegian Bokm??l - norsk bokm??l</option>
            <option value='nn'>Norwegian Nynorsk - nynorsk</option>
            <option value='oc'>Occitan</option>
            <option value='or'>Oriya - ???????????????</option>
            <option value='om'>Oromo - Oromoo</option>
            <option value='ps'>Pashto - ????????</option>
            <option value='fa'>Persian - ??????????</option>
            <option value='pl'>Polish - polski</option>
            <option value='pt'>Portuguese - portugu??s</option>
            <option value='pa'>Punjabi - ??????????????????</option>
            <option value='qu'>Quechua</option>
            <option value='ro'>Romanian - rom??n??</option>
            <option value='mo'>Romanian (Moldova) - rom??n?? (Moldova)</option>
            <option value='rm'>Romansh - rumantsch</option>
            <option value='ru'>Russian - ??????????????</option>
            <option value='gd'>Scottish Gaelic</option>
            <option value='sr'>Serbian - ????????????</option>
            <option value='sh'>Serbo-Croatian - Srpskohrvatski</option>
            <option value='sn'>Shona - chiShona</option>
            <option value='sd'>Sindhi</option>
            <option value='si'>Sinhala - ???????????????</option>
            <option value='sk'>Slovak - sloven??ina</option>
            <option value='sl'>Slovenian - sloven????ina</option>
            <option value='so'>Somali - Soomaali</option>
            <option value='st'>Southern Sotho</option>
            <option value='es'>Spanish - espa??ol</option>
            <option value='su'>Sundanese</option>
            <option value='sw'>Swahili - Kiswahili</option>
            <option value='sv'>Swedish - svenska</option>
            <option value='tg'>Tajik - ????????????</option>
            <option value='ta'>Tamil - ???????????????</option>
            <option value='tt'>Tatar</option>
            <option value='te'>Telugu - ??????????????????</option>
            <option value='th'>Thai - ?????????</option>
            <option value='ti'>Tigrinya - ????????????</option>
            <option value='to'>Tongan - lea fakatonga</option>
            <option value='tr'>Turkish - T??rk??e</option>
            <option value='tk'>Turkmen</option>
            <option value='tw'>Twi</option>
            <option value='uk'>Ukrainian - ????????????????????</option>
            <option value='ur'>Urdu - ????????</option>
            <option value='ug'>Uyghur</option>
            <option value='uz'>Uzbek - o???zbek</option>
            <option value='vi'>Vietnamese - Ti???ng Vi???t</option>
            <option value='wa'>Walloon - wa</option>
            <option value='cy'>Welsh - Cymraeg</option>
            <option value='fy'>Western Frisian</option>
            <option value='xh'>Xhosa</option>
            <option value='yi'>Yiddish</option>
            <option value='yo'>Yoruba - ??d?? Yor??b??</option>
            <option value='zu'>Zulu - isiZulu</option>
          </select>
          <div className='form-label'>
            Select the language you'd like to learn
          </div>
          <select className='languages' name='learnLanguage'>
            <option>Select Language</option>
            <option value='af'>Afrikaans</option>
            <option value='sq'>Albanian - shqip</option>
            <option value='am'>Amharic - ????????????</option>
            <option value='ar'>Arabic - ??????????????</option>
            <option value='an'>Aragonese - aragon??s</option>
            <option value='hy'>Armenian - ??????????????</option>
            <option value='ast'>Asturian - asturianu</option>
            <option value='az'>Azerbaijani - az??rbaycan dili</option>
            <option value='eu'>Basque - euskara</option>
            <option value='be'>Belarusian - ????????????????????</option>
            <option value='bn'>Bengali - ???????????????</option>
            <option value='bs'>Bosnian - bosanski</option>
            <option value='br'>Breton - brezhoneg</option>
            <option value='bg'>Bulgarian - ??????????????????</option>
            <option value='ca'>Catalan - catal??</option>
            <option value='ckb'>
              Central Kurdish - ?????????? (???????????????? ????????????)
            </option>
            <option value='zh'>Chinese - ??????</option>
            <option value='co'>Corsican</option>
            <option value='hr'>Croatian - hrvatski</option>
            <option value='cs'>Czech - ??e??tina</option>
            <option value='da'>Danish - dansk</option>
            <option value='nl'>Dutch - Nederlands</option>
            <option value='en'>English</option>
            <option value='eo'>Esperanto - esperanto</option>
            <option value='et'>Estonian - eesti</option>
            <option value='fo'>Faroese - f??royskt</option>
            <option value='fil'>Filipino</option>
            <option value='fi'>Finnish - suomi</option>
            <option value='fr'>French - fran??ais</option>
            <option value='gl'>Galician - galego</option>
            <option value='ka'>Georgian - ?????????????????????</option>
            <option value='de'>German - Deutsch</option>
            <option value='el'>Greek - ????????????????</option>
            <option value='gn'>Guarani</option>
            <option value='gu'>Gujarati - ?????????????????????</option>
            <option value='ha'>Hausa</option>
            <option value='haw'>Hawaiian - ????lelo Hawai??i</option>
            <option value='he'>Hebrew - ??????????</option>
            <option value='hi'>Hindi - ??????????????????</option>
            <option value='hu'>Hungarian - magyar</option>
            <option value='is'>Icelandic - ??slenska</option>
            <option value='id'>Indonesian - Indonesia</option>
            <option value='ia'>Interlingua</option>
            <option value='ga'>Irish - Gaeilge</option>
            <option value='it'>Italian - italiano</option>
            <option value='ja'>Japanese - ?????????</option>
            <option value='kn'>Kannada - ???????????????</option>
            <option value='kk'>Kazakh - ?????????? ????????</option>
            <option value='km'>Khmer - ???????????????</option>
            <option value='ko'>Korean - ?????????</option>
            <option value='ku'>Kurdish - Kurd??</option>
            <option value='ky'>Kyrgyz - ????????????????</option>
            <option value='lo'>Lao - ?????????</option>
            <option value='la'>Latin</option>
            <option value='lv'>Latvian - latvie??u</option>
            <option value='ln'>Lingala - ling??la</option>
            <option value='lt'>Lithuanian - lietuvi??</option>
            <option value='mk'>Macedonian - ????????????????????</option>
            <option value='ms'>Malay - Bahasa Melayu</option>
            <option value='ml'>Malayalam - ??????????????????</option>
            <option value='mt'>Maltese - Malti</option>
            <option value='mr'>Marathi - ???????????????</option>
            <option value='mn'>Mongolian - ????????????</option>
            <option value='ne'>Nepali - ??????????????????</option>
            <option value='no'>Norwegian - norsk</option>
            <option value='nb'>Norwegian Bokm??l - norsk bokm??l</option>
            <option value='nn'>Norwegian Nynorsk - nynorsk</option>
            <option value='oc'>Occitan</option>
            <option value='or'>Oriya - ???????????????</option>
            <option value='om'>Oromo - Oromoo</option>
            <option value='ps'>Pashto - ????????</option>
            <option value='fa'>Persian - ??????????</option>
            <option value='pl'>Polish - polski</option>
            <option value='pt'>Portuguese - portugu??s</option>
            <option value='pa'>Punjabi - ??????????????????</option>
            <option value='qu'>Quechua</option>
            <option value='ro'>Romanian - rom??n??</option>
            <option value='mo'>Romanian (Moldova) - rom??n?? (Moldova)</option>
            <option value='rm'>Romansh - rumantsch</option>
            <option value='ru'>Russian - ??????????????</option>
            <option value='gd'>Scottish Gaelic</option>
            <option value='sr'>Serbian - ????????????</option>
            <option value='sh'>Serbo-Croatian - Srpskohrvatski</option>
            <option value='sn'>Shona - chiShona</option>
            <option value='sd'>Sindhi</option>
            <option value='si'>Sinhala - ???????????????</option>
            <option value='sk'>Slovak - sloven??ina</option>
            <option value='sl'>Slovenian - sloven????ina</option>
            <option value='so'>Somali - Soomaali</option>
            <option value='st'>Southern Sotho</option>
            <option value='es'>Spanish - espa??ol</option>
            <option value='su'>Sundanese</option>
            <option value='sw'>Swahili - Kiswahili</option>
            <option value='sv'>Swedish - svenska</option>
            <option value='tg'>Tajik - ????????????</option>
            <option value='ta'>Tamil - ???????????????</option>
            <option value='tt'>Tatar</option>
            <option value='te'>Telugu - ??????????????????</option>
            <option value='th'>Thai - ?????????</option>
            <option value='ti'>Tigrinya - ????????????</option>
            <option value='to'>Tongan - lea fakatonga</option>
            <option value='tr'>Turkish - T??rk??e</option>
            <option value='tk'>Turkmen</option>
            <option value='tw'>Twi</option>
            <option value='uk'>Ukrainian - ????????????????????</option>
            <option value='ur'>Urdu - ????????</option>
            <option value='ug'>Uyghur</option>
            <option value='uz'>Uzbek - o???zbek</option>
            <option value='vi'>Vietnamese - Ti???ng Vi???t</option>
            <option value='wa'>Walloon - wa</option>
            <option value='cy'>Welsh - Cymraeg</option>
            <option value='fy'>Western Frisian</option>
            <option value='xh'>Xhosa</option>
            <option value='yi'>Yiddish</option>
            <option value='yo'>Yoruba - ??d?? Yor??b??</option>
            <option value='zu'>Zulu - isiZulu</option>
          </select>
          <div>
            <button className='submit' type='submit'>
              Submit
            </button>
          </div>
        </form>
        <div className='invalid-notification'>
          {valid === false ? (
            <p>Please fill out all sections to create an account</p>
          ) : null}
        </div>
        <div className='other-form'>
          <div>Already Have an Account?</div>
          <button onClick={handleOtherClick}>Log In</button>
        </div>
      </div>
    </div>
  );
}
