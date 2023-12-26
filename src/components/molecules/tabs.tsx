import React from 'react';

interface TabProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export function Tab({ href, isActive, children }: TabProps) {
  return (
    <li
      role="presentation"
      className={`flex-1 ${isActive ? 'border-primary text-primary' : 'text-neutral-500'}`}
    >
      <a
        href={href}
        className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-center text-xs font-medium leading-tight hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent ${
          isActive ? 'data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary' : ''
        }`}
        data-te-toggle="pill"
        data-te-target={href}
        role="tab"
        aria-controls={href}
        aria-selected={isActive}
      >
        {children}
      </a>
    </li>
  );
}

interface TabsProps {
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  return (
    <ul
      className="mb-5 flex w-full list-none flex-row flex-wrap border-b-0 pl-0"
      role="tablist"
      data-te-nav-ref
    >
      {children}
    </ul>
  );
}
