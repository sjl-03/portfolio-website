import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-scroll';
import { Link } from 'react-scroll';

type ScrollLinkRenderProps = {
  href: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const ScrollTypographyLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return (
    <Link {...props}>
      {((linkProps: ScrollLinkRenderProps): ReactNode => (
        <a ref={ref} {...linkProps}>
          {props.children}
        </a>
      )) as any}
    </Link>
  );
});

export default ScrollTypographyLink;