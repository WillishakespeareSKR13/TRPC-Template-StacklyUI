const BackgroundFlash = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  const root = document.documentElement;
  root.style.setProperty('background-color', '#000000');
})();
`,
      }}
    />
  );
};

export default BackgroundFlash;
