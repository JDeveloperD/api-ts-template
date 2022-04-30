import { FC, LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean,
  text: string
}

const Label: FC<LabelProps> = ({ text, required, ...props }) => {
  return (
    <label {...props} className="form-label">
      {text}
      {required && (
        <abbr title="">*</abbr>
      )}
    </label>
  );
};

export default Label;
