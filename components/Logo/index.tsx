import Image, { ImageProps } from "next/image";
import { StyledLogo } from "styles/styleds";

interface LogoProps extends ImageProps {
  size?: string;
}

export const Logo = (props: LogoProps) => {
  const { size = "1.5rem", alt, ...rest } = props;

  return (
    <StyledLogo size={size}>
      <Image alt={alt} layout="fill" {...rest} />
    </StyledLogo>
  );
};
