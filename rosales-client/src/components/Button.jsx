import { Link } from 'react-router-dom';
const variantClasses = {
 primary: 'bg-[#724B39] text-white hover:bg-[#3A3534]',
 secondary: 'bg-[#CF9D7B] text-[#162127] hover:bg-[#724B39] hover:text-white',
};
const Button = ({
 children,
 to,
 type = 'button',
 variant = 'secondary',
 className = '',
}) => {
 const classes = [
   'inline-flex items-center justify-center rounded-full border-2 border-[#724B39] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
   variantClasses[variant] ?? variantClasses.secondary,
   className,
 ]
   .join(' ')
   .trim();
 if (to) {
   return (
<Link to={to} className={classes}>
       {children}
</Link>
   );
 }
 return (
<button type={type} className={classes}>
     {children}
</button>
 );
};
export default Button;