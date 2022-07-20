(function() {
    const dictURL = "https://raw.githubusercontent.com/pagopa/status.pagopa.gov.it/main/main.js";
    // OVERRIDE THE MONTHS DICT
    window.monthStrings = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]

    const dict = await fetch(dictURL, {
        headers: {
          'Accept': 'application/json'
        }
    }).then((resp)=> {
        if (response.ok) {
            return response.json();
        }
    })
    .catch((error) => {
        console.error("DICT URL FAILED");
        return [];
    });

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

})();
