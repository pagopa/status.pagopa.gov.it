(function() {
    // OVERRIDE THE MONTHS DICT
    window.monthStrings = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]

    let dict = [
        {
            selector : "*[data-component-status='operational'] .component-status",
            string : " Operativo "

        },
        {
            selector : ".components-uptime-link",
            string : "Operatività durante gli ultimi ",
            replaceString : "Uptime over the past ",
        },
        {
            selector : ".components-uptime-link",
            string : "giorni",
            replaceString: "days"
        },
        {
            selector : "a[href='/uptime']",
            string : "Visualizza lo storico",
        },
        {
            selector : ".page-status .status",
            string : "Tutti i servizi sono operativi",
        },
        {
            selector : "[data-var='uptime-percent']",
            string : "% attività",
        },
        {
            selector : ".legend-item-date-range",
            string : "giorni fa",
            replaceString: "days ago"
        },
        {
            selector : ".legend-item-date-range",
            string : "Oggi",
            replaceString: "Today"
        },
        {
            selector : "#past-incidents",
            string : "Disservizi passati",
            replaceString: "Past Incidents"
        },
    ];

    dict.forEach( (element) => {
        let occurs = document.querySelectorAll(element.selector);
        occurs.forEach( (occ) => {
            if (element.replaceString) {
                let occHTML = occ.innerHTML;
                occHTML = occHTML.replace(element.replaceString, element.string);
                occ.innerHTML = occHTML;
            } else {
                occ.textContent = element.string;
            }
        })
    });

})();
