(function() {
    const dictURL = "https://raw.githubusercontent.com/pagopa/status.pagopa.gov.it/main/dict.json";

    function translateDateList() {
        const days = document.querySelectorAll(".status-day .date");
        days.forEach( day => {
            const dayInTS = Date.parse( day.textContent );
            const formattedDay = new Intl.DateTimeFormat('it-IT').format(dayInTS);
            day.innerHTML = formattedDay;
        })
    }

    function dictManage(dict) {
        dict.forEach( (element) => {
            let occurs = document.querySelectorAll(element.selector);
            occurs.forEach( (occ) => {
                // if we want to replace a piece of text
                if (element.replaceString) {
                    let occHTML = occ.innerHTML;
                    occHTML = occHTML.replace(element.replaceString, element.string);
                    occ.innerHTML = occHTML;
                } else {
                    // if we want replace text entirely
                    occ.textContent = element.string;
                }
            })
        });
    }

    // obtain DICT & manipulate nodes
    fetch(dictURL, {
        headers: {
        "Accept": "application/json"
        }
    })
    .then( response => response.ok && response.json() )
    .then( data => {
        dictManage(data);
    })
    .catch( error => console.log("FAIL TO LOAD DICT") );

    window.addEventListener("load", (event) => {
        // OVERRIDE THE MONTHS DICT
        window.monthStrings = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
        // translate date in list
        translateDateList();
    });

})();
