import { Component } from '@angular/core';

import { Merchant } from 'src/app/model/merchant';


@Component({
  selector: 'app-verfallsdatum',
  templateUrl: './verfallsdatum.component.html',
  styleUrls: ['./verfallsdatum.component.css'],
 
})

export class VerfallsdatumComponent {

 
  merchants: Merchant[] = [
    {
      "Name": "1 kg  Moyen Couscous Tayba"
    },
    {
      "Name": "1 kg MOYN COUSCOUS  DARI"
    },
    {
      "Name": "1 kg Moy COUSCOUS TRIA"
    },
    {
      "Name": "1 kg SEMOULE  MAYMOUNA"
    },
    {
      "Name": "1,5 lFanta Orange  inklusivepfand 0,25€"
    },
    {
      "Name": "12 Orientalische Teegläser selber"
    },
    {
      "Name": "1kg FIN COUSCOUS  DARI"
    },
    {
      "Name": "1kg FIN COUSCOUS TRIA"
    },
    {
      "Name": "20 ml Essig el baraka"
    },
    {
      "Name": "30cm Marokkanische Tajine natur 3-4 Personen Ø 30cm"
    },
    {
      "Name": "5 kg  Fino SEMOULE  Mymouna"
    },
    {
      "Name": "5 kg Durra Basmati reis"
    },
    {
      "Name": "500ml Orangen Wasser Samra"
    },
    {
      "Name": "5kg FIN COUSCOUS  DARI"
    },
    {
      "Name": "5kg Gersten Mehl mix chatar"
    },
    {
      "Name": "5kg MOYEN COUSCOUS  DARI"
    },
    {
      "Name": "800g Durra tomatenmarkt"
    },
    {
      "Name": "Beldia TCHICHA  1kg"
    },
    {
      "Name": "Durra  Magdus gef Auberginen  1.4 kg"
    },
    {
      "Name": "El Jadida  Multi Orientalische Hängelampe"
    },
    {
      "Name": "Kenitra  Orientalische Hängelampe"
    },
    {
      "Name": "0,8 L Induktions Orientalische -Teekanne"
    },
    {
      "Name": "0.50 L Dpg fl Volvic ink.Pfand"
    },
    {
      "Name": "1,2 l Sahara  Marokkanische Teekanne"
    },
    {
      "Name": "1,5 L Induktion Orientalische -Teekanne"
    },
    {
      "Name": "12 Orientalische Marokkanische Teegläser Niamir"
    },
    {
      "Name": "1l. Sahara  Marokkanische Teekanne"
    },
    {
      "Name": "2 Personen Decke Premium quality"
    },
    {
      "Name": "20 cm Orientalischer Prozellan Teller Oriental rund"
    },
    {
      "Name": "25 cm Orientalischer Prozellan Teller Oriental rund"
    },
    {
      "Name": "30 cm Marokkanische Tajine Royal Induktion"
    },
    {
      "Name": "34 cm Marokkanische Tajine Royal Induktion"
    },
    {
      "Name": "34 cm Marokkanische Tajine Tanger glasiert 4-5 Personen Modell 2"
    },
    {
      "Name": "5L Schnellkochtopf Schwarz"
    },
    {
      "Name": "8 Liter CousCous Topf / Dampfgarer Agadir"
    },
    {
      "Name": "8L Silber Dampfer 8L induktion"
    },
    {
      "Name": "AMLOU IN GLAS 200GR"
    },
    {
      "Name": "ANISKÖRNER GANZ MELIK 150GR."
    },
    {
      "Name": "ASBAL SCHALE HONIG MIT WABEN 500G"
    },
    {
      "Name": "Abido Gewürze Chili Rot 50g"
    },
    {
      "Name": "Abido Gewürze Kabsa 50g"
    },
    {
      "Name": "Abido Gewürze Koriander 50g"
    },
    {
      "Name": "Abido Gewürze Sieben Gewürzmischung 50g"
    },
    {
      "Name": "Abido Gewürze Sumac 50g"
    },
    {
      "Name": "Abido Gewürze Zitronensäure 50g"
    },
    {
      "Name": "Abido Gewürze chawarma 50g"
    },
    {
      "Name": "Ail Moulu"
    },
    {
      "Name": "Al Amira Kürbiskerne 300g"
    },
    {
      "Name": "Al Raii Hähnchen 800g"
    },
    {
      "Name": "Alhamawi Verzollt Kaffee 500g"
    },
    {
      "Name": "Arganöl Essbar 250 ml"
    },
    {
      "Name": "Aseel vegetable Butter Ghee 500g"
    },
    {
      "Name": "Aud malaki Raumspray /Duft Al-Nassr"
    },
    {
      "Name": "BABA GHANOUGE 400 GR CHTORA"
    },
    {
      "Name": "BAD REICHENHALLER ALPENSALZ TUZ MAVI 500GR"
    },
    {
      "Name": "BAKHOOR NABEEL NASAEM TABLETTE 40g"
    },
    {
      "Name": "BENJOIN BLANC 150GR (MA)"
    },
    {
      "Name": "BOCKSHORNKLEE GANZ MELIK 200GR"
    },
    {
      "Name": "BOUILLOIRE CHEFELEMENT INOX 2.5l"
    },
    {
      "Name": "Bachour King"
    },
    {
      "Name": "Backpulver Alsa 10x7,5g"
    },
    {
      "Name": "Bockshornklee Öl 30ml"
    },
    {
      "Name": "Briwat Mandeln 500g"
    },
    {
      "Name": "CALNORT FISCH"
    },
    {
      "Name": "CALNORT GELATINE PULVER NEUTRAL 2X10G"
    },
    {
      "Name": "CALNORT HUHN"
    },
    {
      "Name": "CAMPIONI N°17 SANTER MOY"
    },
    {
      "Name": "CAMPIONI N°20 MHAMSSA MOY"
    },
    {
      "Name": "CASHEWKERNE GESALZEN MELIK 300GR."
    },
    {
      "Name": "CASWEHKERNE NATURELL MELIK 300GR."
    },
    {
      "Name": "CHORBA IDEAL  110g"
    },
    {
      "Name": "CHTOURA FIELDS COMBI 800g"
    },
    {
      "Name": "COCO RAPE 300GR"
    },
    {
      "Name": "CONFITURE EL BARAKA ABRICOT 430 GR"
    },
    {
      "Name": "CONFITURE EL BARAKA FRAISE 430 GR"
    },
    {
      "Name": "CORIANDRE KN MOULU 200GR"
    },
    {
      "Name": "CalNort Lammfleischrühe in Pulver 250g"
    },
    {
      "Name": "Chokolade goufrett Maruja"
    },
    {
      "Name": "Chtoura Bohnen Sade (fool) 100g"
    },
    {
      "Name": "Cocktailtomaten pauline"
    },
    {
      "Name": "CousCous Topf / Dampfgarer 12 Liter"
    },
    {
      "Name": "CousCous Topf / Dampfgarer 6 Liter"
    },
    {
      "Name": "Creme Patissiere Citron Ideal 200g"
    },
    {
      "Name": "DATTELN BRANCHEE ALGERIE 1.KG"
    },
    {
      "Name": "DATTELN GEMAHLEN 1.KG"
    },
    {
      "Name": "DATTELN MEDJOUL SOUMISHA 800GR."
    },
    {
      "Name": "DATTELN SHOMISHA MEDIUM 900GR."
    },
    {
      "Name": "DATTELN TUN.BRANCHEE HAYET 1.KG"
    },
    {
      "Name": "DENTIFRICE MISWAK 170gm 120 + 50g"
    },
    {
      "Name": "Dattel Syrup Basra"
    },
    {
      "Name": "Datteln Bahri"
    },
    {
      "Name": "Deo Raumspray Orientalisches Mixed Royal oud Al Fakhama"
    },
    {
      "Name": "Deo Raumspray Orientalisches Mixed Royal oud Safae"
    },
    {
      "Name": "Dura Oliven Salat 375g"
    },
    {
      "Name": "Dura Peperoni 1.4kg"
    },
    {
      "Name": "Durra Bohnen Mix Libanon"
    },
    {
      "Name": "Durra Bohnen Mix chili"
    },
    {
      "Name": "Durra Bohnen Sade 400g"
    },
    {
      "Name": "Durra Bread Stiks 450g"
    },
    {
      "Name": "Durra Eingelegte Gemüse 1,4 kg"
    },
    {
      "Name": "Durra Eingelegte Gemüse 400g"
    },
    {
      "Name": "Durra Freekeh 450g"
    },
    {
      "Name": "Durra Sesampaste 400g"
    },
    {
      "Name": "Durra Thymian(Satar) 400g"
    },
    {
      "Name": "Durra Tomatenmark 650g"
    },
    {
      "Name": "Duval Granatapfel"
    },
    {
      "Name": "Duval Minze"
    },
    {
      "Name": "EFEPASA GÜVVEN DILIM SUCUK 200GR"
    },
    {
      "Name": "EFEPASA YONCA PARMAK SUCUCK 500GR"
    },
    {
      "Name": "EGEM DILIM SALAMI"
    },
    {
      "Name": "EGETAT DILIM SUCUK ACI 250GR"
    },
    {
      "Name": "EGETÜRK AVCI SOSIS 550GR"
    },
    {
      "Name": "EGETÜRK DALYAN RIN.SAL.UNG.150G"
    },
    {
      "Name": "EGETÜRK Egemen Knbw. Par 500g"
    },
    {
      "Name": "EGETÜRK GÜRBÜZ DILIM SALAM"
    },
    {
      "Name": "EISENKRAUT MELUISA MELIK 50GR."
    },
    {
      "Name": "ENSEMBLE DE COUVERT 18736 4PCS"
    },
    {
      "Name": "EPICES 777 CARVI MOULU (200g x 25)"
    },
    {
      "Name": "EPICES 777 CRESSONNETTE GRAINES 200g"
    },
    {
      "Name": "EPICES 777 FENOUIL GRAINS 200g"
    },
    {
      "Name": "EPICES 777 MOLOKHIA MOULUE 200g"
    },
    {
      "Name": "EPICES 777 NIGELLE 200g"
    },
    {
      "Name": "EPICES 777 NOIX MUSCADE ENTIERE 50g"
    },
    {
      "Name": "ERZURUM 45% 800G"
    },
    {
      "Name": "El Nabil Musc Bella 5 ml"
    },
    {
      "Name": "El Nabil Musc Mayssane 5 ml"
    },
    {
      "Name": "El Nabil Musc Muscat 5 ml"
    },
    {
      "Name": "El Nabil Musc Night 5ml"
    },
    {
      "Name": "El Nabil Musc Silver 5 ml"
    },
    {
      "Name": "El Nabil Musc Sultan 5 ml"
    },
    {
      "Name": "Erzurum  Weichkäse 45%"
    },
    {
      "Name": "FENCHELKÖRNER GANZ MELIK 150GR."
    },
    {
      "Name": "FENUGREC GRAINS KN 200GR"
    },
    {
      "Name": "FEUILLE DE BRICK"
    },
    {
      "Name": "FEUILLE DE GENEVRIER 100g"
    },
    {
      "Name": "FEUILLES de JUJUBIER 777 40g"
    },
    {
      "Name": "FINI BUBBLEGUM 75GR"
    },
    {
      "Name": "FINI CINEMA MIX 75GR"
    },
    {
      "Name": "FINI JERLLY 75GR"
    },
    {
      "Name": "FINI JUNGLE 75GR"
    },
    {
      "Name": "FINI MAGIC 75GR"
    },
    {
      "Name": "FINI SUGAR PEACH 75GR"
    },
    {
      "Name": "FISCH GEWÜRZMISCHUNG MELIK 200GR"
    },
    {
      "Name": "FLAN DELICIO CHOCO 80GR"
    },
    {
      "Name": "FLAN DELISIA CHINO 5 G"
    },
    {
      "Name": "FRIK EL AMIRA ALG 400GR"
    },
    {
      "Name": "FRIK SEMOULE DE BLE TAYBA 500G"
    },
    {
      "Name": "Feigen getrocknet 1kg"
    },
    {
      "Name": "Flan Ideal Erdbeere 2,5g"
    },
    {
      "Name": "Flan Ideal Karamel 50g"
    },
    {
      "Name": "Flan Ideal Vanille 2,5 Gr."
    },
    {
      "Name": "Flan Royal 93G 4P"
    },
    {
      "Name": "GAZI ALTIN KAYMA 200GR"
    },
    {
      "Name": "GAZI JOGHURT 3,5% 500GR"
    },
    {
      "Name": "GERÖSTETER SESSAM MELIK 600GR."
    },
    {
      "Name": "GESPALTEN GRÜNE ERBSEN MELIK 1KG."
    },
    {
      "Name": "GEWURZBEREITUNG FLEISCH MELIK 200GR"
    },
    {
      "Name": "GEWÜRZNELKEN MELIK 100GR"
    },
    {
      "Name": "GINGEMBRE KN  MOULU  200GR"
    },
    {
      "Name": "GOMME ARABIQUE 100GR"
    },
    {
      "Name": "GROSSE SAUBOHNEN MELIK 750GR."
    },
    {
      "Name": "Gebet Kleidung lang"
    },
    {
      "Name": "Gerstenmehl Melik 5kg"
    },
    {
      "Name": "Ghasaa - Teller 45 cm"
    },
    {
      "Name": "Goldene Medium Rosinen 250G"
    },
    {
      "Name": "Gommage Peeling"
    },
    {
      "Name": "Granatapfel"
    },
    {
      "Name": "Gurke"
    },
    {
      "Name": "GÜLLÜ PIRINC REIS 1KG"
    },
    {
      "Name": "HANSCHEN GEWURZMISCHUNG 200GR"
    },
    {
      "Name": "HARIRA GEWÜRZMISCHUNG MELIK 200GR"
    },
    {
      "Name": "HARIRA ideal"
    },
    {
      "Name": "HARISSA   MEZIANA 200GR"
    },
    {
      "Name": "HARISSA BERBERE 200GR"
    },
    {
      "Name": "HARISSA LE PHARE DU CAP BON TUBE 70GR"
    },
    {
      "Name": "HARISSA SCHARF GLAS MELK 350GR."
    },
    {
      "Name": "HARISSA du cap Bon70GR"
    },
    {
      "Name": "HAWAI  25 CL"
    },
    {
      "Name": "HAWAI MAROC 1.3"
    },
    {
      "Name": "HUILE ELOUAZANIA MAROC 1L"
    },
    {
      "Name": "Hana Hähnchen 850g"
    },
    {
      "Name": "Hana Rind 850g"
    },
    {
      "Name": "Hasseb verzollt 200g"
    },
    {
      "Name": "Henna 100g"
    },
    {
      "Name": "Honig Zine 1 Kg Pokal"
    },
    {
      "Name": "Hähnchenwurst Robert 850g"
    },
    {
      "Name": "IDEAL CUBE HARIRA 19G"
    },
    {
      "Name": "IDEAL DOUIMA HERBE"
    },
    {
      "Name": "IDEAL Damti Bouillon SAFRAN 40g"
    },
    {
      "Name": "IDEAL Damti Boullion Knoblauch 40Gr"
    },
    {
      "Name": "IDÉAL BOUILLON POULET"
    },
    {
      "Name": "INGWER GEMAHLEN 200 G"
    },
    {
      "Name": "ISABEL THON A LA TOMATE PIQ 3X80GR"
    },
    {
      "Name": "Jamila Joghurt Pistazie 200 Gr."
    },
    {
      "Name": "Jasmin Öl 30ml"
    },
    {
      "Name": "Jaya Schwarz Orientalische Indische Hängelampe Deckenlampe"
    },
    {
      "Name": "KICHERERBSEN EXTRA MELIK 1.KG"
    },
    {
      "Name": "KNORR  BOUILLON BOEUF"
    },
    {
      "Name": "KNORR  BOUILLON MOUTON"
    },
    {
      "Name": "KNORR  BOUILLON POULET"
    },
    {
      "Name": "KONOUZ HARICOT BLANC BOCAL 540G"
    },
    {
      "Name": "KORINANDER GEMAHLEN MELIK 200GR"
    },
    {
      "Name": "KUMIN GEMAHLEN 200 G"
    },
    {
      "Name": "KUMINKÖRNER MELIK GANZ 150GR"
    },
    {
      "Name": "KURKUMA GEMAHLEN MAROC MELIK 200GR"
    },
    {
      "Name": "Keyfs Burger sesame 300g"
    },
    {
      "Name": "Khlea 1Kg"
    },
    {
      "Name": "Khlea 1Kg -Diät-"
    },
    {
      "Name": "Khlea 500g"
    },
    {
      "Name": "Kiri Sahne Käse Würfel Natur 100/120 Gr."
    },
    {
      "Name": "Kirschen"
    },
    {
      "Name": "Kiwi Grün"
    },
    {
      "Name": "Klein Marokkanische Tanjia Tangia"
    },
    {
      "Name": "Koriander"
    },
    {
      "Name": "L'ORIGAN ZAÄTAR NATUREL 777 50g"
    },
    {
      "Name": "LA VACHE QUI RIT 24PC"
    },
    {
      "Name": "LINSEN ESTON MELIK 1.KG"
    },
    {
      "Name": "LORBEER BLÄTTER MELIK 20GR"
    },
    {
      "Name": "MAGDALENAS BECKYS 12ST.360GR"
    },
    {
      "Name": "MAGDALENAS RUSTICAS 6ST."
    },
    {
      "Name": "MANDELN O.SCHALE MELIK 300GR. Abgelaufen"
    },
    {
      "Name": "MARMELADE APRIKOSE AICHA 370G"
    },
    {
      "Name": "MARMELADE FEIGE AICHA 370G"
    },
    {
      "Name": "MAWARD EAU DE ROSE 1/2L"
    },
    {
      "Name": "MEVLANA CAY 500G"
    },
    {
      "Name": "MIEL GLUCOSE  1KG"
    },
    {
      "Name": "MIEL SAMRA BOCAL 1KG"
    },
    {
      "Name": "MLOUKHEYA BOCAL  CART 350GR"
    },
    {
      "Name": "Maamoul Teashop mit Datteln gefüllt"
    },
    {
      "Name": "Mahmoud Reis Basmati  5kg"
    },
    {
      "Name": "Malve  Bakoula"
    },
    {
      "Name": "Mango Generica"
    },
    {
      "Name": "Marokkanische Keramikschale Ø 12 cm Safi"
    },
    {
      "Name": "Marokkanische Minze"
    },
    {
      "Name": "Marokkanische Tajine natur 2-3 Personen Ø 26 cm"
    },
    {
      "Name": "Marokkanische Teekanne Touareg 1,2 L"
    },
    {
      "Name": "Marokkanischer Orientalischer Teppich / Gebetsteppich"
    },
    {
      "Name": "Marokkanisches Stövchen Majmar für Tajine mittel"
    },
    {
      "Name": "Marokkanisches Stövchen Marrakesch für Tajine groß"
    },
    {
      "Name": "Marokkanisches Stövchen für Räucherwerk mini"
    },
    {
      "Name": "Maruja Chocolate 150g"
    },
    {
      "Name": "Maruja Schoko Nuss Grün 100 Gr."
    },
    {
      "Name": "Mate kharta  50g"
    },
    {
      "Name": "Mesuak"
    },
    {
      "Name": "Millfej Akrif 600g"
    },
    {
      "Name": "Minze getrocknet 50 Gr."
    },
    {
      "Name": "Mittel Orientalischer CousCous Teller Ghasa Keramik rund"
    },
    {
      "Name": "Molukhya Durra 200g"
    },
    {
      "Name": "Musk Noor"
    },
    {
      "Name": "NAMLI TORTILLA 30CM (16ER)"
    },
    {
      "Name": "NATURELLE 0,50 DPG FL ARO MIWA ink.Pfand"
    },
    {
      "Name": "NOUILLES INDOMIE CHICKEN FLAVOR 70G"
    },
    {
      "Name": "Nestle Mlichkonzentrat 397 Gr"
    },
    {
      "Name": "Nido Milchpulver 400 Gr."
    },
    {
      "Name": "OLIVEN 900GR   BARBECUE"
    },
    {
      "Name": "OLIVEN GRUN GESCHNITTEN MELIK 900GR"
    },
    {
      "Name": "OLIVEN GRÜN O.KERN MELIK 900GR"
    },
    {
      "Name": "OLIVEN SCHARF MELIK 900GR"
    },
    {
      "Name": "OLIVEN VIOLETT 900GR"
    },
    {
      "Name": "OLIVENOL OUED SOUSS MAROC 1.L"
    },
    {
      "Name": "OLIVENÖL ASSILA 1.L"
    },
    {
      "Name": "ORANGEN WASSER MAZHAR 245 ML"
    },
    {
      "Name": "OREGANO GEREBELT MELIK 50GR"
    },
    {
      "Name": "Olivenöl Afrin 2l"
    },
    {
      "Name": "Orentalisch"
    },
    {
      "Name": "Orientalische  Marrakesch"
    },
    {
      "Name": "Orientalische / Indische Laterne - Grün"
    },
    {
      "Name": "Orientalische Hängelampe  Arfoud  Multi"
    },
    {
      "Name": "Orientalische Hängelampe  Bahija  Multi"
    },
    {
      "Name": "Orientalische Hängelampe  Balouta  Multi"
    },
    {
      "Name": "Orientalische Hängelampe  Fassia  Milchglas"
    },
    {
      "Name": "Orientalische Hängelampe  Kenitra  Orange-Weiß Klein"
    },
    {
      "Name": "Orientalische Hängelampe  Koutoubia  Weiß"
    },
    {
      "Name": "Orientalische Hängelampe  Rabat  Multi"
    },
    {
      "Name": "Orientalische Indische Hängelampe Deckenlampe Jaya Gold"
    },
    {
      "Name": "Orientalische Indische Messing Stehlampe Mala Silber"
    },
    {
      "Name": "Orientalische Indische Wandlampe Priya Silber"
    },
    {
      "Name": "Orientalische Laterne  Palais Royal  Multi"
    },
    {
      "Name": "Orientalischer Teekannenhalter (2er-Set)"
    },
    {
      "Name": "Orientalisches Raumspray / Deo / Duft Al- Nassr  Bukhour Al Madina"
    },
    {
      "Name": "Orientalisches Raumspray / Deo / Duft Al- Nassr  Royal Musk"
    },
    {
      "Name": "Orientalisches Räuchergefäß -Räucherwerk"
    },
    {
      "Name": "Orientalisches Räucherwerk - Bakhour"
    },
    {
      "Name": "Orientalisches Räucherwerk - Bakhour Al Khanger"
    },
    {
      "Name": "Oud Kanger"
    },
    {
      "Name": "PAIN DE SUCRE 2KG (KALEB)"
    },
    {
      "Name": "PAPRIKA SCHARF 200G"
    },
    {
      "Name": "PAPRIKA SUSS GEMAHLEN MELIK 200GR"
    },
    {
      "Name": "PASABAHCE - PLAT SUR PIED AVEC CLOCHE 95200"
    },
    {
      "Name": "PFLAUMEN D´AGEN CAL.44/55 800G"
    },
    {
      "Name": "PLATEAU /3 SILVER ( 110XLM/G x 8 )"
    },
    {
      "Name": "PLATEAU DG10178D"
    },
    {
      "Name": "POMS MAROC 1.3L"
    },
    {
      "Name": "POM´S  25 CL"
    },
    {
      "Name": "POPKORN MELIK 1KG"
    },
    {
      "Name": "POËLE A PAELA RL-MP40M - 40CM"
    },
    {
      "Name": "Peelinghandschuhe"
    },
    {
      "Name": "Petersiele glatt"
    },
    {
      "Name": "Pflaumen grün/can erik korb"
    },
    {
      "Name": "Pipa Sonnenblumenkerne 300 Gr."
    },
    {
      "Name": "Polei Minz 100g"
    },
    {
      "Name": "Puck Streichkäse 240g"
    },
    {
      "Name": "RAIBI JAMILA GRENADINE 170GR"
    },
    {
      "Name": "RAS EL HANNOUT JAUNE KN 200G"
    },
    {
      "Name": "RAS EL HANNOUT ROUGE KN  200GR"
    },
    {
      "Name": "RASELHANNOUT GEWÜRZ MELIK GELB 200G"
    },
    {
      "Name": "RASELHANNOUT GEWÜRZ MELIK ROT 200G."
    },
    {
      "Name": "RAVIOLI BOEUF ZAKIA 800GR"
    },
    {
      "Name": "ROSEN WASSER 245 ML"
    },
    {
      "Name": "ROTE LINSEN MELIK 1KG"
    },
    {
      "Name": "Reis Mahmoud Basmati 900g"
    },
    {
      "Name": "Rinderwurst Al Raii 800g"
    },
    {
      "Name": "Rizinus Öl 30ml"
    },
    {
      "Name": "Rosen Öl 30ml karnak"
    },
    {
      "Name": "Räuchergefäss Cristal"
    },
    {
      "Name": "Räuchergefäss Fanuss"
    },
    {
      "Name": "Räuchergefäss Groß"
    },
    {
      "Name": "Räuchergefäss Helal"
    },
    {
      "Name": "Räuchergefäss Nakhla"
    },
    {
      "Name": "SAFRANFÄDEN DOSE 0,25GR"
    },
    {
      "Name": "SALADE MECHOUIA DCE CART 350GR"
    },
    {
      "Name": "SALADE MECHOUIA PIQT CART 200GR"
    },
    {
      "Name": "SALONIKI Sonnenblumenkerne 150g"
    },
    {
      "Name": "SAOUDIA MIEL DE LAVANDE 250g"
    },
    {
      "Name": "SARDINE TAGINE    125GR VIN"
    },
    {
      "Name": "SAVONS 125g HAREEMI OUD"
    },
    {
      "Name": "SAVONS 125g ORIENTAL OUD"
    },
    {
      "Name": "SAVONS 125g SULTANI OUD"
    },
    {
      "Name": "SCHWARZER PFEFFER GEMAHLEN 200G"
    },
    {
      "Name": "SEMOUEL 1 KG ANGELO FINE"
    },
    {
      "Name": "SEMOUEL ANGELO MEDIUM 1 KG"
    },
    {
      "Name": "SEMOULE  MAYMOUNA FIN 5KG"
    },
    {
      "Name": "SEMOULE ANGELO GROSSE 1.KG"
    },
    {
      "Name": "SEMOULE MAYMOUNA FIN 1KG"
    },
    {
      "Name": "SEMOULE MAYMOUNA MOY 5KG"
    },
    {
      "Name": "SERVICE APÉRITIF DK60004D"
    },
    {
      "Name": "SLADER MECHOUIA MILD 370GR"
    },
    {
      "Name": "SMEN Gewürzbutter Ideal"
    },
    {
      "Name": "SOSE ALGERIAN MELIK 500ML"
    },
    {
      "Name": "SOSE ANDALOUSE MELIK 500ML"
    },
    {
      "Name": "SOSE LOEMPIA MELIK 500ML."
    },
    {
      "Name": "SOSE SAMORAI MELIK 500ML"
    },
    {
      "Name": "SOSE TACOS MELIK 500ML."
    },
    {
      "Name": "SUNTAT Gefüllte Weinblätter 425g"
    },
    {
      "Name": "SUNTAT Hühnerwürstchen 400G"
    },
    {
      "Name": "SUNTAT MAISGRIEß 1kg"
    },
    {
      "Name": "SUNTAT Maismehl 1kg"
    },
    {
      "Name": "SUNTAT SALAMURA ERBAA YAPRAK 400g"
    },
    {
      "Name": "SUNTAT ZUCKER 1KG"
    },
    {
      "Name": "Sages Datteln standart Tek Dalli"
    },
    {
      "Name": "Savon Beldi 250g"
    },
    {
      "Name": "Savon El Kef 200 Gr"
    },
    {
      "Name": "Savon Taous 125g"
    },
    {
      "Name": "Schwarze Oliven"
    },
    {
      "Name": "Schwarzkümmel Nigel 100 Gr."
    },
    {
      "Name": "Schwarzkümmelöl 120 ml"
    },
    {
      "Name": "Schwazkümmel Öl 125ml karnak"
    },
    {
      "Name": "Seife 200g"
    },
    {
      "Name": "Seife Dead Sea"
    },
    {
      "Name": "Seife ghar"
    },
    {
      "Name": "Sesam Öl 30ml"
    },
    {
      "Name": "Sewak Al-Muslim Miswak (Zahnpflege-Zweig)"
    },
    {
      "Name": "Shahd Baladi Käse 900 g"
    },
    {
      "Name": "Shahd Labneh Käse 900 g"
    },
    {
      "Name": "Shiba maroc Frisch"
    },
    {
      "Name": "Sultan alhiba 500g"
    },
    {
      "Name": "Suntat Altin reis goldgelb 5kg"
    },
    {
      "Name": "Suntat Izgara sosis 400g"
    },
    {
      "Name": "Suntat sesampasre 330 ml"
    },
    {
      "Name": "Süssmandel Öl 30ml"
    },
    {
      "Name": "TAHINA ¨CHTAURA¨ 400GR"
    },
    {
      "Name": "TAJINE 019-020-021"
    },
    {
      "Name": "TAJINE GEWÜRZBEREITUNG MELIK 200G"
    },
    {
      "Name": "TAYBA HAMSSA DICK NR.20 1KG"
    },
    {
      "Name": "TAYBA SANTIL DICK NR.17 1KG"
    },
    {
      "Name": "TCHICHA FINE 1KG"
    },
    {
      "Name": "TCHICHA MOYENNE 1KG"
    },
    {
      "Name": "TEE EL TAJ 9371 602 250GR"
    },
    {
      "Name": "TEE EL-TAJ 9371 603 500GR"
    },
    {
      "Name": "THE KONOUZ 4011 400GR"
    },
    {
      "Name": "THON PESCA HUILE 120 GR"
    },
    {
      "Name": "THON PESCA HUILE 3X80GR"
    },
    {
      "Name": "THON PESCA TOMATE 80GR"
    },
    {
      "Name": "THUNFISCH ISABEL IN ÖL 3X80G"
    },
    {
      "Name": "THUNFISCH ISABEL TOMATE SAUCE 80 G"
    },
    {
      "Name": "THYM MAROC KN 50G"
    },
    {
      "Name": "Tajine 4er Set +Stand"
    },
    {
      "Name": "Tee Sultan Al Anbar 200g"
    },
    {
      "Name": "Tee Sultan Al Anbar 500g"
    },
    {
      "Name": "Tee Sultan Al Bahia 9371 500g"
    },
    {
      "Name": "Tee Sultan Al Jawhar Grün 500g"
    },
    {
      "Name": "Thunfisch joly Tomat scharf 3×80 gr"
    },
    {
      "Name": "Thymian 50 Gr."
    },
    {
      "Name": "Tomatenmark Aicha 370 Gr."
    },
    {
      "Name": "ULUDAG GAZOZ 0,33L inkl Pfand"
    },
    {
      "Name": "VERMICELLE CHIN 200GR"
    },
    {
      "Name": "VERMICELLE CHIN 400GR"
    },
    {
      "Name": "VERMICELLE DARI CHEVEUX ANGE 500G"
    },
    {
      "Name": "VERVEINE 20 g"
    },
    {
      "Name": "VERVEINE SULTAN MARRAKESH 20GR"
    },
    {
      "Name": "Vermicelle Tosca 1.KG"
    },
    {
      "Name": "Vollkornmehl Melik 5.KG"
    },
    {
      "Name": "WEISSE BOHNEN 1KG"
    },
    {
      "Name": "WURST CHATAR M.OLIVEN 280GR."
    },
    {
      "Name": "WURST CHATAR MATRAC RIND 450GR"
    },
    {
      "Name": "WURST CHATAR NATURELL 280GR."
    },
    {
      "Name": "WURST CHATAR PIKANT 280GR"
    },
    {
      "Name": "WURST HANSCHEN CHATAR 250G."
    },
    {
      "Name": "WURST HÄNSCHEN MATRAC CHATAR 450GR"
    },
    {
      "Name": "Wassermelone mit kern"
    },
    {
      "Name": "Weihrauch 215 Gr."
    },
    {
      "Name": "Weizen Öl 30ml"
    },
    {
      "Name": "Weiß Bohnen  Miau 1kg"
    },
    {
      "Name": "ZEYNEP ANA HELVA MIT PISTAZIEN 350GR"
    },
    {
      "Name": "ZIMT 200G"
    },
    {
      "Name": "ZIMT STANGEN MELIK 100GR."
    },
    {
      "Name": "ZITRONEN EINGELEGT IN GLAS 370ml"
    },
    {
      "Name": "Zitrone in salzwasser 550 g"
    },
    {
      "Name": "Zorro Sonnenblumenkerne 200g"
    },
    {
      "Name": "marokkanische Räusherschale amir Gold"
    },
    {
      "Name": "ÖNCÜ TOMATENMARK 720G"
    },
    {
      "Name": "Öl Parfüm Creme 50ml"
    },
    {
      "Name": "Ø 21cm Orientalischer Keramik-Teller rund"
    },
    {
      "Name": "Ø 22 cm Marokkanische Tajine Tanger glasiert 1-2 Personen"
    },
    {
      "Name": "Ø 22 cm Marokkanische Tajine natur 1-2 Personen"
    },
    {
      "Name": "Ø 25cm Orientalischer Keramik-Teller rund"
    },
    {
      "Name": "Ø 26 cm Marokkanische Tajine Rostos Rot Keramik Induktion"
    },
    {
      "Name": "Ø 26 cm Marokkanische Tajine Tanger glasiert 2-3 Personen"
    },
    {
      "Name": "Ø 27 cm Marokkanisches Teetablett  Fes   Silber"
    },
    {
      "Name": "Ø 30cm Orientalischer Keramik-Teller rund"
    },
    {
      "Name": "Ø 32 cm Marokkanisches Teetablett  Fes   Silber"
    },
    {
      "Name": "Ø 34 cm Marokkanische Tajine"
    },
    {
      "Name": "Ø 34 cm Marokkanische Tajine Rostos Rot Keramik Induktion"
    },
    {
      "Name": "Ø 34 cm Marokkanische Tajine Tanger glasiert 4-5 Personen"
    },
    {
      "Name": "Ø 34 cm Marokkanische Tajine glasiert 4-5 Personen"
    },
    {
      "Name": "Ø 37 cm Marokkanisches Teetablett  Fes   Silber"
    },
    {
      "Name": "Ø 38 cm Marokkanische Tajine Weiß"
    },
    {
      "Name": "Ø 40 cm Orientalischer Keramik-Teller rund"
    },
    {
      "Name": "Ø 40 cm Orientalischer Servierteller  Weiß"
    },
    {
      "Name": "Ø 42 cm Marokkanisches Teetablett  Fes   Silber"
    },
    {
      "Name": "Ø 45 cm Orientalischer Servierteller  Mosaik"
    },
    {
      "Name": "Ø32 cm Marokkanische Tajine"
    }
  ]

}
