import { DecisionTree } from "@/components/DecisionTree";
import { decisionTreeData, START_NODE_ID } from "@/data/decisionTree";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Häke-simulaattori</h1>
        <p className={styles.subtitle}>
          Vastaa kysymyksiin löytääksesi sinulle sopivat palvelut
        </p>
        <DecisionTree data={decisionTreeData} startNodeId={START_NODE_ID} />
      </main>
    </div>
  );
}
