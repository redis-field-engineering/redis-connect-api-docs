window.onload = function () {
const ui = SwaggerUIBundle({
  urls: [
    {
      name: "job_manager",
      url: "swagger.yaml",
    }
  ],
  dom_id: "#swagger-ui",
  deepLinking: true,
  presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
  plugins: [SwaggerUIBundle.plugins.DownloadUrl],
  layout: "StandaloneLayout",
});
window.ui = ui;
};