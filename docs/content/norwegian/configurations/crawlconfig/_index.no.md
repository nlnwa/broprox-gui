---
title: "CrawlConfig"
weight: 6
---

{{% notice info%}}
Crawlconfig blir brukt av [crawljob](../crawljob)
{{% /notice %}}  

Crawlconfig inneholder innstillinger for hvordan innhold skal høstes. Her settes blant annet hvilken konfigurasjon
nettleseren som brukes til høstingen skal benytte, og hvor høffelig høsteren skal være.  

I tillegg til parameterene nevnt på denne siden 
inneholder også konfigurasjonen [metadata](../#veidemann-meta).

![crawlconfig overview](/veidemann/docs/img/crawlconfig/veidemann_dashboard_crawlconfig_overview.png)

Felt                                             | Betydning
-------------------------------------------------|------------------------------------------
[Browserconfig](#crawlconfig-browserconfig)      | Hvilken [browserconfig](../browserconfig) skal benyttes.
[Politenessconfig](#crawlconfig-politenessconfig)| Hvilken [politenessconfig](../politenessconfig) skal benyttes.
[DNS TTL](#crawlconfig-dns-ttl)                  | Ikke implementert.
[Prioritet vekting](#crawlconfig-priority-weight)| Sette prioritet. 
[Ekstraher tekst](crawlconfig-extract-text)      | Skal teksten på en høstet side legges i databasen.
[Lag snapshot](#crawlconfig-create-snapshot)     | Skal det lages snapshot av forsiden til siden. 
[Dybde først](#crawlconfig-depth-first)          | Ikke implementert.

#### Listen over tilgjengelige crawlconfigs
--------------------------------------------

##### Snarveier
---------------

Ikon                                                                                                | Snarvei
----------------------------------------------------------------------------------------------------|-------------------------------------------------------
![show_collection](/veidemann/docs/img/icons/veidemann_dashboard_icon_collection.png)               | Gå til collection som er brukt i konfigurasjonen
![show_browserconfig](/veidemann/docs/img/icons/veidemann_dashboard_icon_browserconfig.png)         | Gå til browserconfig som er brukt i konfigurasjonen
![show_politeness](/veidemann/docs/img/icons/veidemann_dashboard_icon_politeness.png)               | Gå til politeness som er brukt i konfigurasjonen
![show_crawljobs_with_crawlconfig](/veidemann/docs/img/icons/veidemann_dashboard_icon_crawljob.png) | Vis crawljobs som bruker crawlconfigen
![clone_crawlconfig](/veidemann/docs/img/icons/veidemann_dashboard_icon_clone_config.png)           | Lag en klone av crawlconfig

##### Søk, sortering og filtrering
----------------------------------
Listen over konfigurasjoner kan søkes i og sorteres på samme måte som beskrevet [her](../#config-search-filter-sort).
I tillegg kan listen filtreres til å kun vise crawlconfigs som bruker en bestemt collection, browserconfig eller politeness.
Ved å trykke på et av feltene, hentes en liste over tilgjengelige konfigurasjoner av denne typen. 

#### Browserconfig {#crawlconfig-browserconfig}
-----------------------------------------------  
Setter hvilken [browserconfig](../browserconfig) konfigurasjonen skal bruke.
Browserconfig består av innstillinger for nettleseren som brukes til høstingen. 

#### Politenessconfig {#crawlconfig-politenessconfig}
-----------------------------------------------------
Setter hvilken [politenessconfig](../politenessconfig) konfigurasjonen skal bruke.
Politenessconfig består av innstillinger som bestemmer hvor stor belastning høsteren skal utsette sidene den besøker.

#### DNS TTL {#crawlconfig-dns-ttl}
------------------------------------
Ikke implementert.

#### Prioritet vekting {#crawlconfig-priority-weight}
-----------------------------------------------------
Setter en prioritet for en jobb, som brukes til å velge hvilke jobber som skal få kjøre først i tilfeller hvor flere
jobber konkurerer om å hente ressurser fra samme host.
Jobben vil bli tilfeldig valgt, men vekten avgjør hvilken som skal kjøre først.
Om man til eksempel har to jobber med en vekt på 1.0 og en jobb med en vekt på 2.0 som konkurerer om samme ressurs,
vil hver av de to første jobbene ha en 25% sjanse på å bli valgt mens den tredje jobben vil ha 50% sjanse på å
bli valgt.

#### Ekstraher tekst {#crawlconfig-extract-text}
-----------------------------------------------
Bestemmer om teksten fra sidene som høstes skal hentes ut og legges i databasen.
Vil kunne brukes til å gjøre innhold søkbart og til analyse av målform i Målfrid.

#### Lag snapshot {#crawlconfig-create-snapshot}
------------------------------------------------
Bestemmer om det skal tas et snapshot av forsiden til siden som høstet.

#### Dybde først {#crawlconfig-depth-first}
-------------------------------------------
Ikke implementert
