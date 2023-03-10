import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from './TabPanel'
import SelectPokemon from '../PokemonList/SelectPokemons'
import { MyPokemonsAccordion } from '../MyPokemon/MyPokemons'

function selectTab(index: number) {
  return {
    id: `horizontal-tab-${index}`,
    'aria-controls': `horizontal-tabpanel-${index}`,
  }
}

export function HorizontalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', height: 300 }}>
      <Tabs
        centered
        orientation='horizontal'
        value={value}
        onChange={handleChange}
        aria-label='Horizontal tabs'
        sx={{ borderRight: 1, borderColor: 'divider' }}
        variant='fullWidth'
      >
        <Tab label='Pokemon List' {...selectTab(0)} />
        <Tab label='My Pokemons' {...selectTab(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SelectPokemon />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyPokemonsAccordion />
      </TabPanel>
    </Box>
  )
}
