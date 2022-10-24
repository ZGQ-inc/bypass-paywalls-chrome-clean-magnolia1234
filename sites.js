var defaultSites = {
  "60 Millions de consommateurs": {
    domain: "60millions-mag.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Advance Local": {
    domain: "###_usa_adv_local",
    allow_cookies: 1,
    group: [
      "al.com",
      "cleveland.com",
      "lehighvalleylive.com",
      "masslive.com",
      "mlive.com",
      "nj.com",
      "oregonlive.com",
      "pennlive.com",
      "silive.com",
      "syracuse.com"
    ]
  },
  "Adweek (free articles only)": {
    domain: "adweek.com"
  },
  "Aftonbladet": {
    domain: "aftonbladet.se",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "Albuquerque Journal": {
    domain: "abqjournal.com",
    allow_cookies: 1,
    block_regex: /\.abqjournal\.com\/.+\/abq-pw-manager\.js/
  },
  "Allgäuer Zeitung": {
    domain: "allgaeuer-zeitung.de",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Alternatives Economiques": {
    domain: "alternatives-economiques.fr",
    block_regex: /\.poool\.fr\//
  },
  "Ámbito": {
    domain: "ambito.com",
    remove_cookies_select_drop: ["TDNotesRead"]
  },
  "American Affairs": {
    domain: "americanaffairsjournal.org",
    allow_cookies: 1,
    block_regex: /\/americanaffairsjournal\.org\/wp-content\/mu-plugins\/app\/src\/paywall\/paywall\.js/
  },
  "American Banker": {
    domain: "americanbanker.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Apollo Magazine": {
    domain: "apollo-magazine.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "ARA": {
    domain: "###_cat_ara",
    group: [
      "ara.cat",
      "arabalears.cat"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "ArcInfo.ch": {
    domain: "arcinfo.ch",
    allow_cookies: 1
  },
  "Artforum": {
    domain: "artforum.com"
  },
  "Artnet": {
    domain: "artnet.com",
    allow_cookies: 1,
    block_regex: /(\.artnet\.com\/paywall-ajax\.php|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Asia Times": {
    domain: "asiatimes.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.(m)?js/
  },
  "Atavist Magazine": {
    domain: "atavist.com"
  },
  "Atlantico.fr": {
    domain: "atlantico.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Augsburger Allgemeine": {
    domain: "augsburger-allgemeine.de",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Australia News Corp": {
    domain: "###_au_news_corp",
    group: [
      "adelaidenow.com.au",
      "cairnspost.com.au",
      "codesports.com.au",
      "couriermail.com.au",
      "dailytelegraph.com.au",
      "geelongadvertiser.com.au",
      "goldcoastbulletin.com.au",
      "heraldsun.com.au",
      "ntnews.com.au",
      "theaustralian.com.au",
      "thechronicle.com.au",
      "themercury.com.au",
      "townsvillebulletin.com.au",
      "weeklytimesnow.com.au"
    ],
    allow_cookies: 1,
    block_regex: /(\.com\.au\/remote\/identity\/rampart\/latest\/rampart\.js|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
    exception: [{
        domain: "ntnews.com.au",
        allow_cookies: 1,
        block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
        useragent: "googlebot"
      }, {
        domain: "theaustralian.com.au",
        allow_cookies: 1,
        block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
        useragent: "googlebot"
      }
    ]
  },
  "Australian Community Media (daily)": {
    domain: "###_au_comm_media",
    group: [
      "bendigoadvertiser.com.au",
      "bordermail.com.au",
      "canberratimes.com.au",
      "centralwesterndaily.com.au",
      "dailyadvertiser.com.au",
      "dailyliberal.com.au",
      "examiner.com.au",
      "illawarramercury.com.au",
      "newcastleherald.com.au",
      "northerndailyleader.com.au",
      "standard.net.au",
      "theadvocate.com.au",
      "thecourier.com.au",
      "westernadvocate.com.au"
    ],
    allow_cookies: 1,
    block_regex: /(cdn-au\.piano\.io\/api\/tinypass.+\.js|cdn\.cxense\.com\/)/
  },
  "Automobilwoche": {
    domain: "automobilwoche.de",
    allow_cookies: 1,
    block_regex: /\.automobilwoche\.de\/s3fs-public\/js\/js_.+\.js/
  },
  "AutoPlus.fr": {
    domain: "autoplus.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Axios": {
    domain: "axios.com",
    allow_cookies: 1,
    block_regex: "\.axios\.com\/api\/v\d\/licenses"
  },
  "Badische Neueste Nachrichten": {
    allow_cookies: 1,
    domain: "bnn.de",
    useragent: "googlebot"
  },
  "Barron's": {
    domain: "barrons.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
    useragent: "googlebot"
  },
  "BBC History Extra": {
    domain: "historyextra.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Belfast Telegraph": {
    domain: "belfasttelegraph.co.uk",
    allow_cookies: 1,
    block_regex: /(cdn\.flip-pay\.com\/clients\/inm\/flip-pay\.js)/
  },
  "Beobachter.ch": {
    allow_cookies: 1,
    domain: "beobachter.ch",
    useragent: "googlebot"
  },
  "Berliner Zeitung": {
    domain: "berliner-zeitung.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Berlingske": {
    domain: "berlingske.dk",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Bloomberg": {
    domain: "bloomberg.com",
    block_regex: /(\.tinypass\.com\/|assets\.bwbx\.io\/s\d\/(fence\/plug-client|javelin\/.+\/transporter)\/)/,
    remove_cookies_select_drop: ["gatehouse_id"]
  },
  "BQ Prime": {
    domain: "bqprime.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Brisbane Times": {
    domain: "brisbanetimes.com.au",
    group_rule: "###_gr_au_nine_domains"
  },
  "Business Insider": {
    domain: "businessinsider.com",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Business Post.ie (do not block Piano.io-script externally)": {
    domain: "businesspost.ie",
    block_regex: /cdn\.cxense\.com\//,
    remove_cookies_select_drop: ["xbc"]
  },
  "Business Standard": {
    domain: "business-standard.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "California Business Journals": {
    domain: "###_usa_cbj",
    group: [
      "labusinessjournal.com",
      "ocbj.com",
      "sdbj.com",
      "sfvbj.com"
    ],
    allow_cookies: 1,
    block_regex: /\/olytics\.omeda\.com\//
  },
  "Causeur": {
    domain: "causeur.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Challenges": {
    domain: "challenges.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Charlie Hebdo": {
    domain: "charliehebdo.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Chemical & Engineering News": {
    domain: "cen.acs.org"
  },
  "Cicero.de": {
    domain: "cicero.de",
    allow_cookies: 1
  },
  "Clarín": {
    domain: "clarin.com",
    allow_cookies: 1,
    block_regex: /\.clarin\.com\/.+\/auth\d\.js/
  },
  "Commentary Magazine": {
    domain: "commentary.org",
    block_regex: /\.commentary\.org\/.+\/js\/dg-locker-public\.js/
  },
  "CommonWealth Magazine Taiwan (free articles only)": {
    domain: "cw.com.tw"
  },
  "Condé Nast magazines": {
    domain: "###_usa_conde_nast",
    group: [
      "architecturaldigest.com",
      "bonappetit.com",
      "gq.com",
      "newyorker.com",
      "vanityfair.com",
      "vogue.com",
      "wired.com"
    ],
    remove_cookies_select_drop: ["pay_ent_smp", "pay_ent_usmp"],
    block_regex: "(journey\\.{domain}\\/(.+\\/)?build-.+\\.js|cdn\\.ampproject\\.org\\/v\\d\\/amp-subscriptions-.+\\.js)",
    useragent: "googlebot"
  },
  "Connaissance des Arts": {
    domain: "connaissancedesarts.com",
    allow_cookies: 1,
    block_regex: /\.connaissancedesarts\.com\/wp-content\/cache\/.+\.js/
  },
  "Correio da Manhã": {
    domain: "cmjornal.pt",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Corriere della Sera": {
    domain: "corriere.it",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.corriereobjects\.it\/.+\/js\/_paywall\.sjs|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Corriere dello Sport": {
    domain: "corrieredellosport.it",
    remove_cookies_select_drop: ["paywall_articles"]
  },
  "Crain Communications": {
    domain: "###_usa_craincomm",
    group: [
      "adage.com",
      "autonews.com",
      "chicagobusiness.com",
      "crainscleveland.com",
      "crainsdetroit.com",
      "crainsnewyork.com",
      "modernhealthcare.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tinypass\\.com\\/|\\.{domain}\\/.+\\/js\\/js_.+\\.js)",
    exception: [{
        domain: "autonews.com",
        block_regex: "(\\.tinypass\\.com\\/|\\.{domain}\\/.+\\/js\\/js_.+\\.js)"
      }
    ]
  },
  "Dagens Industri": {
    domain: "di.se",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "De Tijd": {
    domain: "tijd.be",
    referer: "google"
  },
  "Der Spiegel": {
    domain: "spiegel.de",
    allow_cookies: 1
  },
  "Diario Financiero": {
    domain: "df.cl",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Die Rheinpfalz": {
    domain: "rheinpfalz.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Die Zeit": {
    domain: "zeit.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Digiday": {
    domain: "digiday.com",
    block_regex: /(cdn\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Discover Magazine": {
    domain: "discovermagazine.com"
  },
  "Domani": {
    domain: "editorialedomani.it",
    allow_cookies: 1,
    block_regex: /(\.editorialedomani\.it\/pelcro\.js|js\.pelcro\.com\/)/,
    useragent: "googlebot"
  },
  "DPG Media (not ADR)": {
    domain: "###_nl_dpg_media",
    group: [
      "demorgen.be",
      "humo.be",
      "parool.nl",
      "trouw.nl",
      "volkskrant.nl"
    ],
    remove_cookies_select_drop: ["TID_ID"],
    block_regex: "(\\.{domain}\\/temptation\\/resolve|temptation\\.{domain}\\/temptation\.js)"
  },
  "Eastwest.eu": {
    domain: "eastwest.eu",
    allow_cookies: 1
  },
  "El Confidencial": {
    domain: "elconfidencial.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "El Diario.es": {
    domain: "eldiario.es",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "El Español": {
    domain: "elespanol.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "El Espectador": {
    domain: "elespectador.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "El Mercurio (+ regional/opt-in to custom sites)": {
    domain: "elmercurio.com",
    allow_cookies: 1,
    block_regex: /\.(elmercurio\.com|emol\.cl)\/(.+\/)?js\/(.+\/)?(modal|merPramV\d|PramModal\.min)\.js/,
    useragent: "googlebot"
  },
  "El País": {
    domain: "elpais.com",
    allow_cookies: 1,
    block_regex: /(\/elpais\.com\/arc\/subs\/p\.min\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "El Periódico (de Catalunya)": {
    domain: "elperiodico.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "El Tiempo": {
    domain: "eltiempo.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Elle.fr": {
    domain: "elle.fr",
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Encyclopedia Britannica": {
    domain: "britannica.com"
  },
  "eNotes": {
    domain: "enotes.com",
    allow_cookies: 1
  },
  "Entrepreneur": {
    domain: "entrepreneur.com",
    allow_cookies: 1
  },
  "ESPN USA (news only)": {
    domain: "espn.com",
    allow_cookies: 1
  },
  "Esprit": {
    domain: "esprit.presse.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Estado de Minas": {
    domain: "em.com.br",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "EUobserver": {
    domain: "euobserver.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Eureka Report": {
    domain: "eurekareport.com.au",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Evening Standard (UK)": {
    domain: "standard.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Exame": {
    domain: "exame.com",
    block_regex: /\/exame\.com\/.+\/js\/pywll-dyn\.js/
  },
  "Finance.si": {
    domain: "finance.si",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Financial News (London)": {
    domain: "fnlondon.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Financial Times (not Chinese)": {
    domain: "ft.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
    useragent: "googlebot"
  },
  "Financieele Dagblad (fd.nl)": {
    domain: "fd.nl",
    referer: "facebook",
    remove_cookies_select_drop: ["socialread"]
  },
  "First Things": {
    domain: "firstthings.com"
  },
  "Follow the Money (ftm.nl)": {
    domain: "ftm.nl",
    allow_cookies: 1,
    block_regex: /\.ftm\.nl\/js\/routing\?/
  },
  "Forbes": {
    domain: "forbes.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Foreign Affairs": {
    domain: "foreignaffairs.com",
    block_regex: /\.foreignaffairs\.com\/modules\/custom\/fa_paywall_js\/js\/paywall\.js/
  },
  "Foreign Policy": {
    domain: "foreignpolicy.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "Fortune": {
    domain: "fortune.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Franc-Tireur": {
    domain: "franc-tireur.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Frankfurter Allgemeine Zeitung": {
    domain: "faz.net",
    allow_cookies: 1
  },
  "Freie Presse": {
    domain: "freiepresse.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Funke Mediengruppe": {
    domain: "###_de_funke_medien",
    group: [
      "abendblatt.de",
      "braunschweiger-zeitung.de",
      "morgenpost.de",
      "nrz.de",
      "otz.de",
      "thueringer-allgemeine.de",
      "tlz.de",
      "waz.de",
      "wp.de",
      "wr.de"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Gannett Group (local USA Today)": {
    domain: "###_usa_gannett",
    group: [
      "azcentral.com",
      "cincinnati.com",
      "commercialappeal.com",
      "courier-journal.com",
      "democratandchronicle.com",
      "detroitnews.com",
      "freep.com",
      "indystar.com",
      "jsonline.com",
      "knoxnews.com",
      "news-press.com",
      "northjersey.com",
      "oklahoman.com",
      "statesman.com",
      "tennessean.com"
    ],
    allow_cookies: 1,
    amp_unhide: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "GenomeWeb": {
    domain: "###_usa_genomeweb",
    group: [
      "360dx.com",
      "genomeweb.com",
      "precisiononcologynews.com"
    ],
    allow_cookies: 1,
    block_regex: /crain-platform-.+-prod\.s3\.amazonaws\.com\/s3fs-public\/js\/js_.+\.js/
  },
  "Glassdoor": {
    domain: "glassdoor.com"
  },
  "Globes": {
    domain: "globes.co.il",
    block_regex: /\.tinypass\.com\//
  },
  "Griffith Review": {
    domain: "griffithreview.com",
    remove_cookies_select_drop: ["issuem_lp"]
  },
  "Groene Amsterdammer": {
    domain: "groene.nl",
    remove_cookies_select_hold: ["accept-cookies", "popunder-hidden"],
    useragent: "googlebot"
  },
  "Groupe Capitales Médias (+ regional/opt-in to custom sites)": {
    domain: "###_ca_gcm",
    group: [
      "lesoleil.com"
    ],
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Groupe Centre France": {
    domain: "###_fr_gcf",
    group: [
      "lamontagne.fr"
    ],
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Groupe EBRA": {
    domain: "###_fr_groupe_ebra",
    group: [
      "bienpublic.com",
      "dna.fr",
      "estrepublicain.fr",
      "lalsace.fr",
      "ledauphine.com",
      "lejsl.com",
      "leprogres.fr",
      "republicain-lorrain.fr",
      "vosgesmatin.fr"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Groupe La Dépêche": {
    domain: "###_fr_groupe_la_depeche",
    group: [
      "centrepresseaveyron.fr",
      "ladepeche.fr",
      "lindependant.fr",
      "midi-olympique.fr",
      "midilibre.fr",
      "nrpyrenees.fr",
      "petitbleu.fr"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Groupe Nice-Matin": {
    domain: "###_fr_groupe_nice_matin",
    group: [
      "monacomatin.mc",
      "nicematin.com",
      "varmatin.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Groupe Rossel": {
    domain: "###_fr_be_groupe_rossel",
    group: [
      "aisnenouvelle.fr",
      "courrier-picard.fr",
      "lardennais.fr",
      "lavoixdunord.fr",
      "lesoir.be",
      "lest-eclair.fr",
      "liberation-champagne.fr",
      "lunion.fr",
      "nordeclair.fr",
      "nordlittoral.fr",
      "paris-normandie.fr",
      "sudinfo.be"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Groupe Sud Ouest": {
    domain: "###_fr_groupe_sud_ouest",
    group: [
      "sudouest.fr",
      "charentelibre.fr",
      "larepubliquedespyrenees.fr"
    ],
    allow_cookies: 1
  },
  "Grupo Abril": {
    domain: "abril.com.br",
    allow_cookies: 1,
    block_regex: /(\.abril\.com\.br\/.+\/abril-paywall\/js\/abril-paywall\.js|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Grupo El Comercio": {
    domain: "###_pe_grupo_elcomercio",
    group: [
      "diariocorreo.pe",
      "elcomercio.pe",
      "gestion.pe"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tinypass\\.com\\/|\\/{domain}\\/pf\\/dist\\/engine\\/react\\.js)"
  },
  "Grupo Prensa Ibérica": {
    domain: "###_es_epiberica",
    group: [
      "diariodemallorca.es",
      "eldia.es",
      "epe.es",
      "farodevigo.es",
      "informacion.es",
      "laprovincia.es",
      "levante-emv.com",
      "lne.es",
      "mallorcazeitung.es"
    ],
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Grupo Unidad Editorial": {
    domain: "###_es_unidad",
    group: [
      "elmundo.es",
      "expansion.com",
      "marca.com"],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Grupo Vocento": {
    domain: "###_es_grupo_vocento",
    group: [
      "abc.es",
      "diariosur.es",
      "diariovasco.com",
      "elcomercio.es",
      "elcorreo.com",
      "eldiariomontanes.es",
      "elnortedecastilla.es",
      "hoy.es",
      "ideal.es",
      "larioja.com",
      "lasprovincias.es",
      "laverdad.es",
      "lavozdigital.es"
    ],
    allow_cookies: 1,
    block_regex: /(\.evolok\.net\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
    exception: [{
        domain: "abc.es",
        allow_cookies: 1,
        block_regex: /(\.evolok\.net\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
        useragent: "googlebot"
      }
    ]
  },
  "Gruppo GEDI.it": {
    domain: "###_it_gedi",
    group: [
      "gelocal.it",
      "huffingtonpost.it",
      "ilsecoloxix.it",
      "italian.tech",
      "lastampa.it",
      "lescienze.it",
      "limesonline.com",
      "repubblica.it"],
    allow_cookies: 1,
    block_regex: /(scripts\.repubblica\.it\/pw\/pw\.js|cdn\.ampproject\.org\/v\d\/amp-(access|user-notification)-.+\.js)/,
    useragent: "googlebot"
  },
  "Haaretz English": {
    domain: "haaretz.com",
    allow_cookies: 1,
    block_regex: /haaretz\.com\/hdc\/web\/js\/minified\/header-scripts-int.js/,
    useragent: "bingbot"
  },
  "Haaretz": {
    domain: "haaretz.co.il",
    allow_cookies: 1,
    block_regex: /haaretz\.co\.il\/htz\/js\/inter\.js/,
    useragent: "bingbot"
  },
  "Handelszeitung.ch": {
    allow_cookies: 1,
    domain: "handelszeitung.ch",
    useragent: "googlebot"
  },
  "Harper's Magazine": {
    domain: "harpers.org"
  },
  "Harvard Business Review (free articles only)": {
    domain: "hbr.org",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Harvard Business Review China": {
    domain: "hbrchina.org",
    allow_cookies: 1
  },
  "Hearst Communications (newspapers)": {
    domain: "###_usa_hearst_comm",
    group: [
      "expressnews.com",
      "houstonchronicle.com",
      "sfchronicle.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.ensighten\\.com\\/|js\\.matheranalytics\\.com\\/)"
  },
  "Hearst Communications magazines": {
    domain: "###_usa_hearst_comm_mag",
    group: [
      "bicycling.com",
      "cosmopolitan.com",
      "countryliving.com",
      "elle.com",
      "esquire.com",
      "goodhousekeeping.com",
      "hollywoodreporter.com",
      "housebeautiful.com",
      "menshealth.com",
      "popularmechanics.com",
      "prevention.com",
      "roadandtrack.com",
      "runnersworld.com",
      "townandcountrymag.com",
      "womenshealthmag.com"
    ],
    allow_cookies: 1,
    block_regex: /\.ensighten\.com\/.+\/Bootstrap\.js/
  },
  "Hindustan Times": {
    domain: "hindustantimes.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Honolulu Star-Advertiser": {
    domain: "staradvertiser.com",
    allow_cookies: 1,
    block_regex: /js\.matheranalytics\.com\//
  },
  "Il Fatto Quotidiano": {
    domain: "ilfattoquotidiano.it",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Il Foglio": {
    domain: "ilfoglio.it",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Il Manifesto": {
    domain: "ilmanifesto.it",
    allow_cookies: 1
  },
  "Il Messaggero (+ regional)": {
    domain: "###_it_ilmessaggero",
    group: [
      "corriereadriatico.it",
      "ilgazzettino.it",
      "ilmattino.it",
      "ilmessaggero.it",
      "quotidianodipuglia.it"
    ],
    block_regex: /(utils\.cedsdigital\.it\/js\/PaywallMeter\.js|cdn\.ampproject\.org\/v\d\/amp-(access|consent|subscriptions)-.+\.mjs)/
  },
  "Il Tirreno": {
    domain: "iltirreno.it"
  },
  "Iltalehti": {
    domain: "iltalehti.fi",
    allow_cookies: 1
  },
  "Inc.com": {
    domain: "inc.com",
    block_regex: /\.tinypass\.com\//
  },
  "Inc42": {
    domain: "inc42.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.(m)?js)/
  },
  "India Today": {
    domain: "indiatoday.in",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "iNews (UK)": {
    domain: "inews.co.uk",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Initium Media": {
    domain: "theinitium.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Inkl": {
    domain: "inkl.com"
  },
  "Intelligent Investor": {
    domain: "intelligentinvestor.com.au",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Internazionale.it": {
    domain: "internazionale.it",
    allow_cookies: 1,
    block_regex: /\.internazionale\.it\/templates_js_ajax\.inc\.php/
  },
  "Investors' Chronicle": {
    allow_cookies: 1,
    domain: "investorschronicle.co.uk",
    referer: "google"
  },
  "iPolitics.ca": {
    domain: "ipolitics.ca",
    allow_cookies: 1
  },
  "Irish Independent": {
    domain: "independent.ie",
    allow_cookies: 1,
    block_regex: /(cdn\.flip-pay\.com\/clients\/inm\/flip-pay\.js)/
  },
  "Italia Oggi": {
    domain: "italiaoggi.it",
    allow_cookies: 1
  },
  "Knack.be": {
    domain: "knack.be",
    allow_cookies: 1,
    block_regex: /(\.knack\.be\/js\/responsive\/rmg(Modal|Paywall)\.js|\.blueconic\.net\/)/
  },
  "Kölner Stadt-Anzeiger": {
    domain: "ksta.de",
    allow_cookies: 1
  },
  "Kölnische Rundschau": {
    domain: "rundschau-online.de",
    allow_cookies: 1
  },
  "Krant van West-Vlaanderen": {
    domain: "kw.be",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Krautreporter.de": {
    domain: "krautreporter.de"
  },
  "L'Avenir": {
    domain: "lavenir.net",
    allow_cookies: 1
  },
  "L'Écho": {
    domain: "lecho.be",
    referer: "google"
  },
  "L'Équipe": {
    domain: "lequipe.fr",
    allow_cookies: 1,
    block_regex: /\.lequipe\.fr\/commons\/lequipe-paywall\/pagePaywall\.js/
  },
  "L'Express": {
    domain: "lexpress.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "L'Humanité": {
    domain: "humanite.fr",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "L'Obs": {
    domain: "nouvelobs.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "L'Oeil de la Photographie": {
    domain: "loeildelaphotographie.com",
    allow_cookies: 1,
    block_regex: /cdn\.loeildelaphotographie\.com\/wp-content\/.+\/hague-child\/js\/script-.+\.js/
  },
  "L'Opinion": {
    domain: "lopinion.fr",
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "L'Usine Nouvelle": {
    domain: "usinenouvelle.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "La Croix": {
    domain: "la-croix.com",
    allow_cookies: 1,
    block_regex: /(\.la-croix\.com\/build\/lacroix\/article.+\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "La Gazzetta dello Sport": {
    domain: "gazzetta.it",
    allow_cookies: 1
  },
  "La Libre.be": {
    domain: "lalibre.be",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "La Nación (free articles only)": {
    domain: "lanacion.com.ar"
  },
  "La Nouvelle République du Centre-Ouest": {
    domain: "lanouvellerepublique.fr",
    allow_cookies: 1,
    block_regex: /(\.weborama\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "La Nuova Sardegna": {
    domain: "lanuovasardegna.it"
  },
  "La Segunda": {
    domain: "lasegunda.com",
    block_regex: /\.(lasegunda\.com|emol\.cl)\/(.+\/)?js\/(.+\/)?(modal|merPramV\d|PramModal\.min)\.js/
  },
  "La Tercera": {
    domain: "latercera.com",
    allow_cookies: 1,
    block_regex: /(\.latercera\.com\/arc\/subs\/p\.min\.js|cdn\.cxense\.com\/)/
  },
  "La Tribune": {
    domain: "latribune.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "La Vanguardia": {
    domain: "lavanguardia.com",
    allow_cookies: 1,
    block_regex: /(\.evolok\.net\/|\.lavanguardia\.com\/(js\/)?godo-)/
  },
  "La Vie": {
    domain: "lavie.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "La Voz del Interior": {
    domain: "lavoz.com.ar",
    allow_cookies: 1
  },
  "Law.com (free articles only)": {
    domain: "law.com",
    allow_cookies: 1,
    remove_cookies: 1,
    referer: "facebook"
  },
  "Law360 (free articles only)": {
    domain: "law360.com",
    referer: "twitter"
  },
  "Le Devoir": {
    domain: "ledevoir.com",
    block_regex: /\.tinypass\.com\//,
    remove_cookies_select_drop: ["pw6"]
  },
  "Le Journal du Dimanche": {
    domain: "lejdd.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le Journal du Net": {
    domain: "journaldunet.com",
    allow_cookies: 1
  },
  "Le Nouvel Economiste": {
    domain: "lenouveleconomiste.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Le Parisien": {
    domain: "leparisien.fr",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//,
    useragent: "googlebot"
  },
  "Le Télégramme": {
    domain: "letelegramme.fr",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "Le Vif.be": {
    domain: "levif.be",
    allow_cookies: 1,
    block_regex: /(\.levif\.be\/js\/responsive\/rmg(Modal|Paywall)\.js|\.blueconic\.net\/)/
  },
  "Lee Enterprises Group": {
    domain: "###_usa_lee_ent",
    group: [
      "buffalonews.com",
      "journalnow.com",
      "omaha.com",
      "richmond.com",
      "tucson.com",
      "tulsaworld.com"
    ],
    allow_cookies: 1,
    block_regex: /(api\.bntech\.io\/js\/|\.com\/shared-content\/art\/tncms\/user\/user\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Les Échos": {
    domain: "lesechos.fr",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Les Inrockuptibles": {
    domain: "lesinrocks.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "Live Law": {
    domain: "livelaw.in",
    allow_cookies: 1
  },
  "LiveMint": {
    domain: "livemint.com",
    allow_cookies: 1,
    block_regex: /(\.livemint\.com\/__js\/lm_subscription_.+\.js|\.piano\.io\/api\/tinypass\.min\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Loeb Classical Library": {
    domain: "loebclassics.com"
  },
  "London Review of Books": {
    domain: "lrb.co.uk",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Los Angeles Times": {
    domain: "latimes.com",
    block_regex: /(metering\.platform\.latimes\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Madavor Media (opt-in to custom sites)": {
    domain: "###_usa_madavor"
  },
  "Madsack Mediengruppe": {
    domain: "###_de_madsack",
    group: [
      "haz.de",
      "kn-online.de",
      "ln-online.de",
      "lvz.de",
      "maz-online.de",
      "neuepresse.de",
      "ostsee-zeitung.de",
      "rnd.de"
    ],
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.piano\.io\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Mainichi Shimbun": {
    domain: "mainichi.jp",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Marianne.net": {
    domain: "marianne.net",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "MarketWatch": {
    domain: "marketwatch.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "McClatchy Group": {
    domain: "###_usa_mcc",
    group: [
      "bnd.com",
      "charlotteobserver.com",
      "fresnobee.com",
      "kansas.com",
      "kansascity.com",
      "kentucky.com",
      "miamiherald.com",
      "newsobserver.com",
      "sacbee.com",
      "star-telegram.com",
      "thestate.com",
      "tri-cityherald.com"
    ],
    block_regex: /(js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Mediahuis Nederland Regional": {
    domain: "###_nl_mediahuis_region",
    group: [
      "gooieneemlander.nl",
      "haarlemsdagblad.nl",
      "ijmuidercourant.nl",
      "leidschdagblad.nl",
      "noordhollandsdagblad.nl"
    ],
    allow_cookies: 1
  },
  "Mediahuis Noord": {
    domain: "###_nl_mediahuis_noord",
    group: [
      "dvhn.nl",
      "lc.nl"
    ],
    allow_cookies: 1,
    block_regex: /\.evolok\.net\//
  },
  "MediaNews Group": {
    domain: "###_usa_mng",
    group: [
      "denverpost.com",
      "eastbaytimes.com",
      "mercurynews.com",
      "ocregister.com",
      "pe.com",
      "twincities.com"
    ],
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|\.tinypass\.com\/|\.com\/.+\/loader\.min\.js|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Medium (free articles only)": {
    domain: "medium.com",
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Medium custom domains (free articles only; opt-in to custom sites)": {
    domain: "###_medium_custom",
    "group": [
      "betterprogramming.pub",
      "towardsdatascience.com"
    ]
  },
  "Medscape (regwall)": {
    domain: "medscape.com",
    allow_cookies: 1,
    block_regex: /\.medscapestatic\.com\/.+\/medscape-library\.js/
  },
  "Mexico News Daily": {
    domain: "mexiconewsdaily.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\/api\/tinypass\.min\.js/
  },
  "Mid-Day": {
    domain: "mid-day.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "MIT Sloan Management Review": {
    domain: "sloanreview.mit.edu",
    block_regex: /(\.tinypass\.com\/|\/sloanreview\.mit\.edu\/.+\/welcome-ad\.js)/,
    referer: "facebook"
  },
  "MIT Technology Review": {
    domain: "technologyreview.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.mjs)/
  },
  "Mitteldeutsche Zeitung": {
    domain: "mz.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Mountain View Voice": {
    domain: "mv-voice.com"
  },
  "National Geographic USA": {
    domain: "nationalgeographic.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//,
    random_ip: "eu"
  },
  "National Review": {
    domain: "nationalreview.com",
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|cdn\\.ampproject\\.org\\/v\\d\\/amp-access-.+\\.js)"
  },
  "Nautilus": {
    domain: "nautil.us",
    allow_cookies: 1
  },
  "Neue Osnabrücker Zeitung": {
    domain: "noz.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Neue Westfälische": {
    domain: "nw.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Neue Zürcher Zeitung (+ regional/opt-in to custom sites)": {
    domain: "nzz.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|(ens\.nzz\.ch|\.ensighten\.com)\/.+\/Bootstrap\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
    useragent: "googlebot"
  },
  "New Left Review": {
    domain: "newleftreview.org",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "New Scientist": {
    domain: "newscientist.com",
    allow_cookies: 1
  },
  "New York Magazine (+ Curbed, Grub Street, The Cut & Vulture)": {
    domain: "###_usa_nymag",
    group: [
      "curbed.com",
      "grubstreet.com",
      "nymag.com",
      "thecut.com",
      "vulture.com"
    ],
    remove_cookies_select_drop: ["nymcid", "first-nymcid"],
    block_regex: /fosse\.nymag\.com\/fosse\/.+\/scripts\/.+\.js/
  },
  "New Zealand Herald": {
    domain: "nzherald.co.nz",
    allow_cookies: 1,
    block_regex: /\.nzherald\.co\.nz\/pf\/resources\/(dist\/)?scripts\/(prebid|global-ad-script|tracking\/.+)\.js/,
    useragent: "bingbot"
  },
  "Newsday": {
    domain: "newsday.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Newsweek": {
    domain: "newsweek.com",
    block_regex: /(js\.pelcro\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "NHST Media Group": {
    domain: "###_no_nhst_media",
    group: [
      "dn.no",
      "europower-energi.no",
      "fiskeribladet.no",
      "intrafish.com",
      "intrafish.no",
      "rechargenews.com",
      "tradewindsnews.com",
      "upstreamonline.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Nikkei Asian Review (do not block Piano.io-script externally)": {
    domain: "asia.nikkei.com",
    remove_cookies_select_drop: ["xbc"]
  },
  "NK News (free articles only)": {
    domain: "nknews.org",
    remove_cookies_select_drop: ["issuem_lp"]
  },
  "Nordwest Zeitung": {
    domain: "nwzonline.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "NRC Handelsblad": {
    domain: "nrc.nl",
    remove_cookies_select_drop: ["counter"],
    block_regex: /\.nrc\.nl\/paywall-api\/api\/zephr/
  },
  "NyTeknik": {
    domain: "nyteknik.se",
    allow_cookies: 1,
    block_regex: /\.nyteknik\.se\/.+\/static\/js\/site\.min\.js/
  },
  "O Estado de S. Paulo": {
    domain: "estadao.com.br",
    block_regex: /(acesso\.estadao\.com\.br\/paywall\/.+\/.+\.js|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "O Globo (& Valor Econômico; cached articles only)": {
    domain: "globo.com",
    block_regex: /\.tinypass\.com\//
  },
  "Observador.pt": {
    domain: "observador.pt",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "Outlook Business": {
    domain: "outlookbusiness.com",
    allow_cookies: 1
  },
  "Outlook India": {
    domain: "outlookindia.com",
    allow_cookies: 1
  },
  "Outside magazines": {
    domain: "###_usa_outside_mag",
    group: [
      "backpacker.com",
      "betamtb.com",
      "betternutrition.com",
      "cleaneatingmag.com",
      "climbing.com",
      "cyclingtips.com",
      "gymclimber.com",
      "outsideonline.com",
      "oxygenmag.com",
      "pelotonmagazine.com",
      "podiumrunner.com",
      "rockandice.com",
      "skimag.com",
      "trailrunnermag.com",
      "triathlete.com",
      "vegetariantimes.com",
      "velonews.com",
      "womensrunning.com",
      "yogajournal.com"
    ],
    allow_cookies: 1,
    block_regex: "\\.{domain}\\/.+\\/scripts\\/contentGate.+\\.js"
  },
  "Palo Alto Online": {
    domain: "paloaltoonline.com"
  },
  "Paris Match": {
    domain: "parismatch.com",
    allow_cookies: 1,
    block_regex: /\.poool\.fr\//
  },
  "PEI Media (opt-in to custom sites)": {
    domain: "###_usa_pei"
  },
  "Penske Media Corporation": {
    domain: "###_usa_penske_media",
    allow_cookies: 1,
    group: [
      "billboard.com",
      "rollingstone.com",
      "sportico.com",
      "variety.com",
      "wwd.com"
    ],
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Philonomist": {
    domain: "philonomist.com",
    allow_cookies: 1
  },
  "Philosophy Now": {
    domain: "philosophynow.org"
  },
  "Piqd.de": {
    domain: "piqd.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Pittsburgh Post Gazette": {
    domain: "post-gazette.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "Política Exterior": {
    domain: "politicaexterior.com",
    allow_cookies: 1
  },
  "Popular Science": {
    domain: "popsci.com",
    allow_cookies: 1,
    block_regex: /js\.pelcro\.com\//
  },
  "Postmedia Network": {
    domain: "###_ca_postmedia",
    group: [
      "calgaryherald.com",
      "financialpost.com",
      "nationalpost.com",
      "theprovince.com",
      "torontosun.com",
      "vancouversun.com"
    ],
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Private Equity News": {
    domain: "penews.com",
    useragent: "googlebot"
  },
  "Prospect Magazine": {
    domain: "prospectmagazine.co.uk",
    allow_cookies: 1
  },
  "Puck.news": {
    domain: "puck.news",
    allow_cookies: 1
  },
  "Quartz": {
    domain: "qz.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "Quora (not plus)": {
    domain: "quora.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Quotidiano.net (+ regional)": {
    domain: "###_it_quotidiano",
    group: [
      "ilgiorno.it",
      "ilrestodelcarlino.it",
      "iltelegrafolivorno.it",
      "lanazione.it",
      "quotidiano.net"
    ],
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Reuters": {
    domain: "reuters.com",
    allow_cookies: 1,
    block_regex: /\.reuters\.com\/(arc\/subs\/p\.min|pf\/resources\/dist\/reuters\/js\/index)\.js/
  },
  "Rhein-Zeitung": {
    domain: "rhein-zeitung.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Rheinische Post Mediengruppe": {
    domain: "###_de_rp_medien",
    group: [
      "aachener-nachrichten.de",
      "aachener-zeitung.de",
      "ga.de",
      "rp-online.de",
      "saarbruecker-zeitung.de",
      "volksfreund.de"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "RugbyPass": {
    domain: "rugbypass.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "S&P Global": {
    domain: "spglobal.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Saltwire Network": {
    domain: "saltwire.com",
    allow_cookies: 1,
    block_regex: /\/loader-cdn\.azureedge\.net\//
  },
  "San Diego Union Tribune": {
    domain: "sandiegouniontribune.com",
    block_regex: /(metering\.platform\.sandiegouniontribune\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/
  },
  "Schleswig-Holsteinischer Zeitungsverlag": {
    domain: "shz.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Schweriner Volkszeitung": {
    domain: "svz.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "Science (free articles only)": {
    domain: "science.org",
    allow_cookies: 1
  },
  "Science & Vie": {
    domain: "science-et-vie.com",
    block_regex: /\.qiota\.com\//
  },
  "Sciences et Avenir": {
    domain: "sciencesetavenir.fr",
    block_regex: /(\.poool\.fr\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Scientific American": {
    domain: "scientificamerican.com",
    allow_cookies: 1,
    remove_cookies: 1
  },
  "Seeking Alpha": {
    domain: "seekingalpha.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org(\/.+)?\/v\d\/amp-(access|loader)-.+\.js)/
  },
  "Slate": {
    domain: "slate.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "SlideShare": {
    domain: "slideshare.net",
    allow_cookies: 1
  },
  "SOFREP": {
    domain: "sofrep.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/
  },
  "South China Morning Post": {
    domain: "scmp.com",
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Southern Weekly": {
    domain: "infzm.com",
    allow_cookies: 1
  },
  "Sports Illustrated": {
    domain: "si.com",
    allow_cookies: 1,
    block_regex: /\.blueconic\.net\//
  },
  "Star Tribune": {
    domain: "startribune.com",
    allow_cookies: 1,
    block_regex: /\.startribune\.com\/vendor\/js\//
  },
  "Statista": {
    domain: "statista.com",
    referer: "google"
  },
  "Stock News": {
    domain: "stocknews.com",
    allow_cookies: 1
  },
  "Stratfor": {
    domain: "stratfor.com",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "StuDocu (no downloads)": {
    domain: "studocu.com",
    allow_cookies: 1
  },
  "Substack (paywall-content only)": {
    domain: "substack.com",
    useragent: "googlebot"
  },
  "Substack custom domains (opt-in to custom sites)": {
    domain: "###_substack_custom"
  },
  "Suomen Sotilas": {
    domain: "suomensotilas.fi",
    allow_cookies: 1,
    block_regex: /\/suomensotilas\.fi\/wp-content\/plugins\/epflpw\/js\/pw\.js/
  },
  "Tampa Bay Times": {
    domain: "tampabay.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Tech in Asia": {
    domain: "techinasia.com",
    allow_cookies: 1
  },
  "Telegraaf": {
    domain: "telegraaf.nl",
    allow_cookies: 1
  },
  "Télérama": {
    domain: "telerama.fr",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Tes Magazine": {
    domain: "tes.com",
    remove_cookies_select_drop: ["tg_paywall"]
  },
  "The (New Orleans) Advocate": {
    domain: "###_usa_theadvocate",
    group: [
      "nola.com",
      "theadvocate.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.com\\/shared-content\\/art\\/tncms\\/user\\/user\\.js|js\\.matheranalytics\\.com\\/)"
  },
  "The Age": {
    domain: "theage.com.au",
    group_rule: "###_gr_au_nine_domains"
  },
  "The American Interest": {
    domain: "the-american-interest.com",
    allow_cookies: 1
  },
  "The Art Newspaper": {
    domain: "theartnewspaper.com",
    allow_cookies: 1,
    block_regex: /\.amazonaws.com\/production-website-scripts\/bouncer\.js/
  },
  "The Athletic": {
    domain: "###_usa_theathletic",
    group: [
      "theathletic.com"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "The Atlanta Journal-Constitution": {
    domain: "ajc.com",
    allow_cookies: 1,
    block_regex: /(loader-cdn\.azureedge\.net\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Atlantic": {
    domain: "theatlantic.com",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/,
    remove_cookies_select_drop: ["articleViews"]
  },
  "The Australian Financial Review": {
    domain: "afr.com",
    allow_cookies: 1,
    block_regex: /api\.afr\.com\/graphql\?query=.+PaywallRuleQuery/
  },
  "The Banker": {
    domain: "thebanker.com",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Boston Globe": {
    domain: "bostonglobe.com",
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|meter\.bostonglobe\.com\/js\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/
  },
  "The Business Journals (free articles only)": {
    domain: "bizjournals.com",
    block_regex: /(assets\.bizjournals\.com\/static\/js\/app\/cxense\.js|cdn\.cxense\.com\/)/
  },
  "The Business of Fashion": {
    domain: "businessoffashion.com",
    allow_cookies: 1,
    block_regex: /(\.businessoffashion\.com\/zephr\/features|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Christian Science Monitor": {
    domain: "csmonitor.com",
    allow_cookies: 1
  },
  "The Chronicle of Higher Education (& Philanthropy)": {
    domain: "###_usa_chronicle",
    group: [
      "chronicle.com",
      "philanthropy.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/)"
  },
  "The Critic": {
    domain: "thecritic.co.uk",
    block_regex: /\.hadrianpaywall\.com\//
  },
  "The Daily Beast": {
    domain: "thedailybeast.com",
    block_regex: /\.tinypass\.com\//
  },
  "The Daily Wire (only news)": {
    domain: "dailywire.com",
    allow_cookies: 1
  },
  "The Dallas Morning News": {
    domain: "dallasnews.com",
    allow_cookies: 1,
    block_regex: /(\.blueconic\.net\/|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "The Diplomat": {
    domain: "thediplomat.com",
    block_regex: /\/thediplomat\.com\/.+\/js\/angular-cookies\.min\.js/,
    remove_cookies_select_drop: ["dpl-pw"]
  },
  "The Economic Times (ET Prime)": {
    domain: "###_economictimes",
    group: [
      "economictimes.com",
      "economictimes.indiatimes.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Economist": {
    domain: "economist.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Financial Express": {
    domain: "financialexpress.com",
    allow_cookies: 1,
    block_regex: /(\.financialexpress\.com\/.+\/min\/premiumStoryContent\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Globe and Mail": {
    domain: "theglobeandmail.com",
    block_regex: /smartwall\.theglobeandmail\.com\//
  },
  "The Hill": {
    domain: "thehill.com",
    allow_cookies: 1,
    block_regex: /\.tinypass\.com\//
  },
  "The Hill Times": {
    domain: "hilltimes.com",
    allow_cookies: 1,
    block_regex: /\.hilltimes\.com\/.+\/js\/loadingoverlay\/loadingoverlay\.min\.js/,
    useragent: "googlebot"
  },
  "The Hindu": {
    domain: "thehindu.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "The Hindu BusinessLine": {
    domain: "thehindubusinessline.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Independent": {
    domain: "independent.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Indian Express": {
    domain: "indianexpress.com",
    allow_cookies: 1,
    block_regex: /(\/indianexpress\.com\/.+\/indianexpress\/js\/(evolok\/.+|min\/premiumContent)\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Intercept": {
    domain: "theintercept.com",
    allow_cookies: 1,
    block_regex: /\.theintercept\.com\/api\/tinypass\.min\.js/
  },
  "The Irish Times": {
    domain: "irishtimes.com",
    allow_cookies: 1,
    block_regex: /\.irishtimes\.com\/zephr\/features/
  },
  "The Japan Times (recent/last 2 months articles only; do not block Piano.io-script externally)": {
    domain: "japantimes.co.jp",
    block_regex: /cdn\.cxense\.com\//,
    remove_cookies_select_drop: ["xbc"]
  },
  "The Jerusalem Post": {
    domain: "jpost.com",
    allow_cookies: 1,
    block_regex: /\.jpost\.com\/js\/js_article\.min\.js/
  },
  "The Lawyer's Daily": {
    domain: "thelawyersdaily.ca",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "The Marker": {
    domain: "themarker.com",
    allow_cookies: 1,
    useragent: "bingbot"
  },
  "The Market.ch": {
    domain: "themarket.ch",
    allow_cookies: 1,
    block_regex: /(\.piano\.io\/|ens\.themarket\.ch\/.+\/Bootstrap\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/,
    useragent: "googlebot"
  },
  "The Nation": {
    domain: "thenation.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The New Atlantis": {
    domain: "thenewatlantis.com",
    allow_cookies: 1,
    block_regex: /\.thenewatlantis\.com\/.+\/thenewatlantis\/js\/(gate|donate)\.js/
  },
  "The New European": {
    domain: "theneweuropean.co.uk",
    allow_cookies: 1,
    block_regex: /cdn\.tinypass\.com\//
  },
  "The New Republic": {
    domain: "newrepublic.com",
    allow_cookies: 1,
    block_regex: /\/blink\.net\/.+\/blink-sdk\.js/
  },
  "The New Statesman": {
    domain: "newstatesman.com",
    allow_cookies: 1,
    block_regex: /\.newstatesman\.com\/.+\/nsmg-evolok-paywall\/.+\.js/
  },
  "The New York Review of Books": {
    domain: "nybooks.com",
    allow_cookies: 1,
    block_regex: /\.nybooks\.com\/wp-admin\/admin-ajax\.php/
  },
  "The New York Times": {
    domain: "nytimes.com",
    allow_cookies: 1,
    block_regex: /(meter-svc\.nytimes\.com\/meter\.js|mwcm\.nyt\.com\/.+\.js|cooking\.nytimes\.com\/api\/.+\/access)/
  },
  "The Philadelphia Inquirer": {
    domain: "inquirer.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|js\.matheranalytics\.com\/)/
  },
  "The Point Magazine": {
    domain: "thepointmag.com",
    remove_cookies_select_drop: ["monthly_history"]
  },
  "The Saturday Paper": {
    domain: "thesaturdaypaper.com.au",
    block_regex: /\.thesaturdaypaper\.com\.au\/sites\/all\/modules\/custom\/node_meter\/pw\.js/
  },
  "The Seattle Times": {
    domain: "seattletimes.com",
    allow_cookies: 1,
    block_regex: /(\.seattletimes\.com\/wp-content\/.+\/st-(advertising|blocking)-bundle\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Scotsman": {
    domain: "scotsman.com",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Spectator (UK)": {
    domain: "spectator.co.uk",
    block_regex: /\.tinypass\.com\//
  },
  "The Spectator Australia": {
    domain: "spectator.com.au",
    block_regex: /\.tinypass\.com\//
  },
  "The Spectator World": {
    domain: "spectatorworld.com",
    block_regex: /(cdn\.cxense\.com\/|\.tinypass\.com\/)/
  },
  "The Star Malaysia": {
    domain: "thestar.com.my",
    block_regex: /(cdn\.cxense\.com\/|\.piano\.io\/)/
  },
  "The Sydney Morning Herald": {
    domain: "smh.com.au",
    group_rule: "###_gr_au_nine_domains"
  },
  "The Telegraph": {
    domain: "telegraph.co.uk",
    allow_cookies: 1,
    block_regex: /(\.tinypass\.com\/|\.telegraph\.co\.uk\/martech\/js\/|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "The Times (UK)": {
    domain: "thetimes.co.uk",
    allow_cookies: 1
  },
  "The Times Literary Supplement": {
    domain: "the-tls.co.uk",
    referer: "google"
  },
  "The Toronto Star (+ local TorStar sites)": {
    domain: "###_ca_torstar",
    group: [
      "niagarafallsreview.ca",
      "stcatharinesstandard.ca",
      "thepeterboroughexaminer.com",
      "therecord.com",
      "thespec.com",
      "thestar.com",
      "wellandtribune.ca"
    ],
    allow_cookies: 1,
    block_regex: "(\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|cdn\\.ampproject\\.org\\/v\\d\\/amp-access-.+\\.js)"
  },
  "The Wall Street Journal": {
    domain: "wsj.com",
    allow_cookies: 1,
    block_regex: /(cdn\.cxense\.com\/|cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js)/,
    useragent: "googlebot"
  },
  "The Washington Post": {
    domain: "washingtonpost.com",
    allow_cookies: 1,
    block_regex: /\.washingtonpost\.com\/tetro\/metering\/evaluate/
  },
  "The West Australian (+ regional/opt-in to custom sites)": {
    domain: "thewest.com.au",
    allow_cookies: 1
  },
  "The Wrap": {
    domain: "thewrap.com",
    allow_cookies: 1,
    block_regex: /\.wallkit\.net\/js\//
  },
  "Time Magazine": {
    domain: "time.com",
    allow_cookies: 1,
    block_regex: /(\/time\.com\/dist\/meter-wall-client-js\..+\.js|cdn\.ampproject\.org\/v\d\/amp-access-.+\.js)/
  },
  "Times Higher Education": {
    domain: "timeshighereducation.com",
    allow_cookies: 1,
    block_regex: /\.timeshighereducation\.com\/sites\/default\/files\/.+\/js__.+\.js/
  },
  "Times of India": {
    domain: "###_timesofindia",
    group: [
      "timesofindia.com",
      "timesofindia.indiatimes.com"
    ],
    allow_cookies: 1,
    useragent: "googlebot",
    exception: [{
        domain: "timesofindia.indiatimes.com",
        allow_cookies: 1
      }
    ]
  },
  "TownNews sites (Blox CMS)": {
    domain: "###_usa_townnews"
  },
  "Tribune Publishing Company": {
    domain: "###_usa_tribune",
    group: [
      "baltimoresun.com",
      "capitalgazette.com",
      "chicagotribune.com",
      "courant.com",
      "dailypress.com",
      "mcall.com",
      "nydailynews.com",
      "orlandosentinel.com",
      "pilotonline.com",
      "sun-sentinel.com"
    ],
    allow_cookies: 1,
    block_regex: "(\\.tribdss\\.com\\/|\\.{domain}\\/script\\.js|\\.blueconic\\.net\\/|\\.zephr\\.com\\/zephr-browser\\/.+\\/zephr-browser\\.umd\\.js)"
  },
  "UnHerd": {
    domain: "unherd.com",
    allow_cookies: 1,
    block_regex: /\.piano\.io\//
  },
  "UOL.com.br": {
    domain: "uol.com.br",
    allow_cookies: 1,
    block_regex: /(\.folha\.uol\.com\.br\/paywall\/js\/|paywall\.folha\.uol\.com\.br\/|\.tinypass\.com|js\.matheranalytics\.com\/|cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js)/,
    useragent: "googlebot"
  },
  "USA Today": {
    domain: "usatoday.com",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-access-.+\.js/,
    useragent: "googlebot"
  },
  "Valeurs Actuelles": {
    domain: "valeursactuelles.com",
    allow_cookies: 1,
    block_regex: /\.qiota\.com\//
  },
  "VentureBeat": {
    domain: "venturebeat.com",
    allow_cookies: 1,
    block_regex: /\.wallkit\.net\/js\//
  },
  "Vogue Business": {
    allow_cookies: 1,
    domain: "voguebusiness.com",
    useragent: "googlebot",
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Volksstimme": {
    domain: "volksstimme.de",
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-(access|subscriptions)-.+\.js/
  },
  "Vrij Nederland": {
    domain: "vn.nl",
    allow_cookies: 1
  },
  "WAtoday": {
    domain: "watoday.com.au",
    group_rule: "###_gr_au_nine_domains"
  },
  "Weltkunst": {
    domain: "weltkunst.de",
    allow_cookies: 1,
    useragent: "googlebot"
  },
  "Westdeutsche Zeitung": {
    allow_cookies: 1,
    domain: "wz.de",
    useragent: "googlebot"
  },
  "Westfälische Mediengruppe": {
    domain: "###_de_westfalen_medien",
    group: [
      "muensterschezeitung.de",
      "westfalen-blatt.de",
      "wn.de"
    ],
    allow_cookies: 1,
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "Winnipeg Free Press": {
    domain: "winnipegfreepress.com",
    allow_cookies: 1,
    block_regex: /(account\.winnipegfreepress\.com\/api\/v\d\/auth\/identify|cdn\.cxense\.com\/)/
  },
  "###_gr_au_nine_domains": {
    group_rule_domains: ["brisbanetimes.com.au", "smh.com.au", "theage.com.au", "watoday.com.au"],
    block_regex: /cdn\.ampproject\.org\/v\d\/amp-subscriptions-.+\.js/
  },
  "* Block Paywall-scripts (opt-in to custom sites to enable also for unlisted sites)": {
    domain: "###"
  },
  "Amp-access": {
    domain: "cdn.ampproject.org"
  },
  "AzureEdge": {
    domain: "loader-cdn.azureedge.net"
  },
  "BlueConic": {
    domain: "blueconic.net"
  },
  "Cxense": {
    domain: "cxense.com"
  },
  "Ensighten": {
    domain: "ensighten.com"
  },
  "Evolok": {
    domain: "evolok.net"
  },
  "Evolok WordPress": {
    domain: "###_wp_evolok"
  },
  "Leaky Paywall (WordPress plugin)": {
    domain: "###_wp_leaky_paywall"
  },
  "MatherAnalytics": {
    domain: "matheranalytics.com"
  },
  "NewsMemory": {
    domain: "newsmemory.com"
  },
  "Omeda Olytics": {
    domain: "omeda.com"
  },
  "OneCount": {
    domain: "onecount.net"
  },
  "Pelcro": {
    domain: "pelcro.com"
  },
  "Piano.io": {
    domain: "piano.io"
  },
  "Pico.tools": {
    domain: "pico.tools"
  },
  "Pigeon (WordPress plugin)": {
    domain: "###_wp_pigeon"
  },
  "Poool.fr": {
    domain: "poool.fr"
  },
  "Qiota": {
    domain: "qiota.com"
  },
  "TinyPass": {
    domain: "tinypass.com"
  },
  "TribDss": {
    domain: "tribdss.com"
  },
  "Weborama.fr": {
    domain: "weborama.fr"
  },
  "Zephr": {
    domain: "zephr.com"
  },
  "* BPC settings": {
    domain: "###"
  },
  "Show options on update": {
    domain: "#options_on_update"
  },
  "Enable new sites by default": {
    domain: "#options_enable_new_sites"
  },
  "Check for update rules at startup": {
    domain: "#options_optin_update_rules"
  },
  "Restore opt-in for custom sites (on reload; load unpacked)": {
    domain: "#options_restore_custom"
  },
  "Barron's - no Googlebot (http error 500)": {
    domain: "#options_disable_gb_barrons"
  },
  "The Wall Street Journal - no Googlebot (http error 500)": {
    domain: "#options_disable_gb_wsj"
  },
}

if (typeof browser === 'object') {
  let key = Object.keys(defaultSites).find(key => defaultSites[key].domain === '#options_restore_custom');
  if (key)
    delete defaultSites[key];
}

var defaultSites_grouped_domains = Object.values(defaultSites).filter(function (value) {
    return (value.hasOwnProperty('domain') && value.domain !== '###');
  }).map(x => x.domain);
var defaultSites_groups_domains = [].concat.apply([], Object.values(defaultSites).filter(function (value) {
    return value.hasOwnProperty('group');
  }).map(x => x.group));
var defaultSites_domains = defaultSites_grouped_domains.concat(defaultSites_groups_domains);

function addCookieRules(rule, custom) {
  if (rule.hasOwnProperty('remove_cookies_select_drop') || rule.hasOwnProperty('remove_cookies_select_hold') || (custom && !rule.hasOwnProperty('allow_cookies'))) {
    rule.allow_cookies = 1;
    rule.remove_cookies = 1;
  }
}

function expandSiteRules(sites, updated = false) {
  for (let site in sites) {
    let rule = sites[site];
    if (rule.hasOwnProperty('group_rule')) {
      let rules = sites[rule.group_rule];
      for (key in rules) {
        if (key !== 'group_rule_domains')
          sites[site][key] = rules[key];
      }
      //delete sites[site].group_rule;
    }
    if (updated) {
      if (rule.hasOwnProperty('group_rule_domains')) {
        let domains = rule.group_rule_domains;
        for (let domain of domains) {
          let defaultTitle = Object.keys(defaultSites).find(key => defaultSites[key].domain === domain);
          if (defaultTitle) {
            for (key in rule) {
              if (key !== 'group_rule_domains')
                defaultSites[defaultTitle][key] = rule[key];
            }
          }
        }
      }
    }
    if (rule.hasOwnProperty('group')) {
      let domain = rule.domain;
      grouped_sites[domain] = rule.group
    }
  }
}

var grouped_sites = {};
expandSiteRules(defaultSites);

// grouped domains (background)
var au_news_corp_domains = grouped_sites['###_au_news_corp'];
var de_westfalen_medien_domains = grouped_sites['###_de_westfalen_medien'];
var fr_groupe_sud_ouest_domains = grouped_sites['###_fr_groupe_sud_ouest'];
var it_gedi_domains = grouped_sites['###_it_gedi'];
var nl_mediahuis_region_domains = grouped_sites['###_nl_mediahuis_region'];
var no_nhst_media_domains = grouped_sites['###_no_nhst_media'];

// custom domains (background)
var au_comm_media_domains, au_thewest_domains, ca_gcm_domains, ca_postmedia_domains, ch_media_domains, cl_emol_region_domains, de_funke_medien_domains, de_madsack_domains, es_epiberica_domains, fr_gcf_domains, leaky_paywall_domains, medium_custom_domains, nl_mediahuis_noord_domains, substack_custom_domains, usa_gannett_domains, usa_hearst_comm_domains, usa_lee_ent_domains, usa_madavor_domains, usa_mcc_domains, usa_mng_domains, usa_pei_domains, usa_townnews_domains;

function init_custom_domains() {
  au_comm_media_domains = grouped_sites['###_au_comm_media'];
  au_thewest_domains = ['thewest.com.au'];
  ca_gcm_domains = grouped_sites['###_ca_gcm'];
  ca_postmedia_domains = grouped_sites['###_ca_postmedia'];
  ch_media_domains = [];
  cl_emol_region_domains = [];
  de_funke_medien_domains = grouped_sites['###_de_funke_medien'];
  de_madsack_domains = grouped_sites['###_de_madsack'];
  es_epiberica_domains = grouped_sites['###_es_epiberica'];
  fr_gcf_domains = grouped_sites['###_fr_gcf'];
  leaky_paywall_domains = [];
  medium_custom_domains = grouped_sites['###_medium_custom'];
  nl_mediahuis_noord_domains = [];
  substack_custom_domains = [];
  usa_gannett_domains = grouped_sites['###_usa_gannett'];
  usa_hearst_comm_domains = grouped_sites['###_usa_hearst_comm'];
  usa_lee_ent_domains = grouped_sites['###_usa_lee_ent'];
  usa_madavor_domains = [];
  usa_mcc_domains = grouped_sites['###_usa_mcc'];
  usa_mng_domains = grouped_sites['###_usa_mng'];
  usa_pei_domains = [];
  usa_townnews_domains = [];
}
init_custom_domains();

// sites with no fix (background)
var be_mediahuis_nofix_domains = ['gva.be', 'hbvl.be', 'nieuwsblad.be', 'standaard.be'];
var nl_dpg_media_nofix_domains = ['ad.nl', 'bd.nl', 'bndestem.nl', 'destentor.nl', 'ed.nl', 'gelderlander.nl', 'hln.be', 'pzc.nl', 'tubantia.nl'];
var nofix_sites = ['africaintelligence.com', 'africaintelligence.fr', 'aftenposten.no', 'bild.de', 'borsen.dk', 'businesstimes.com.sg', 'caixin.com', 'caixinglobal.com', 'caravanmagazine.in', 'cnbc.com', 'courrierinternational.com', 'dn.se', 'elordenmundial.com', 'epw.in', 'expresso.pt', 'ftchinese.com', 'handelsblatt.com', 'hln.be', 'hs.fi', 'ilsole24ore.com', 'jacobinmag.com', 'jeuneafrique.com', 'kurier.at', 'lavozdegalicia.es', 'leconomiste.com', 'lefigaro.fr', 'lemonde.fr', 'lepoint.fr', 'letemps.ch', 'liberation.fr', 'medianama.com', 'mediapart.fr', 'milanofinanza.it', 'mondediplo.com', 'moneycontrol.com', 'nbr.co.nz', 'ouest-france.fr', 'politiken.dk', 'pressreader.com', 'publico.pt', 'republic.ru', 'statnews.com', 'stern.de', 'straitstimes.com', 'sueddeutsche.de', 'tagesanzeiger.ch', 'tagesspiegel.de', 'the-ken.com', 'theinformation.com', ' themorningcontext.com', 'theparisreview.org', 'thewirechina.com', 'welt.de', 'worldpoliticsreview.com', 'ynet.co.il', 'zerohedge.com'].concat(be_mediahuis_nofix_domains, nl_dpg_media_nofix_domains);
