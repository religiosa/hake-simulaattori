import { TreeNode } from "@/types/decisionTree";
import styles from "./DecisionTree.module.css";

interface QuestionNodeProps {
  node: TreeNode;
  onSelect: (nextNodeId: string) => void;
}

export function QuestionNode({ node, onSelect }: QuestionNodeProps) {
  return (
    <div className={styles.questionNode}>
      <h2 className={styles.question}>{node.question}</h2>
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
