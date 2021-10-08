import React, { useState } from 'react';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Button from '../../components/button';
import List from '../../components/list';
import IconFloating from '../../components/icon-floating';
import TextInput from 'src/components/text-input';
import DropdownInput from 'src/components/dropdown-input';
import Modal from 'src/components/modal';

import styles from './index.module.css';

const DesignSystem = () => {
    let listItems = [
        { id: 1, title: 'List item 1', description: 'List item description 1', icon: 'navRight' },
        { id: 2, title: 'List item 2', description: 'List item description 2', icon: 'navRight' },
    ]
    let dropdownItems = [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3' },
        { value: 4, label: 'Option 4' },
        { value: 5, label: 'Option 5' },
    ]
    const [open, setOpen] = useState(false);
    if (process.env.NODE_ENV === 'development') {
        return (
            <div className={styles.content}>
                <DropdownInput options={dropdownItems} placeholder="Setor de atuação"></DropdownInput>
                <Typography color="black" variant="h1">
                    Desktop h1
                </Typography>
                <Typography color="black" variant="h2">
                    Desktop h2
                </Typography>
                <Typography color="black" variant="h3">
                    Desktop h3
                </Typography>
                <Typography color="black" variant="h4">
                    Desktop h4
                </Typography>
                <Typography color="black" variant="p1">
                    Desktop p1
                </Typography>
                <Typography color="black" variant="p2">
                    Desktop p2
                </Typography>
                <Typography color="black" variant="p3">
                    Desktop p3
                </Typography>
                <Icon name="navRight"/>
                <Button to="/" hoverColor="lightBlue" hoverBg="pink" hoverBorder="green" onClick={() => setOpen(!open)}>Button</Button>
                <br/>
                <Button variant="tertiary">Button</Button>
                <List items={listItems}/>
                <TextInput placeholder="E-mail"></TextInput>
                <IconFloating name="bwMoneyBag"/>
                <Button hoverColor="lightBlue" hoverBg="pink" hoverBorder="green" onClick={() => setOpen(!open)}>Modal</Button>
                <Modal open={open}>Hello</Modal>
            </div>
        )
    }
    else {
        return null;
    }
}

export default DesignSystem;
