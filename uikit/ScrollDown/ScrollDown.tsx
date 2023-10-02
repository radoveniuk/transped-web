export default function ScrollDown () {
  const clickHandler = () => {
    const width = window.innerWidth;
    let top = window.innerHeight - 100;
    if (width < 1000) {
      top = window.innerHeight - 79;
    }
    window.scrollTo({ top, behavior: 'smooth' });
  };
  return <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon="" onClick={clickHandler} />;
};