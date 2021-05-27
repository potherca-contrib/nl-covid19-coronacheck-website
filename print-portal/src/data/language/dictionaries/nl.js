import messageInfoTestResultAbout from './../templates/nl/message-info-testResultAbout';
import messageInfoVaccinationAbout from './../templates/nl/message-info-vaccinationAbout';
import footer from './../templates/nl/footer';

const nl = {
    'date': {
        'months': {
            'abbr': ['JAN', 'FEB', 'MAA', 'APR', 'MEI', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC']
        }
    },
    'template': { footer },
    'views': {
        'home': {
            'pageHeader': 'Krijg toegang met een papieren testbewijs',
            'pageIntro': '<p>Een testbewijs op papier is handig als je geen smartphone hebt. Dit is hoe het werkt:</p><h4>Alleen toegang na testen</h4><p>Laat je daarom testen als je bepaalde sociale, culturele of sportieve activiteiten bezoekt. Ook als je al gevaccineerd bent. Blijkt uit de test dat je geen corona hebt (negatieve testuitslag)? Dan krijg je toegang.</p><h4>Jouw QR-code op zak</h4><p>Als uit de test blijkt dat je geen corona hebt kun je in de app of op papier een persoonlijke QR-code maken. Dat is jouw testbewijs. De QR-code wordt gescand voordat je toegang krijgt. Zorg dat jouw QR-code binnen 40 uur na het moment van testen gescand is bij de ingang.</p><h4>Zo min mogelijk gegevens</h4><p>In jouw QR-code staan alleen je negatieve testuitslag (geen corona), het tijdstip van de test en minimale gegevens: de eerste letter van je voornaam, de eerste letter van je achternaam, je geboortedag en geboortemaand. Dit is ter controle, om zeker te zijn dat de testuitslag bij jou hoort.</p>',
            'userConsentText': 'Ik heb de <a href="https://coronacheck.nl/nl/privacy" target="_blank">privacyverklaring</a> gelezen en geef toestemming voor het verwerken van mijn persoonsgegevens.'
        },
        'choiceProof': {
            'pageHeader': 'Waar wil je een papieren bewijs van maken?',
            'pageIntro': '<p>Je kan een QR-code maken van een negatieve testuitslag (geldt %{maxValidityHoursForTestResult} uur) of van een vaccinatie (geldt 1 jaar). In Europa kan geldigheid verschillen.</p>',
            'choiceTestHeader': 'Een negatieve testuitslag',
            'choiceTestBody': 'Uit de test blijkt dat ik geen corona heb',
            'choiceVaccinationHeader': 'Een vaccinatie',
            'choiceVaccinationBody': 'Ik heb mijn prik of prikken gehad'
        },
        'collectVaccination': {
            'pageHeader': 'Vaccinatie ophalen',
            'pageIntro': '<p>Heb je een of meer prikken gekregen? Dan kan je een  bewijs maken.</p><p>Vragen over vaccinaties? <a href="https://www.rijksoverheid.nl/onderwerpen/coronavirus-vaccinatie" target="_blank">Lees hier meer</a></p>',
            'loginDigid': 'Login met DigiD'
        },
        'yourVaccinations': {
            'pageHeader': 'Jouw opgehaalde vaccinaties ',
            'pageIntro': '<p>Je kan een bewijs maken van je vaccinaties.</p>'
        },
        'yourTestResults': {
            'pageHeader': 'Controleer je testuitslag',
            'pageIntro': '<p>Deze testuitslag is opgehaald bij de testlocatie.</p><p>Kloppen de gegevens hieronder? Dan kun je van de negatieve testuitslag een QR-code maken. Dat is jouw bewijs.</p>',
            'createTestProofButton': 'Maak QR-code',
            'somethingIsWrong': 'Klopt er iets niet?',
            'retrievedTestResult': 'Opgehaalde testuitslag',
            'noTestResultPresent': 'Er is geen testuitslag bekend',
            'noTestResultPresentDirection': 'Haal eerst je testuitslag op. Gebruik hiervoor de code die je van de testlocatie hebt gekregen. '
        },
        'testResultPending': {
            'pageHeader': 'Testuitslag nog niet bekend',
            'pageIntro': 'Probeer het later nog eens.<br>Neem voor vragen contact op met jouw testlocatie.'
        },
        'printTestResult': {
            'pageHeader': 'Je testbewijs',
            'pageIntro': 'Je hebt een testbewijs gemaakt, in de vorm van een QR-code. Lees hier wat er in staat. Open of download de PDF, print het uit en neem ’m mee.'
        },
        'printVaccination': {
            'pageHeader': 'Print jouw vaccinatiebewijs',
            'pageIntro': '<p>Je hebt een vaccinatiebewijs gemaakt, in de vorm van een QR-code. Je hebt een vaccinatiebewijs voor binnen Nederland, en een vaccinatiebewijs voor in Europa.<br><a href="" target="_blank">Lees hier</a> wat er zoal in staat. Print de PDF en neem het printje mee.</p>'
        }
    },
    'components': {
        'languagePicker': {
            'language': 'Taal',
            'changeLanguage': 'Wissel van taal',
            'currentLanguage': 'Huidige taal'
        },
        'testResult': {
            'dateOfTest': 'Testdatum',
            'yourCredentials': 'Jouw gegevens'
        },
        'faq': {
            'viewFaq': 'Bekijk de meestgestelde vragen'
        },
        'preferMobile': {
            'header': 'Liever je testbewijs op je mobiel?',
            'intro': 'Download dan de app.'
        }
    },
    'message': {
        'info': {
            'testResultAbout': {
                'head': 'Over de testuitslag',
                'body': messageInfoTestResultAbout
            },
            'testResultSomethingWrong': {
                'head': 'Kloppen de gegevens niet?',
                'body': messageInfoTestResultAbout
            },
            'vaccinationAbout': {
                'head': 'Over jouw vaccinatie',
                'body': messageInfoVaccinationAbout
            },
            'vaccinationSomethingWrong': {
                'body': '<p>Klopt je naam of geboortedatum niet? Neem contact op met je huisarts en geef dit door.</p><p>Mist er een prik?<br>Neem contact op met de locatie waar je bent gevaccineerd.</p>'
            }
        },
        'error': {}
    },
    'pdf': {
        'dayOfBirth': 'Geboortedag',
        'footerText': `Bekijk de meestgestelde vragen op www.CoronaCheck.nl

Stuur een e-mail naar helpdesk@coronacheck.nl of bel naar 0800-1421 (gratis)`,
        'initials': 'Initialen',
        'instructions': 'INSTRUCTIES',
        'instructionsText': `1. Print dit testbewijs op A4 zonder de schaal aan te passen (mag in zwart-wit)

2. Neem een geldig identiteitsbewijs mee naar de activiteit

3. Laat het testbewijs en je identiteitsbewijs (en eventueel ook je toegangskaartje) zien bij de ingang

Let op: dit is géén toegangsticket voor je activiteit`,
        'preferMobile': 'Laat je jouw testbewijs liever op je telefoon zien? Gebruik dan de code uit de e-mail in de CoronaCheck-app',
        'questions': 'VRAGEN?',
        'testedAt': 'Getest op',
        'validUntil': 'Geldig tot'
    },
    'image': {
        'holder': {
            'overview': 'Mijn overzicht',
            'showQrIntro': 'Laat zowel de QR-code als je identiteitsbewijs zien bij de ingang van de locatie die je bezoekt.',
            'myQr': 'Mijn QR-code',
            'validText': 'Geldig tot donderdag<br>11 maart 14:06',
            'showQr': 'Toon QR'
        }
    },
    'back': 'Terug',
    'close': 'Sluiten',
    'createTestProof': 'Maak QR-code',
    'dateOfBirth': 'Geboortedatum',
    'didNotGetCode': 'Ik heb geen code gekregen',
    'emptyTestCode': 'Ophaalcode niet ingevuld',
    'enterCode': 'Testuitslag ophalen',
    'expiredTestCodeHead': 'De ophaalcode is verlopen',
    'expiredTestCodeBody': '<p>De code die je invult is niet meer geldig. Controleer of je de juiste code hebt ingevuld. Nieuwe code nodig? Laat je dan opnieuw testen.</p>',
    'faq': 'Meestgestelde vragen',
    'forInstanceAbbr': 'Bijv.',
    'generalError': 'Sorry, er gaat iets mis',
    'generalErrorBody': '<p>Dat komt door een technische fout. Neem contact op met de helpdesk van CoronaCheck via <a href="tel:0800-1421" class="only-clickable-for-mobile">0800-1421</a>.</p>',
    'goBackToStart': 'Naar home',
    'invalidTestCode': 'Geen geldige ophaalcode',
    'invalidVerificationCode': 'Geen geldige verificatiecode',
    'name': 'Naam',
    'next': 'Volgende',
    'noTestProofPresent': 'Er is nog geen testbewijs',
    'noTestProofPresentDirection': 'Je kunt alleen van een negatieve testuitslag een testbewijs maken. Haal eerst je testuitslag op.',
    'noVerificationCodeHead': 'Nieuwe verificatiecode nodig?',
    'noVerificationCodeMessage': '<p>Je krijgt de verificatiecode via een sms of e-mail van de testlocatie. Niet gekregen? Dan kunnen we een nieuwe code sturen.</p>',
    'openPDF': 'Open PDF',
    'orderWords': ['Eerste', 'Tweede', 'Derde'],
    'retrieveTestResult': 'Testuitslag ophalen',
    'sendCode': 'Stuur code',
    'sendAgain': 'Verstuur opnieuw',
    'testCodeDirection': 'Vul jouw ophaalcode in. Deze heb je van de testlocatie gekregen. Of klik op de link in de e-mail die je van je testlocatie krijgt.',
    'uniqueCode': 'Ophaalcode',
    'resultNegative': 'Negatieve testuitslag',
    'vaccination': 'Vaccinatie',
    'verificationCode': 'Verificatiecode',
    'verificationCodeDirection': 'Je krijgt een code in een sms of e-mail',
    'yourCredentialsWrong': 'Zijn deze gegevens anders dan op je identiteitsbewijs?',
    'yourCredentialsWrongDirection': 'Neem contact op met je testlocatie. Zij kunnen je gegevens aanpassen.',
    'yourTestProof': 'Jouw testbewijs',
    'skiplink': 'Ga direct naar inhoud',
    'logo-government': 'Logo Rijksoverheid, homepage',
    'identity_image_alt': 'Holder QR maken',
    'header-appstore': 'Downloaden in de App Store',
    'header-googleplaystore': 'Ontdek het op Google Play'
}

export default nl;
