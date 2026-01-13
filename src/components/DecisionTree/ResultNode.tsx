import { TreeNode } from "@/types/decisionTree";
import styles from "./DecisionTree.module.css";

interface ResultNodeProps {
  node: TreeNode;
  onRestart: () => void;
}

export function ResultNode({ node, onRestart }: ResultNodeProps) {
  return (
    <div className={styles.resultNode}>
      <span className={styles.resultIcon}>🚑</span>
      <div className={styles.question}>
        {node.resultContent?.map((line, index) => (
          <p key={index} className={styles.quoteLine}>{line}</p>
        ))}
      </div>
      <button className={styles.restartButton} onClick={onRestart}>
        Aloita alusta
      </button>
    </div>
  );
}
