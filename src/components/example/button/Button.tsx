import * as s from './button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  isFullWidth?: boolean;
  handleClick?: () => void;
};

const Button = ({
  children = 'button label example',
  type = 'button',
  handleClick
}: ButtonProps) => {
  return (
    <s.Button type={type} onClick={handleClick}>
      {children}
    </s.Button>
  );
};

export default Button;
