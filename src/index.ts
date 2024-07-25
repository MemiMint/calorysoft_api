import { CalorysoftApplication } from "./application";

const app = new CalorysoftApplication();

(async () => {
    await app.Listen();
})();