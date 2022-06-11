import { html, render, require } from "/framework";
(async () => {
  const { useDocTitle, useToggle } = await require("ffhooks/hooks/index.js");

  render(() => {
    const [theme, toggleTheme] = useToggle("dark", ["dark", "light"]);
    document.body.style.backgroundColor = theme == "dark" ? "#373843" : "#ddd";
    useDocTitle("Home");
    return html`
      <button onclick=${toggleTheme}>
        Set to ${theme == "dark" ? "Light" : "Dark"} Mode
      </button>
      <br />
      <h1
        class="${theme == "dark"
          ? "text-white"
          : ""} montserrat text-3xl font-bold uppercase lg:text-3xl text-center pt-20 xl:text-3xl"
      >
        My awesome Lightframe Website
      </h1>
    `;
  });
})();
