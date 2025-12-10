import clsx from 'clsx';
import styles from './Typography.module.css';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'p' | 'div';
type TypographyVariant = 'title' | 'subtitle' | 'caption';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};

export const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
