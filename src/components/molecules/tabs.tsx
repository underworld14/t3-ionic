import { twMerge } from 'tailwind-merge';
import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  activeTab?: number;
  onChange?: (index: number) => void;
}

export function Tabs({ children, className, activeTab, onChange }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(activeTab || 0);

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <ul
      className={twMerge('flex list-none flex-row flex-wrap border-b-0 pl-0 shadow-md', className)}
      role="tablist"
      data-te-nav-ref
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isActive: index === currentTab,
            onClick: () => handleTabChange(index),
          } as any);
        }
        return child;
      })}
    </ul>
  );
}

export function TabItem({
  children,
  className,
  isActive,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement> & {
  isActive?: boolean;
}) {
  return (
    <li role="presentation" className="flex-1 text-center hover:cursor-pointer">
      <a
        className={twMerge(className,
          'block border-x-0 border-b-2 border-t-0 border-transparent px-7 py-4 text-xs font-medium uppercase leading-tight text-neutral-500 transition-all duration-100 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent',
          isActive
            ? 'data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary'
            : 'bg-transparent text-neutral-400',
        )}
        data-te-toggle="pill"
        data-te-nav-active={isActive}
        role="tab"
        {...props}
      >
        {children}
      </a>
    </li>
  );
}

export function TabPanel({
  index,
  activeTab,
  children,
}: {
  index: number;
  activeTab: number;
  children: React.ReactNode;
}) {
  if (index !== activeTab) {
    return null;
  }

  return (
    <div className={twMerge('flex flex-1 flex-col transition-all duration-300')}>{children}</div>
  );
}
