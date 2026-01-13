export interface TreeOption {
  label: string;
  nextNodeId: string | null;
}

export interface TreeNode {
  id: string;
  question: string;
  options: TreeOption[];
  isResult?: boolean;
  resultContent?: string;
}

export type DecisionTreeData = Record<string, TreeNode>;
