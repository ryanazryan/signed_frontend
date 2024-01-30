import React, { useState } from "react"
import { MdOutlineArrowDropDown } from "react-icons/md"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button, Input } from "@nextui-org/react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

const MapelDropdown = () => {
  const items = [
    { key: "mtk", label: "MTK" },
    { key: "bindo", label: "B INDO" },
    { key: "bing", label: "B ING" },
    { key: "pai", label: "PAI" },
    { key: "pkk", label: "PKK" },
    { key: "pwdpb", label: "PWdPB" },
    { key: "pbo", label: "PBO" },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItemLabel, setSelectedItemLabel] = useState("Mata Pelajaran")

  const handleItemClick = (item) => {
    setSelectedItemLabel(item.label)
  }

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={poppins.className}>
      <Dropdown className="border-none flex justify-center items-center w-full">
        <DropdownTrigger className='max-w-40 w-40 bg-sidebar border shadow-sm flex justify-center items-center gap-3 p-3 rounded-md'>
          <Button variant="faded">
            <p className='text-center text-xs'>{selectedItemLabel}</p>
            <MdOutlineArrowDropDown />
          </Button>
        </DropdownTrigger>
        <div className="flex items-center">
          <DropdownMenu variant="faded" aria-label="Dynamic Actions">
            {filteredItems.map((item) => (
              <DropdownItem
                key={item.key}
                color={item.key === "x" ? "" : "default"}
                className="bg-input shadow-sm items-center justify-center"
                onClick={() => handleItemClick(item)}
              >
                <div className='max-w-40 w-40 h-10 flex justify-center items-center border-b bg-input hover:bg-merah hover:border hover:text-white transition duration-300 ease-in-out'>
                  <span className='text-xs'>{item.label}</span>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </div>
      </Dropdown>
    </div>
  )
}

export default MapelDropdown