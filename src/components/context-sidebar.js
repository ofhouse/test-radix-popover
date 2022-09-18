import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as SelectPrimitive from '@radix-ui/react-select';
import styled from 'styled-components';

import { slate } from '../colors';

/* -----------------------------------------------------------------------------
 * Popover
 * ---------------------------------------------------------------------------*/

const PopoverRoot = styled(PopoverPrimitive.Root)({});

const PopoverTrigger = styled(PopoverPrimitive.Trigger)({
  backgroundColor: slate.slate8,
  color: slate.slate12,
  border: 'none',
  height: '60px',
  width: '100%',
});

const PopoverContent = styled(PopoverPrimitive.Content)({
  backgroundColor: slate.slate3,
  width: '380px',
  height: '100vh',
  bottom: '20px',
});

/* -----------------------------------------------------------------------------
 * Select
 * ---------------------------------------------------------------------------*/

const SelectRoot = styled(SelectPrimitive.Root)({});

const SelectTrigger = styled(SelectPrimitive.Trigger)({});

const SelectValue = styled(SelectPrimitive.Value)({});

const SelectContent = styled(SelectPrimitive.Content)({
  backgroundColor: '#fff',
  color: slate.slate11,
  boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
  padding: '12px 0',
  borderRadius: '6px',
});

const SelectItem = styled(SelectPrimitive.Item)({
  minWidth: '120px',
  padding: '12px 20px',

  '&[data-highlighted]': {
    backgroundColor: slate.slate2,
    color: slate.slate12,
  },
});

const SelectItemText = styled(SelectPrimitive.ItemText)({});

/* -----------------------------------------------------------------------------
 * ContextSidebar
 * ---------------------------------------------------------------------------*/

function ContextSidebar() {
  return (
    <PopoverRoot>
      <PopoverTrigger>OPEN</PopoverTrigger>

      <PopoverContent side="left" align="start">
        <h3>Menu Title</h3>
        <div>
          Select:{' '}
          <SelectRoot
            onOpenChange={() => {
              // Set breakpoint here to debug the SelectContent
              // console.log('here');
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="test1">
                <SelectItemText>Test 1</SelectItemText>
              </SelectItem>
              <SelectItem value="test2">
                <SelectItemText>Test 2</SelectItemText>
              </SelectItem>
            </SelectContent>
          </SelectRoot>
        </div>
      </PopoverContent>
    </PopoverRoot>
  );
}

export { ContextSidebar };
