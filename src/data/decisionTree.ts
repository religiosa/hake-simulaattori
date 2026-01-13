import { DecisionTreeData } from "@/types/decisionTree";

export const decisionTreeData: DecisionTreeData = {
  start: {
    id: "start",
    question: "Hätäkeskus, nödcentralen",
    options: [
      { label: "# Soittaja esittäytyy lyhyesti nimellään", nextNodeId: "where_you_call_from" },
    ],
  },
  where_you_call_from: {
    id: "where_you_call_from",
    question: "Mistä soitat?",
    options: [
      { label: "# Soittaja kertoo osoitteen", nextNodeId: "what_happened" },
    ],
  },
  what_happened: {
    id: "what_happened",
    question: "Mitä on tapahtunut?",
    options: [
      { label: "# Soittaja kertoo tapahtuneen", nextNodeId: "is_awake" },
    ],
  },
  is_awake: {
    id: "is_awake",
    question: "Onko henkilö hereillä?",
    options: [
      { label: "Kyllä", nextNodeId: "yes_awake" },
      { label: "Ei", nextNodeId: "no_awake" },
    ],
  },
  yes_awake: {
    id: "yes_awake",
    question: "Voiko hän itse puhua päivystäjän kanssa?",
    options: [
        { label: "Kyllä", nextNodeId: "ask_addt_from_victim" },
        { label: "Ei", nextNodeId: "ask_addt_from_caller" },
    ],
  },
  no_awake: {
    id: "no_awake",
    question: "Onko heräteltävissä?",
    options: [
        { label: "Kyllä", nextNodeId: "yes_can_wake" },
        { label: "Ei", nextNodeId: "no_can_wake" },
    ],
  },
  ask_addt_from_victim: {
    id: "ask_addt_from_victim",
    question: "# Päivystäjä kysyy lisätietoja uhrilta",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  ask_addt_from_caller: {
    id: "ask_addt_from_caller",
    question: "# Päivystäjä kysyy lisätietoja soittajalta",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  yes_can_wake: {
    id: "yes_can_wake",
    question: "Koittakaa pitää hereillä, apu on matkalla.",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  no_can_wake: {
    id: "no_can_wake",
    question: "Hengittääkö hän?",
    options: [
        { label: "Kyllä", nextNodeId: "turn_to_side" },
        { label: "Ei", nextNodeId: "can_perform_cpr" },
    ],
  },
  turn_to_side: {
    id: "turn_to_side",
    question: "Kääntäkää henkilö kylkiasentoon hengitysteiden auki pitämiseksi, apu on pian perillä.",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  can_perform_cpr: {
    id: "can_perform_cpr",
    question: "Lähetetään kiireellisesti apua paikalle. Onko paikalla elvytystaitoisia henkilöitä, jotka voivat aloittaa elvytyksen?",
    options: [
        { label: "Kyllä", nextNodeId: "perform_cpr" },
        { label: "Ei", nextNodeId: "instruct_cpr" },
    ],
  },
  perform_cpr: {
    id: "perform_cpr",
    question: "Aloittakaa paineluelvytys ja jatkakaa, kunnes saatte lisäohjeita tai apu saapuu paikalle.",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  instruct_cpr: {
    id: "instruct_cpr",
    question: "# Päivystäjä antaa elvytysohjeet soittajalle",
    options: [
        { label: "Jatka", nextNodeId: "wait_for_help" },
    ],
  },
  wait_for_help: {
    id: "wait_for_help",
    question: "Voitteko odottaa avun saapumista?.",
    options: [
        { label: "# Soittaja vastaa", nextNodeId: "end_call" },
    ],
  },
  end_call: {
    id: "end_call",
    question: "",
    options: [],
    isResult: true,
    resultContent: "Mikäli tilanne muuttuu, soittakaa uudestaan hätänumeroon.\nVoitte nyt lopettaa puhelun.",
  },
};

export const START_NODE_ID = "start";
