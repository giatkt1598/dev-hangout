import TextField from "../TextField";
import { Icon } from "@iconify/react";
import SearchIcon from '@iconify/icons-ic/round-search'
import { useState } from "react";
export default function SearchBox() {
  const [value, setValue] = useState('');
  return (
    <TextField placeholder="Search Contacts"
      className="mx-3"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          console.log(value)
        }
      }}
      prefixIcon={<Icon icon={SearchIcon} />} />
  )
}
