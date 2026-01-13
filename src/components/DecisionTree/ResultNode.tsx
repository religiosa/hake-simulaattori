import { TreeNode } from "@/types/decisionTree";
import styles from "./DecisionTree.module.css";

interface ResultNodeProps {
  node: TreeNode;
  onRestart: () => void;
}

export function ResultNode({ node, onRestart }: ResultNodeProps) {
  return (
    <div className={styles.resultNode}>
      <p className={styles.resultContent}>{node.resultContent}</p>
      <button className={styles.restartButton} onClick={onRestart}>
        Aloita alusta
      </button>
    </div>
  );
}
