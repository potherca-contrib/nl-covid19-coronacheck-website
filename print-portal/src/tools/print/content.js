import i18n from '@/i18n'
import { QRSizeInCm } from '@/data/constants'

const pageHeight = 297;
const pageWidth = 210;
const marginLeft = 10;
const marginLeftIntro = 15;
// jspdf uses the baseline of a text for an y position
const marginTop = 16;
const leftPartLeft = marginLeft;
const leftPartTop = 30;
const rightPartLeft = 0.5 * pageWidth + marginLeft;
const rightPartTop = marginTop;
const partWidth = 0.5 * pageWidth - (2 * marginLeft)
const partWidthIntro = 0.5 * pageWidth - (2 * marginLeftIntro)
const bottomPartTop = 0.5 * pageHeight + marginTop;
const marginQuestionsFrame = 4;
const questionsFrameHeight = 54;
const questionsFrameTop = (pageHeight / 2) - marginLeft - questionsFrameHeight;
const questionsFrameInnerLeft = rightPartLeft + marginQuestionsFrame;
const questionsFrameInnerWidth = partWidth - (2 * marginQuestionsFrame);
const fontSizeStandard = 10;
const QrPositionY = 181;
const lightBlack = [56, 56, 54];
export const lineHeight = 4.5;

const createImage = async (src) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = () => {
            resolve(img);
        }
        img.src = src;
    })
};

export const getTextItems = (type, territory, qr, locale) => {
    return [
        {
            text: i18n.t('pdf.' + territory + '.title'),
            fontFamily: 'montserrat',
            fontWeight: 700,
            fontSize: 25,
            color: lightBlack,
            position: [leftPartLeft, leftPartTop],
            width: partWidth,
            textAlign: 'center',
            lineHeight: 9
        }, {
            text: i18n.t('pdf.' + territory + '.intro'),
            fontFamily: 'arial',
            fontWeight: 400,
            fontSize: fontSizeStandard,
            position: [marginLeftIntro, 51],
            width: partWidthIntro,
            textAlign: 'center'
        }, {
            text: i18n.t('pdf.instructions'),
            fontFamily: 'montserrat',
            fontWeight: 700,
            fontSize: 18,
            color: lightBlack,
            position: [rightPartLeft, rightPartTop],
            width: partWidth
        }, {
            text: territory === 'nl' ? i18n.t('pdf.nl.instructions') : i18n.t('pdf.eu.' + type + '.instructions'),
            fontFamily: 'arial',
            fontWeight: 400,
            fontSize: fontSizeStandard,
            position: [rightPartLeft, 27],
            width: partWidth
        }, {
            text: i18n.t('pdf.questions'),
            fontFamily: 'arial',
            fontWeight: 700,
            fontSize: fontSizeStandard,
            position: [questionsFrameInnerLeft, (questionsFrameTop + marginQuestionsFrame + lineHeight)],
            width: questionsFrameInnerWidth
        }, {
            text: i18n.t('pdf.questionsContent'),
            fontFamily: 'arial',
            fontWeight: 400,
            fontSize: fontSizeStandard,
            position: [questionsFrameInnerLeft, (questionsFrameTop + marginQuestionsFrame + (3 * lineHeight))],
            width: questionsFrameInnerWidth,
            lineHeight: lineHeight
        }, {
            text: i18n.t('pdf.' + territory + '.qrTitle'),
            fontFamily: 'montserrat',
            fontWeight: 700,
            fontSize: 18,
            color: lightBlack,
            position: [marginLeftIntro, bottomPartTop],
            width: partWidthIntro,
            textAlign: 'center',
            lineHeight: 6.5
        }, {
            text: territory === 'nl' ? i18n.t('pdf.nl.propertiesLabel') : i18n.t('pdf.eu.' + type + '.propertiesLabel'),
            fontFamily: 'arial',
            fontWeight: 700,
            fontSize: 10,
            position: [rightPartLeft, bottomPartTop],
            width: partWidth
        }, {
            text: getUserDetails(qr, territory, type),
            fontFamily: 'arial',
            fontWeight: 400,
            fontSize: fontSizeStandard,
            position: [rightPartLeft, bottomPartTop + (2 * lineHeight)],
            width: partWidth
        }
    ]
}

const getUserDetails = (qr, territory, type) => {
    let string = '';
    if (territory === 'nl') {
        string += i18n.t('pdf.nl.userData.initials') + ': ' + qr.initials + '\n';
        string += i18n.t('pdf.nl.userData.dateOfBirth') + ': ' + qr.birthDateStringShort + '\n';
        string += i18n.t('pdf.nl.userData.validFrom') + ': ' + qr.validFrom + '\n';
        if (type === 'vaccination') {
            string += '\n' + i18n.t('pdf.nl.userData.validUntilVaccination', { date: qr.validUntil }) + '\n\n';
        } else if (type === 'negativeTest') {
            string += i18n.t('pdf.nl.userData.validUntil') + ': ' + qr.validUntil + '\n\n';
        }
        string += i18n.t('pdf.nl.userData.privacyNote');
        return string;
    } else {
        if (type === 'vaccination') {
            string += 'Surname(s) and first name(s): ' + qr.fullName + '\n';
            string += 'Date of birth: ' + qr.birthDateString + '\n';
            string += 'Disease targeted: COVID-19\n';
            string += 'Vaccine: ' + qr.vaccineBrand + '\n';
            string += 'Vaccine medicinal product: ' + qr.vaccineType + '\n';
            string += 'Vaccine manufacturer: ' + qr.vaccineManufacturer + '\n';
            string += 'Vaccination doses: ' + qr.doseNumber + ' out of ' + qr.totalDoses + '\n';
            string += 'Vaccination date: ' + qr.vaccinationDate + '\n';
            string += 'Vaccinated in: ' + qr.vaccinationCountry + '\n';
            string += 'Certificate issuer: ' + qr.certificateIssuer + '\n';
            string += 'Certificate identifier: ' + qr.certificateIdentifier + '\n\n';
            string += 'Valid from: ' + qr.validFrom + '\n\n';
            return string
        } else {
            return 'UserData EU negative test (todo)';
        }
    }
}

export const getImageItems = async (type, territory, urlQR) => {
    const flag = await createImage('assets/img/pdf/flag-' + territory + '.png');
    const imageCoronacheck = await createImage('assets/img/pdf/coronacheck.png');
    const imageFoldInstructions = await createImage('assets/img/pdf/fold-instructions-v2.png');
    const QRSize = QRSizeInCm * 10;
    const coronacheckImageHeight = 10;
    const flagWidth = 63;
    const flagHeight = 42
    return [
        {
            url: flag,
            x: ((pageWidth / 2) - flagWidth) / 2,
            y: 87,
            width: flagWidth,
            height: flagHeight
        }, {
            url: urlQR,
            x: ((pageWidth / 2) - QRSize) / 2,
            y: QrPositionY,
            width: QRSize,
            height: QRSize
        }, {
            url: imageCoronacheck,
            x: questionsFrameInnerLeft,
            y: questionsFrameTop + questionsFrameHeight - coronacheckImageHeight - marginQuestionsFrame,
            width: 47,
            height: coronacheckImageHeight
        }, {
            url: imageFoldInstructions,
            x: 165,
            y: 6,
            width: 40,
            height: 15
        }
    ]
}

export const getFrames = () => {
    return [{
        color: [239, 247, 249],
        x: rightPartLeft,
        y: questionsFrameTop,
        width: partWidth,
        height: questionsFrameHeight,
        rx: 4,
        ry: 4
    }]
}

export const getLines = () => {
    return [{
        color: [29, 29, 29],
        x1: 0,
        y1: pageHeight / 2,
        x2: pageWidth,
        y2: pageHeight / 2
    }, {
        color: [224, 224, 223],
        x1: pageWidth / 2,
        y1: 0,
        x2: pageWidth / 2,
        y2: pageHeight
    }]
}
