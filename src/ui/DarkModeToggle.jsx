import React from 'react'
import ButtonIcon from '../ui/ButtonIcon'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { UseDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = UseDarkMode()
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
    )
}

export default DarkModeToggle