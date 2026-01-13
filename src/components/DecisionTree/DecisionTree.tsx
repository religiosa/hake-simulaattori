"use client";

import { useState } from "react";
import { DecisionTreeData } from "@/types/decisionTree";
import { QuestionNode } from "./QuestionNode";
import { ResultNode } from "./ResultNode";
import styles from "./DecisionTree.module.css";

interface DecisionTreeProps {
  data: DecisionTreeData;
  startNodeId: string;
}

export function DecisionTree({ data, startNodeId }: DecisionTreeProps) {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = data[currentNodeId];

  const handleSelect = (nextNodeId: string) => {
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousNodeId = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentNodeId(previousNodeId);
    }
  };

  const handleRestart = () => {
    setHistory([]);
    setCurrentNodeId(startNodeId);
  };

  if (!currentNode) {
    return <div className={styles.error}>Virhe: Solmua ei löydy</div>;
  }

  return (
    <div className={styles.container}>
      {history.length > 0 && (
        <button className={styles.backButton} onClick={handleBack}>
          ← Takaisin
        </button>
      )}

      {currentNode.isResult ? (
        <ResultNode node={currentNode} onRestart={handleRestart} />
      ) : (
        <QuestionNode node={currentNode} onSelect={handleSelect} />
      )}

      <div className={styles.progress}>
        Vaihe {history.length + 1}
      </div>
    </div>
  );
}
