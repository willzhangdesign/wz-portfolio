import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function AnimatedLink({ href, children, className = '', external = false }: AnimatedLinkProps) {
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <a
      href={href}
      className={`relative inline-block group ${className}`}
      {...externalProps}
    >
      {/* Black surface that scales upward on hover/focus — no overflow:hidden so baseline stays correct */}
      <span className="absolute bg-black inset-0 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 origin-bottom transition-transform duration-200 ease-in-out" />

      {/* Link text - inverts to white on hover/focus */}
      <span className="relative group-hover:text-white group-focus:text-white transition-colors duration-200 ease-in-out">
        {children}
      </span>
    </a>
  );
}