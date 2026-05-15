import { Link } from 'react-router-dom';
const variantClasses = {
 primary: 'border-[#162127] bg-[#162127] text-[#CF9D7B] hover:bg-[#724B39] hover:text-white',
 secondary: 'border-[#724B39] bg-[#CF9D7B] text-[#162127] hover:bg-[#724B39] hover:text-white',
};
const Button = ({
 children,
 to,
 type = 'button',
 variant = 'secondary',
 className = '',
}) => {
 const classes = [
   'inline-flex items-center justify-center rounded-xl border-2 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
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
