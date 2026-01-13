import { TreeNode } from "@/types/decisionTree";
import styles from "./DecisionTree.module.css";

interface QuestionNodeProps {
  node: TreeNode;
  onSelect: (nextNodeId: string) => void;
}

export function QuestionNode({ node, onSelect }: QuestionNodeProps) {
  return (
    <div className={styles.questionNode}>
      <div className={styles.question}>
        {node.question.map((line, index) => (
          <p key={index} className={styles.quoteLine}>{line}</p>
        ))}
      </div>
      <div className={styles.options}>
        {node.options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => option.nextNodeId && onSelect(option.nextNodeId)}
            disabled={!option.nextNodeId}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
