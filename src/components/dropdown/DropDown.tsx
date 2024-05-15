'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { GoChevronDown } from 'react-icons/go';
import useOutsideClick from './useOutSideClick';
import Image from 'next/image';
import { DropdownItem, DropdownProps } from './dropdown-model';


const Dropdown = ({
  id,
  title = 'Select',
  data,
  position = 'bottom-left',
  hasImage,
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const dropdownClass = classNames(
    'absolute bg-[#1B1D1F] w-full max-h-52 overflow-y-auto py-3 rounded shadow-md z-10',
    {
      'top-full right-0 mt-2': position === 'bottom-right',
      'top-full left-0 mt-2': position === 'bottom-left',
      'bottom-full right-0 mb-2': position === 'top-right',
      'bottom-full left-0 mb-2': position === 'top-left',
    }
  );

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        id={id}
        aria-label='Toggle dropdown'
        aria-haspopup='true'
        aria-expanded={isOpen}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          'flex justify-between items-center gap-5 w-full py-2 px-4 bg-[#1B1D1F] rounded-xl border-2 border-[#282B30] text-[#D2D5DA]',
          style
        )}
      >
        <span>{selectedItem?.name || title}</span>
        <GoChevronDown
          size={20}
          className={classNames('transform duration-500 ease-in-out', {
            'rotate-180': isOpen,
          })}
        />
      </button>
      {/* Open */}
      {isOpen && (
        <div aria-label='Dropdown menu' className={dropdownClass}>
          <ul
            role='menu'
            aria-labelledby={id}
            aria-orientation='vertical'
            className='leading-10'
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={classNames(
                  'flex items-center cursor-pointer hover:bg-[#282B30] px-3',
                  { 'bg-[#282B30]': selectedItem?.id === item.id }
                )}
              >
                {hasImage && (
                  <Image
                    src={item.imageUrl ? item.imageUrl : ''}
                    width={30}
                    height={30}
                    alt='image'
                   
                    className='w-8 h-8 rounded-full bg-gray-400 object-cover me-2'
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;