import "./styles/main.css";
import { appConfig } from "./data/appData";

/*
 * Logan-Beldex application entry point.
 *
 * The uploaded artifact was a single production HTML file containing a bundled
 * React application. This project separates configuration/styles and preserves
 * the original bundle under src/original-bundle.js so the migration does not
 * silently rewrite generated React runtime code.
 *
 * Next refactor step: move the actual screens/components from the preserved
 * bundle into src/pages and src/components, then replace this compatibility
 * shell with normal React imports/routes.
 */
export default function App() {
  return (
    <main className="project-migration-shell">
      <h1>{appConfig.brand}</h1>
      <p>{appConfig.description}</p>
      <p>
        This is the organized source structure. The original production React
        bundle is preserved in <code>src/original-bundle.js</code>.
      </p>
    </main>
  );
}
