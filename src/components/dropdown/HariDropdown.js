import React, { useState } from "react"
import { MdOutlineArrowDropDown } from "react-icons/md"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button, Input } from "@nextui-org/react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

const HariDropdown = () => {
  const items = [
    { key: "senin", label: "Senin" },
    { key: "selasa", label: "Selasa" },
    { key: "rabu", label: "Rabu" },
    { key: "kamis", label: "Kamis" },
    { key: "jumat", label: "Jumat" }
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItemLabel, setSelectedItemLabel] = useState("Hari")

  const handleItemClick = (item) => {
    setSelectedItemLabel(item.label)
  }

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={poppins.className}>
      <Dropdown className="border-none flex justify-center items-center w-full">
        <DropdownTrigger className='max-w-52 w-full max-h-20 bg-sidebar border shadow-sm flex justify-center items-center gap-3 p-3 rounded-md'>
          <Button variant="faded">
            <p className='text-center text-xs'>{selectedItemLabel}</p>
            <MdOutlineArrowDropDown />
          </Button>
        </DropdownTrigger>
        <div className="flex items-center">
          <DropdownMenu variant="faded" aria-label="Dynamic Actions">
            {filteredItems.map((item, index) => (
              <DropdownItem
                key={index} 
                color={item.key === "x" ? "" : "default"}
                className="bg-input w-full text-xs shadow-sm items-center justify-center"
                onClick={() => handleItemClick(item)}
              >
                <div className='w-20 max-w-20 h-10 flex justify-center items-center border-b bg-input hover:bg-merah hover:border hover:text-white transition duration-300 ease-in-out'>
                  <span className='mb-2'>{item.label}</span>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>

        </div>
      </Dropdown>
    </div>
  )
}

export default HariDropdown
