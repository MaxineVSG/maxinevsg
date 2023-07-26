import Image from 'next/image';

const Logo = ({height, width}) => {
  return <Image
    src="/images/logo.svg"
    height={height}
    width={width}
    alt="MVSG"
  />
};

export default Logo;
