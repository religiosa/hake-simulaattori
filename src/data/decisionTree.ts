import { DecisionTreeData } from "@/types/decisionTree";

const instruct_cpr_text = [
  ">> Paina rintakehää kovaa ja nopeasti, noin 5-6 cm syvyyteen ja taajuudella 100-120 painallusta minuutissa.",
  ">> Salli rintakehän palautua täysin jokaisen painalluksen jälkeen.",
  ">> Jos osaat, voit myös antaa 2 puhallusta aina 30 painalluksen jälkeen. Sulje potilaan nenä, tee tiivis suuhengitys ja anna puhallus, varmistaen että rintakehä nousee.",
  ">> Jatka pelkkää paineluelvytystä tai paineluelvytystä ja puhalluksia rytmillä 30 painallusta, 2 puhallusta, kunnes apu saapuu tai potilas herää.",
];

export const decisionTreeData: DecisionTreeData = {
  instructions: {
    id: "instructions",
    question: [
      "Tervetuloa Häke-simulaattoriin!",
      "Simulaattorin avulla voit toimia hätäkeskuspäivystäjänä, kun harjoitellaan hätäkeskukseen soittamista.",
      "Simulaattori antaa hätäkeskuksen vuorosanat ja ohjaa sinut läpi puhelun soittajan vastausten mukaan.",
    ],
    options: [
      { label: "Aloita", nextNodeId: "start" },
    ],
  },
  start: {
    id: "start",
    question: [">> Hätäkeskus, nödcentralen"],
    options: [
      { label: "(Soittaja esittäytyy lyhyesti nimellään)", nextNodeId: "where" },
    ],
  },
  where: {
    id: "where",
    question: [">> Mistä soitatte?"],
    options: [
      { label: "(Soittaja kertoo osoitteen)", nextNodeId: "what_happened" },
    ],
  },
  what_happened: {
    id: "what_happened",
    question: [">> Mitä on tapahtunut?"],
    options: [
      { label: "(Soittaja kertoo tapahtuneen)", nextNodeId: "is_awake" },
    ],
  },
  is_awake: {
    id: "is_awake",
    question: [">> Onko avun tarpeessa oleva henkilö hereillä?"],
    options: [
      { label: "Kyllä", nextNodeId: "yes_awake" },
      { label: "Ei", nextNodeId: "not_awake" },
    ],
  },
  yes_awake: {
    id: "yes_awake",
    question: [">> Voiko hän itse puhua päivystäjän kanssa?"],
    options: [
        { label: "Kyllä", nextNodeId: "ask_addt_from_victim" },
        { label: "Ei", nextNodeId: "ask_addt_from_caller" },
    ],
  },
  not_awake: {
    id: "not_awake",
    question: [">> Onko hän heräteltävissä?"],
    options: [
        { label: "Kyllä", nextNodeId: "yes_can_wake" },
        { label: "Ei", nextNodeId: "no_cannot_wake" },
    ],
  },
  ask_addt_from_victim: {
    id: "ask_addt_from_victim",
    question: ["(Päivystäjä kysyy lisätietoja uhrilta)"],
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  ask_addt_from_caller: {
    id: "ask_addt_from_caller",
    question: ["(Päivystäjä kysyy lisätietoja soittajalta)"],
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  yes_can_wake: {
    id: "yes_can_wake",
    question: [">> Koittakaa pitää hereillä, apu on matkalla."],
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  no_cannot_wake: {
    id: "no_cannot_wake",
    question: [">> Hengittääkö hän?"],
    options: [
        { label: "Kyllä", nextNodeId: "turn_to_side" },
        { label: "Ei", nextNodeId: "can_perform_cpr" },
    ],
  },
  turn_to_side: {
    id: "turn_to_side",
    question: [">> Kääntäkää henkilö kylkiasentoon hengitysteiden auki pitämiseksi, apu on pian perillä."],
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  can_perform_cpr: {
    id: "can_perform_cpr",
    question: [">> Lähetetään kiireellisesti apua paikalle. Onko paikalla elvytystaitoisia henkilöitä, jotka voivat aloittaa elvytyksen?"],
    options: [
        { label: "Kyllä", nextNodeId: "perform_cpr" },
        { label: "Ei (opasta elvytys)", nextNodeId: "instruct_cpr" },
        { label: "Ei (älä opasta elvytystä)", nextNodeId: "turn_to_side" },
    ],
  },
  perform_cpr: {
    id: "perform_cpr",
    question: [">> Aloittakaa paineluelvytys ja jatkakaa, kunnes saatte lisäohjeita tai apu saapuu paikalle."],
    options: [
        { label: "Jatka", nextNodeId: "continue_cpr" },
    ],
  },
  instruct_cpr: {
    id: "instruct_cpr",
    question: instruct_cpr_text,
    options: [
        { label: "Jatka", nextNodeId: "continue_cpr" },
    ],
  },
  continue_cpr: {
    id: "continue_cpr",
    question: [">> Jatkakaa paineluelvytystä, kunnes apu saapuu paikalle."],
    options: [
        { label: "Jatka", nextNodeId: "end_call" },
    ],
  },
  wait_for_help: {
    id: "wait_for_help",
    question: [">> Voitteko odottaa avun saapumista?"],
    options: [
        { label: "(Soittaja vastaa)", nextNodeId: "end_call" },
    ],
  },
  end_call: {
    id: "end_call",
    question: [],
    options: [],
    isResult: true,
    resultContent: [">> Mikäli tilanne muuttuu, soittakaa uudestaan hätänumeroon.", ">> Voitte nyt lopettaa puhelun."],
  },
};

export const START_NODE_ID = "instructions";
