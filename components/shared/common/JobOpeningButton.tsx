'use client';

import * as React from 'react';
import {Check, ChevronDown} from 'lucide-react';

import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

const recruitmentMetrics = [
  {value: 'job-openings', label: 'Job Openings'},
  {value: 'new-hires', label: 'New Hires'},
  {value: 'applications-received', label: 'Applications Received'},
  {value: 'interview-stage', label: 'Interview Stage'},
  {value: 'attendance-rate', label: 'Attendance Rate'},
  {value: 'absenteeism-rate', label: 'Absenteeism Rate'},
  {value: 'cash-flow-status', label: 'Cash Flow Status'},
  {value: 'current-balance', label: 'Current Balance'},
];

const JobOpeningButton = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between bg-[linear-gradient(90deg,#41295A_0%,#2F0743_100%)]  rounded-full ml-4 cursor-pointer text-white hover:text-white">
          {value
            ? recruitmentMetrics.find(
                (recruitment) => recruitment.value === value
              )?.label
            : 'Job Openings'}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search recruitment..." className="h-9" />
          <CommandList>
            <CommandEmpty>No recruitment found.</CommandEmpty>
            <CommandGroup>
              {recruitmentMetrics.map((recruitment) => (
                <CommandItem
                  key={recruitment.value}
                  value={recruitment.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  {recruitment.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === recruitment.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default JobOpeningButton;
