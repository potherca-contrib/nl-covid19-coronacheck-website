const html = `
    <p>
        The following details of your vaccination have been retrieved:
    </p>
    <p>
        Name: <b>%{name}</b><br>
        Date of birth: <b>%{birthDateString}</b>
    </p>
    <p>
        Pathogen: <b>COVID-19</b><br>
        Vaccine:  <b>%{vaccineName}</b><br>
        Vaccine type:  <b>%{vaccineType}</b><br>
        Manufacturer:  <b>%{manufacturer}</b><br>
        Doses: <b>%{dosesString}</b><br>
        Vaccination date: <b>%{dateString}</b><br>
        Country of vaccination: <b>%{country}</b><br>
        Identification code: <b>%{identificationCode}</b>
    </p>
`;

export default html;
