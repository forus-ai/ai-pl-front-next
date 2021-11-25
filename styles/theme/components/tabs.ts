import { ComponentMultiStyleConfig } from '@chakra-ui/theme';

const Tabs: ComponentMultiStyleConfig = {
  parts: ['root', 'tablist', 'tab', 'tabpanels', 'tabpanel', 'indicator'],
  variants: {
    line: {
      tablist: { borderWidth: '0' },
      indicator: {
        display: 'none',
      },
      tab: {
        color: 'custom.gray.3',
        padding: '7px 0px',
        fontWeight: 'bold',
        borderBottomWidth: '5px',
        _focus: {
          color: 'custom.secondary',
          boxShadow: 'none',
        },
        _selected: {
          color: 'custom.secondary',
        },
      },
    },
    enclosed: {},
    unstyled: {},
    'enclosed-colored': {},
    'soft-rounded': {},
    'solid-rounded': {},
  },
  defaultProps: { variant: 'line' },
};

export default Tabs;
