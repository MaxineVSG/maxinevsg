import Image from 'next/image';

const IllustratedMe = ({view, height, width, classes}) => {
  var display = view === 'desktop' ? 'xs--hidden md--visible-block' : 'md--hidden'
  return <Image
    className={`me bounce ${display} ${classes}`}
    priority
    src="images/me-illus-laptop.svg"
    height={height}
    width={width}
  />
};

export default IllustratedMe;
