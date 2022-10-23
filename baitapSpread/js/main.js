const addJumpText = () => {
  const headingText = document.querySelector('.heading').innerHTML;
  const newHeadingText = [...headingText].reduce((html, letter) => {
    return (
      html +
      `
        <span>${letter}</span>
      `
    );
  }, '');

  document.querySelector('.heading').innerHTML = newHeadingText;
};

addJumpText();
