import clsx from 'clsx';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  const classes = clsx(
    'px-4 lg:px-0 w-full max-w-full lg:w-[1160px] lg:max-w-[1160px] lg:mx-auto',
    className
  );

  return <div className={classes}>{children}</div>;
}
